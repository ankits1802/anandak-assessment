
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { User, Check, ChevronsUpDown, Minus, Plus, Loader2 } from "lucide-react"
import { statesWithDistricts } from "@/lib/indian-states-districts"
import React, { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  name_hi: z.string().min(1, { message: "कृपया हिंदी में नाम दर्ज करें।" }),
  age: z.coerce.number().min(1, { message: "Please enter your age." }).max(120, { message: "Please enter a valid age." }),
  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"], { required_error: "Please select your gender." }),
  state: z.string({required_error: "Please select your state/UT."}).min(1, { message: "Please select your state/UT." }),
  district: z.string({required_error: "Please select your district."}).min(1, { message: "Please select your district." }),
})

export type UserInfo = z.infer<typeof formSchema>

interface UserInfoStepProps {
  onSubmit: (data: UserInfo) => void
}

const states = statesWithDistricts.map(s => ({ value: s.state, label: s.state }));

export function UserInfoStep({ onSubmit }: UserInfoStepProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      name_hi: "",
      age: undefined,
      gender: undefined,
      state: "Madhya Pradesh",
      district: undefined,
    },
  })

  const selectedState = form.watch("state")
  const nameValue = form.watch('name');
  
  const [districts, setDistricts] = useState<{value: string, label: string}[]>([]);
  const [statePopoverOpen, setStatePopoverOpen] = useState(false);
  const [districtPopoverOpen, setDistrictPopoverOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);


  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    if (nameValue && nameValue.trim().length > 0) {
      setIsTranslating(true);
      debounceTimeoutRef.current = setTimeout(async () => {
        try {
          const response = await fetch('/api/transliterate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: nameValue }),
          });
          const data = await response.json();
          if (data.transliteration) {
            form.setValue('name_hi', data.transliteration, { shouldValidate: true });
          }
        } catch (error) {
          console.error("Transliteration failed", error);
          form.setValue('name_hi', nameValue); // fallback to English name
        } finally {
          setIsTranslating(false);
        }
      }, 500); // 500ms debounce
    } else {
        form.setValue('name_hi', '', { shouldValidate: true });
        setIsTranslating(false);
    }

    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [nameValue, form]);


  useEffect(() => {
    if (selectedState) {
        const stateData = statesWithDistricts.find(s => s.state === selectedState);
        setDistricts(stateData ? stateData.districts.map(d => ({ value: d, label: d })) : []);
        form.resetField("district");
    } else {
        setDistricts([]);
    }
  }, [selectedState, form]);


  function handleFormSubmit(values: z.infer<typeof formSchema>) {
    onSubmit(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name (English)</FormLabel>
              <FormControl>
                <Input placeholder="e.g. John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name_hi"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                पूरा नाम (हिन्दी)
                {isTranslating && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
              </FormLabel>
              <FormControl>
                <Input placeholder="उदा. जॉन डो" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                    <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 shrink-0"
                          onClick={() => {
                            const currentValue = field.value;
                            if (currentValue && currentValue > 1) {
                                field.onChange(currentValue - 1);
                            }
                          }}
                        >
                            <Minus className="h-4 w-4" />
                        </Button>
                        <Input
                          type="number"
                          placeholder="e.g. 25"
                          className="text-center"
                          {...field}
                          value={field.value ?? ""}
                          onChange={e => field.onChange(e.target.value === '' ? undefined : +e.target.value)}
                        />
                         <Button
                          type="button"
                          variant="outline"
                          size="icon"
                          className="h-10 w-10 shrink-0"
                          onClick={() => {
                            const currentValue = field.value || 0;
                            if (currentValue < 120) {
                                field.onChange(currentValue + 1);
                            }
                          }}
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>State/Union Territory</FormLabel>
                <Popover open={statePopoverOpen} onOpenChange={setStatePopoverOpen}>
                    <PopoverTrigger asChild>
                    <FormControl>
                        <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value
                            ? states.find(
                                (s) => s.value === field.value
                            )?.label
                            : "Select state/UT"}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                    <Command>
                        <CommandInput placeholder="Search state/UT..." />
                        <CommandEmpty>No state/UT found.</CommandEmpty>
                        <CommandList>
                        <CommandGroup>
                            {states.map((s) => (
                            <CommandItem
                                value={s.label}
                                key={s.value}
                                onSelect={() => {
                                  form.setValue("state", s.value);
                                  setStatePopoverOpen(false);
                                }}
                            >
                                <Check
                                className={cn(
                                    "mr-2 h-4 w-4",
                                    s.value === field.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                                />
                                {s.label}
                            </CommandItem>
                            ))}
                        </CommandGroup>
                        </CommandList>
                    </Command>
                    </PopoverContent>
                </Popover>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
                <FormItem className="flex flex-col">
                <FormLabel>District</FormLabel>
                <Popover open={districtPopoverOpen} onOpenChange={setDistrictPopoverOpen}>
                    <PopoverTrigger asChild disabled={!selectedState}>
                    <FormControl>
                        <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                        )}
                        >
                        {field.value
                            ? districts.find(
                                (d) => d.value === field.value
                            )?.label
                            : (selectedState ? "Select district" : "Select a state first")}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height] p-0">
                    <Command>
                        <CommandInput placeholder="Search district..." />
                        <CommandEmpty>No district found.</CommandEmpty>
                        <CommandList>
                            <CommandGroup>
                                {districts.map((d) => (
                                <CommandItem
                                    value={d.label}
                                    key={d.value}
                                    onSelect={() => {
                                      form.setValue("district", d.value);
                                      setDistrictPopoverOpen(false);
                                    }}
                                >
                                    <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        d.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                    />
                                    {d.label}
                                </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                    </PopoverContent>
                </Popover>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
          <User className="mr-2 h-5 w-5" />
          Start Assessment
        </Button>
      </form>
    </Form>
  )
}
