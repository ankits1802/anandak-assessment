
export interface Question {
  id: number;
  trait: 'Gratitude' | 'Resilience' | 'Empathy' | 'Sociability' | 'Social Cognition' | 'Courage';
  questionText: string;
  options: { text: string; score: number }[];
}

export const questions: Question[] = [
  {
    id: 1,
    trait: 'Gratitude',
    questionText: "You need Rs. 15000 urgently. You go to a friend who has that much of money. Your friend gives only Rs. 3000 and asks you to collect the rest from someone else.",
    options: [
      { text: "You are thankful to him for giving you Rs. 3000", score: 3 },
      { text: "You are disappointed that your friend didn’t give you money, despite having it", score: 1 },
      { text: "You are neither grateful nor disappointed because you feel this is how the world goes on", score: 2 },
    ],
  },
  {
    id: 2,
    trait: 'Resilience',
    questionText: "You do not get labors for reaping rice harvest. You may get so by paying 25 % higher wages at the moment. You decide to wait for a week. Hailstorm takes place in between and you suffer a good amount of loss.",
    options: [
      { text: "You repent for not employing labors with higher wages", score: 1 },
      { text: "You consider yourself unlucky & wait for good fortune", score: 2 },
      { text: "You think of alternatives to minimize the loss by whatever you can do", score: 3 },
    ],
  },
  {
    id: 3,
    trait: 'Empathy',
    questionText: "You are passing through a slum and find some children picking up garbage.",
    options: [
      { text: "You feel sad, and imagine if you could share their misery", score: 3 },
      { text: "You think about their poor state and feel unhappy", score: 1 },
      { text: "You find yourself helpless and pray for these children", score: 2 },
    ],
  },
  {
    id: 4,
    trait: 'Sociability',
    questionText: "In a festival gathering, you meet a stranger who does not belong to your community.",
    options: [
      { text: "You approach first and talk to that person", score: 3 },
      { text: "You wait for the person speak first", score: 2 },
      { text: "You avoid unknown person in a gathering", score: 1 },
    ],
  },
  {
    id: 5,
    trait: 'Social Cognition',
    questionText: "You are working in an office and your boss is very punctual with time. You came very late for a very important meeting and your boss does not mention anything about it. You:",
    options: [
      { text: "You understand that he/she might be disappointed and apologize to him/her", score: 2 },
      { text: "You remain silent since he/she does not mention anything about it", score: 1 },
      { text: "You meet him/her after the meeting and give enough reason why you are not at fault", score: 3 },
    ],
  },
  {
    id: 6,
    trait: 'Courage',
    questionText: "While passing by a pond, you see a child is sinking and you don’t know how to swim.",
    options: [
      { text: "You try to reach swim up to the child with the help of a wooden log in the pond to save the child", score: 2 },
      { text: "You start shouting for others to help", score: 1 },
      { text: "You try to reach the child as far as you do not need to swim", score: 3 },
    ],
  },
];


export const individualFeedback: {
  [key in Question['trait']]: {
    [key: number]: string[];
  };
} = {
  Gratitude: {
    1: [
      "There is potential to cultivate a greater sense of gratitude for all forms of support.",
      "Focusing on the value of small gestures is a beneficial area for personal growth.",
      "Recognizing the positive intent behind any help received can significantly enhance relationships.",
      "An opportunity exists to shift perspective from disappointment to appreciation.",
      "Developing a habit of thankfulness, even for partial support, fosters contentment.",
      "You may find more peace by appreciating what is offered, rather than focusing on what is not.",
      "Learning to be thankful for incremental help is a step towards greater emotional well-being.",
      "A more grateful outlook can transform your interactions and personal satisfaction.",
      "Every act of support holds value; recognizing this is a key skill to develop.",
      "Cultivating gratitude can shift your focus from perceived shortfalls to genuine appreciation.",
      "Remember that any help is a gift. Acknowledging it can make a profound difference.",
      "There's room to grow in acknowledging the support you're given, no matter the scale.",
      "Even small acts of kindness hold immense value; try to center your focus on them.",
      "Building a habit of gratitude can fundamentally change your view of such situations.",
      "It's worthwhile to practice thankfulness, even when expectations aren't fully met.",
      "Gratitude is a powerful tool for personal happiness; consider exploring its depths.",
      "Try to find the silver lining when people offer what they can, as it builds positive connections.",
      "Embracing gratitude can transform disappointment into an opportunity for understanding.",
      "Acknowledging every contribution, big or small, enriches your own perspective.",
      "Shifting your focus to what you did receive is a powerful step in emotional growth."
    ],
    2: [
      "You maintain a practical and balanced perspective, which is a sign of maturity.",
      "Your realistic outlook is commendable, and expressing more gratitude can enrich your life further.",
      "You have a solid foundation of thankfulness that you can build upon for even stronger relationships.",
      "Your balanced perspective is a strength, and a greater focus on expressing gratitude can enhance it.",
      "You possess a healthy level of gratitude, with the potential for even deeper appreciation.",
      "Continue to nurture your sense of gratitude; it's a quality that serves you well.",
      "Your pragmatic approach is valuable, and more expressed gratitude could be even more impactful.",
      "You're on the right track; a little more focus on gratitude can make a big impact.",
      "You have a good grasp of gratitude, and there's always a next level of appreciation to reach.",
      "Your approach to gratitude is pragmatic; consider expressing it more often to strengthen bonds.",
      "You are doing well in being grateful, and more practice will only refine this admirable trait.",
      "Your sense of gratitude is stable; aim to elevate it further for deeper personal fulfillment.",
      "You are quite grateful, and this quality can be polished to become a cornerstone of your character.",
      "Continue to build on your existing foundation of gratitude; it is a key to positive interactions.",
      "Your thoughtful approach is a valuable asset that can be enhanced with more vocal appreciation.",
      "You have a mature perspective on give-and-take, which is a solid base for growth.",
      "Your ability to remain neutral shows emotional control, a quality that pairs well with active gratitude.",
      "This balanced view is a great starting point for cultivating even deeper thankfulness.",
      "Your practical mindset is a strength; layering it with more expressed gratitude will be powerful.",
      "You navigate these situations with a level head, which is an excellent platform for developing deeper gratitude."
    ],
    3: [
      "You possess a profound sense of gratitude, which is a truly remarkable and rare trait.",
      "Your ability to appreciate help, no matter the size, is a testament to your excellent character.",
      "Your high level of gratitude is a cornerstone of positive and resilient relationships.",
      "This exceptional quality of gratitude will serve you well in all aspects of life.",
      "Your natural ability to be thankful is a gift that enriches your interactions with others.",
      "You have an admirable and deep-seated sense of gratitude that reflects great emotional maturity.",
      "This high degree of gratitude makes you a very appreciative and respected person.",
      "Your outlook is beautifully enriched by your strong sense of thankfulness.",
      "Being so grateful is a wonderful way to navigate the world and build strong connections.",
      "Your capacity for gratitude is a clear indicator of your positive and empathetic nature.",
      "People undoubtedly appreciate your highly grateful and positive disposition.",
      "This excellent quality of gratitude is something to be genuinely proud of.",
      "Your perspective is beautifully shaped by your intrinsic high level of gratitude.",
      "You are a naturally grateful person, which is a fantastic and powerful attribute.",
      "Your profound gratitude is a sign of great wisdom and emotional intelligence.",
      "This outstanding level of gratitude is both rare and incredibly valuable in today's world.",
      "You exemplify what it means to be truly thankful, and it's an inspiring quality.",
      "Your innate gratitude is a powerful and positive force in your life and the lives of others.",
      "Your deep appreciation for any support reflects a generous and positive spirit.",
      "This capacity for thankfulness is a key strength that fosters loyalty and deep connection."
    ],
  },
  Resilience: {
    1: [
      "There is an opportunity to grow by learning from setbacks instead of dwelling on them.",
      "Building resilience involves accepting what happened and strategically planning your next steps.",
      "A more solution-oriented mindset will empower you to bounce back from difficulties effectively.",
      "Letting go of repentance and embracing proactive problem-solving will build your inner strength.",
      "You have the capacity to be more resilient; focus your energy on actionable steps forward.",
      "Transforming regret into a constructive plan is the very heart of a resilient mindset.",
      "Learning from mistakes without getting stuck in them is crucial for developing resilience.",
      "Channel your energy into finding solutions; this will make you more formidable in the face of challenges.",
      "Every setback is a stepping stone if you choose to learn from it and adapt your strategy.",
      "Focus on future actions rather than past decisions to cultivate a powerful sense of resilience.",
      "Shifting your mindset from 'what if' to 'what now' is a transformative practice.",
      "Resilience is a skill that can be strengthened by focusing on proactive, forward-looking steps.",
      "Developing a more future-focused approach to setbacks will serve you very well.",
      "Every challenge is a chance to practice resilience; view this as a learning opportunity.",
      "Focusing on what you can control is the key to unlocking greater personal resilience.",
      "Dwelling on the past can hinder your ability to move forward; try to look ahead with purpose.",
      "True growth comes from analyzing a setback and using it to inform future success.",
      "Embrace challenges as valuable data points for learning and adaptation.",
      "Your energy is best spent on crafting new solutions rather than on past decisions.",
      "To build resilience, practice seeing every obstacle as a puzzle to be solved."
    ],
    2: [
      "You possess a degree of resilience, and you can develop it further with a more proactive stance.",
      "Your balanced view is a good asset; adding more proactive strategies will enhance it significantly.",
      "You handle setbacks with a level head; aim to be more proactive in seeking solutions next time.",
      "You have the potential to be even more resilient by focusing more on action-oriented responses.",
      "Your ability to accept misfortune is a part of resilience, but proactive action is also crucial.",
      "You can enhance your resilience by taking a more commanding role in your circumstances.",
      "Your perspective is balanced but could be strengthened with more focus on your own agency.",
      "You are on your way to becoming more resilient; keep practicing proactive and strategic thinking.",
      "Moving from acceptance to action will significantly boost your effectiveness and resilience.",
      "You have a solid foundation; now focus on the specific actions you can take to change the outcome.",
      "It's good that you don't blame yourself, but now consider what you can actively do next.",
      "This is a healthy mindset, but remember that you can also create your own good fortune through action.",
      "You're moderately resilient; challenge yourself to take more initiative in tough times.",
      "Continue to develop your resilience by focusing on practical, immediate solutions.",
      "Your outlook is healthy but could be more empowering with a greater focus on your own influence.",
      "You have a good starting point for resilience; continue to build on it with decisive action.",
      "Balancing acceptance with a bias for action is key to improving your resilience.",
      "While you acknowledge bad luck, remember you have the power to influence your path forward.",
      "This is a mature perspective; the next step is to channel it into a concrete plan.",
      "Your temperament is steady, which is a great base for building a more action-oriented resilience."
    ],
    3: [
      "Your proactive and resilient mindset is one of your greatest and most valuable assets.",
      "Your problem-solving approach to challenges showcases your high level of resilience.",
      "This ability to think of alternatives under pressure is a hallmark of a truly resilient individual.",
      "You are exceptionally good at navigating setbacks and forging a new path forward.",
      "Your resilient nature is a powerful tool for overcoming any obstacle you may face.",
      "This solution-focused mindset demonstrates excellent mental fortitude and resilience.",
      "You have an admirable capacity to remain constructive and proactive under intense pressure.",
      "Your strength in the face of loss is a clear indicator of high and effective resilience.",
      "You are a highly resilient person, which is a fantastic and sought-after quality.",
      "Your ability to minimize loss and look for opportunities is both strategic and commendable.",
      "This proactive response to adversity is a sign of a very resilient and adaptive personality.",
      "You possess the mental fortitude to handle complex challenges effectively and with grace.",
      "Your resilient character will undoubtedly help you succeed in many areas of life.",
      "This is a prime example of a resilient mindset in action, turning adversity into opportunity.",
      "You are skilled at turning a negative situation into a chance to take control and innovate.",
      "Your capacity to think on your feet in a crisis is a powerful and impressive strength.",
      "This high level of resilience is a valuable and admirable trait for leadership.",
      "Your focus on finding solutions in the face of adversity is a sign of great inner strength.",
      "You have a strong ability to bounce back and take decisive control of a situation.",
      "You don't just endure challenges; you actively seek ways to master them."
    ],
  },
  Empathy: {
    1: [
      "There's potential to develop a deeper empathetic response by engaging more with your feelings.",
      "Allowing yourself to feel for others is a powerful way to build and express empathy.",
      "Try to move beyond just thinking about a situation to truly feeling for the people in it.",
      "Empathy grows when you allow yourself to connect with the emotions of others, not just their circumstances.",
      "You can cultivate more empathy by trying to feel what others are feeling.",
      "A deeper connection can be formed by allowing your heart to be part of your response.",
      "Your cognitive understanding is present; now try to engage your emotions for a fuller empathetic experience.",
      "This is an opportunity to grow your empathy by embracing a deeper emotional connection.",
      "Moving from sympathy to empathy involves feeling with someone, not just for them.",
      "Let your emotional response guide you to a deeper, more authentic understanding.",
      "You can strengthen your empathy by not shying away from the emotions a situation evokes in you.",
      "True empathy is feeling the 'ouch,' not just seeing it. You can practice this.",
      "Consider how you might feel in their shoes; this can build your emotional empathy.",
      "You have the capacity for more profound empathy; it starts with letting yourself feel.",
      "Challenge yourself to connect emotionally, not just intellectually, for a richer human experience.",
      "A deeper level of empathy is within your reach if you open up to the emotions of the situation.",
      "Connecting with others' plights on an emotional level is a skill that can be nurtured.",
      "Moving from observation to feeling is a key step in developing profound empathy.",
      "Opening yourself up to the emotions of others can deepen your empathetic connection significantly.",
      "You can always improve in terms of being empathetic by allowing yourself to feel others' emotions."
    ],
    2: [
      "You feel for others' plight, and you can further develop this into a deeper understanding.",
      "Your compassionate thoughts are a strong foundation for building even greater empathy.",
      "You show genuine concern for others, which is a stepping stone to stronger empathetic connections.",
      "You have a good level of empathy that can be enhanced further with practice.",
      "Your ability to feel helpless shows you care deeply; you can build on this foundation of compassion.",
      "This is a commendable display of empathy, with room to grow into even more profound understanding.",
      "Your response shows a caring nature, which is the very basis of true empathy.",
      "You possess a solid sense of empathy, and you can continue to develop it into a key strength.",
      "Your compassion is evident; now you can work on deepening your empathetic skills.",
      "You're empathetic, and there's always an opportunity to become even more so.",
      "This is a healthy and mature empathetic response that can be strengthened over time.",
      "Your concern for others is a great start; you can take it a step further in understanding.",
      "You are on the right path with empathy; keep nurturing this important quality.",
      "You have a strong capacity for empathy; continue to explore its depths.",
      "Your response is deeply empathetic, and you can continue to refine this important skill.",
      "This shows a good level of concern, which can be channeled into deeper, active empathy.",
      "You are quite empathetic, and this is a quality worth cultivating further for stronger bonds.",
      "Your feelings of helplessness are a form of empathy; you can build from here towards action.",
      "You have a strong base of empathy that you can expand on to great effect.",
      "You are moderately high on empathy, and you can certainly improve upon this strong base."
    ],
    3: [
      "You possess a strong empathetic sense, allowing you to understand and connect with others deeply.",
      "Your capacity to feel what others are feeling is a powerful and commendable trait.",
      "Your high empathy allows you to connect with people on a very meaningful and authentic level.",
      "This is a wonderful demonstration of a deeply empathetic and compassionate person.",
      "You have a gift for understanding and sharing the feelings of others, which builds strong bonds.",
      "Your ability to imagine their misery is a sign of profound and impactful empathy.",
      "This high level of empathy is a cornerstone of strong, trusting interpersonal relationships.",
      "You are a truly empathetic individual, and that is a rare and beautiful quality.",
      "Your capacity to feel with others is a testament to your excellent character and emotional depth.",
      "This deep sense of empathy will help you connect with people from all walks of life.",
      "You possess an admirable and powerful sense of empathy that fosters genuine connection.",
      "Your response shows a remarkable ability to step into someone else's shoes and feel their world.",
      "This is a clear sign of high emotional intelligence and profound empathy.",
      "Your empathetic nature is one of your greatest and most influential strengths.",
      "You have a natural ability to connect with the feelings of others in a meaningful way.",
      "This profound empathy is a valuable asset in both your personal and professional life.",
      "Your response is a beautiful example of empathy in its truest and most sincere form.",
      "You are an exceptionally empathetic person, which is something to be valued and cherished.",
      "You are very high on empathy, which allows you to see the world from others' perspectives.",
      "Your ability to emotionally connect with others' situations shows a high degree of emotional intelligence."
    ],
  },
  Sociability: {
    1: [
      "Stepping out of your comfort zone in social settings can build powerful self-confidence.",
      "Making small, consistent efforts to connect with new people can greatly enhance your social skills.",
      "Overcoming reticence is a journey, and every small step toward connection counts.",
      "There is a significant opportunity to grow your social confidence by taking small, calculated risks.",
      "Building your social network can be a deeply rewarding experience; consider taking the first step.",
      "You can become more comfortable and influential in social situations with deliberate practice.",
      "Challenging yourself to be more open in gatherings can lead to unexpected and positive outcomes.",
      "Avoiding new people can limit your experiences; try to adopt a more approachable posture.",
      "You can develop your sociability by setting small goals, like initiating one new conversation.",
      "Your social strength can be built by gradually increasing your interactions in safe environments.",
      "Don't be afraid to initiate contact; it becomes progressively easier with practice.",
      "A more sociable approach can open up new opportunities for friendship and collaboration.",
      "Consider the immense benefits of being more outgoing in various social settings.",
      "You have the clear potential to be more sociable; it's a skill you can develop and master.",
      "Try to see meeting new people as an opportunity for growth, not a source of anxiety.",
      "Taking the initiative in social situations can significantly boost your self-esteem and influence.",
      "You can improve your social skills by practicing them in low-pressure, supportive environments.",
      "A little more sociability can go a long way in making you feel more connected and secure.",
      "Start small, and you'll soon find your social confidence growing exponentially.",
      "You can improve your sociability to feel stronger and more secure in diverse groups."
    ],
    2: [
      "You are open to social interaction, and taking the first step more often can be highly beneficial.",
      "You have a reserved but willing social nature that you can build upon for greater impact.",
      "Challenging yourself to initiate conversations can strengthen your social network and influence.",
      "You have a good level of sociability, and you can become even more outgoing and connected.",
      "Your willingness to engage is a great asset; try taking the lead sometimes to expand your circle.",
      "You're on the right track; being more proactive will enhance your social life and opportunities.",
      "This is a healthy approach to social situations, with room to be more assertive and influential.",
      "You possess a good degree of sociability that can be developed into a significant personal strength.",
      "You are comfortable in social settings, and can become even more so by initiating more often.",
      "Your reserved nature is perfectly fine, but don't hesitate to make the first move when it counts.",
      "You have a solid foundation of sociability; now try to be more of an initiator to unlock new potentials.",
      "This balanced approach is good; a bit more proactivity can make it even more effective.",
      "You are quite sociable, and can push yourself to be even more engaging and memorable.",
      "Your current level of sociability is good, and you can build on it to become a key connector.",
      "You handle social situations well; challenge yourself to be the one to start conversations more.",
      "You have a friendly demeanor; use it to initiate more interactions and build rapport.",
      "You're doing well socially; a little more initiative will make you a great networker.",
      "This is a good, comfortable level of sociability that you can easily expand upon.",
      "Continue to build on your social skills by taking the initiative more frequently.",
      "You are moderately high on sociability, and can open up to others a bit more to great effect."
    ],
    3: [
      "Your proactive and friendly approach makes you a natural and effective networker.",
      "You are comfortable and confident in initiating social connections, a key leadership trait.",
      "Your high sociability is a great asset in building strong, lasting relationships.",
      "Your outgoing nature makes it easy for you to connect with others and build rapport instantly.",
      "This high level of sociability is a fantastic skill for both personal and professional success.",
      "You are a natural at meeting new people and making them feel comfortable and valued.",
      "Your confidence in diverse social situations is a key strength that opens many doors.",
      "This proactive approach to socializing is a sign of a very confident and open person.",
      "You have an admirable ability to build rapport with strangers quickly and authentically.",
      "Your sociability is a great advantage in any group setting, allowing you to lead and influence.",
      "You are an excellent example of a sociable and engaging individual who draws people in.",
      "Your willingness to approach others first is a commendable trait that builds bridges.",
      "This high sociability will undoubtedly bring many interesting people and opportunities into your life.",
      "You possess a natural talent for networking and building meaningful connections.",
      "Your friendly and approachable nature is one of your best and most effective qualities.",
      "You are a social catalyst, and this trait will serve you very well in all your endeavors.",
      "This level of sociability shows you are a confident and open-minded individual.",
      "Your skill in initiating conversations is a valuable and highly sought-after asset.",
      "You are a highly sociable person, which is a wonderful and useful quality for success.",
      "You are very high on sociability, which helps you develop strong and diverse social networks."
    ],
  },
  "Social Cognition": {
    1: [
      "Developing your awareness of unspoken social cues is a valuable skill for navigating relationships.",
      "Learning to read between the lines in social interactions can prevent misunderstandings and build trust.",
      "Paying closer attention to non-verbal signals will significantly enhance your social cognition.",
      "There's an opportunity to develop your ability to read social situations with greater accuracy.",
      "Improving your social awareness can help you navigate complex interactions more smoothly.",
      "Consider the underlying messages in what people don't say to gain a deeper understanding.",
      "A deeper understanding of social dynamics can be very beneficial for your personal and professional life.",
      "You can work on being more attuned to the subtleties and nuances of social interactions.",
      "Social cognition is a skill; you can improve it with deliberate observation and practice.",
      "Try to be more aware of the context and unspoken rules in various social situations.",
      "This is an area where you can grow to avoid social awkwardness and build stronger rapport.",
      "Focus on understanding the unspoken rules of social engagement to increase your effectiveness.",
      "You have the potential to become much more socially perceptive with focused effort.",
      "A little more attention to social cues can make a big difference in your interactions.",
      "Sharpening your social radar will help you in many situations, both personal and professional.",
      "You can enhance your social intelligence by being a more active and mindful observer.",
      "Learning to interpret social signals will improve your interactions and relationships.",
      "This is a good opportunity to work on your social perception skills for greater success.",
      "Strive to be more mindful of the social atmosphere in your interactions to better adapt.",
      "You can always improve your social cognition to avoid awkwardness and connect more effectively."
    ],
    2: [
      "You have a good ability to read social situations and can refine this skill even further.",
      "You are clearly aware of social dynamics and can continue to build on this solid understanding.",
      "Your instinct to apologize and smooth things over shows good social awareness and maturity.",
      "You have a solid foundation in social cognition; keep honing this skill to master it.",
      "Your understanding of the situation is good; you can make it even better with more experience.",
      "This is a strong demonstration of social cognition, with the potential for even greater nuance.",
      "Your response shows a healthy and effective level of social intelligence.",
      "You possess a good sense of social awareness, which you can continue to develop into a key strength.",
      "You are on the right track with your social understanding; keep practicing and observing.",
      "This is a smart and socially aware response that builds trust and repairs relationships.",
      "You have a good grasp of the social cues in this situation, reflecting strong perception.",
      "Your interpretation of the situation is quite accurate and shows good judgment.",
      "You are doing well in understanding social complexities; continue to learn and adapt.",
      "This shows a good level of social perception that you can confidently build upon.",
      "Your response is appropriate and shows you are socially aware and responsible.",
      "You have a good understanding of social etiquette and professional dynamics.",
      "This is a mature and socially intelligent way to handle a delicate situation.",
      "Your social cognition is one of your strengths, and you can make it even stronger.",
      "You are quite good at reading people, and this is an incredibly valuable skill.",
      "You are moderately high on social cognition and can always learn a bit more."
    ],
    3: [
      "You demonstrate a sophisticated and strategic understanding of social dynamics.",
      "Your high social cognition allows you to navigate complex interactions with confidence and ease.",
      "Your strategic approach to this social dilemma shows high social and emotional intelligence.",
      "You have an excellent grasp of social nuances and how to manage them effectively.",
      "This response indicates a very high level of social cognition and situational awareness.",
      "You are skilled at handling delicate social situations to achieve a positive outcome.",
      "Your ability to think ahead and manage perceptions is a sign of superior social cognition.",
      "This is a very savvy and socially intelligent response that shows great foresight.",
      "You possess a deep understanding of how to navigate workplace dynamics effectively.",
      "Your approach is both strategic and socially aware, which is a powerful combination for success.",
      "This demonstrates a superior level of social cognition and proactive problem-solving.",
      "You are very adept at reading and responding to complex social cues with precision.",
      "Your response shows a masterful understanding of social strategy and interpersonal skills.",
      "You have a very high degree of social intelligence, which is a great asset for leadership.",
      "This is an excellent example of advanced social cognition in a practical context.",
      "You are a very astute observer of social dynamics and human behavior.",
      "Your ability to manage the situation so proactively and confidently is impressive.",
      "You have a remarkable talent for social navigation and strategic communication.",
      "Your high social cognition helps you excel in varied and demanding social situations.",
      "Your ability to understand social cues and react thoughtfully is excellent."
    ],
  },
  Courage: {
    1: [
      "Your instinct to immediately call for specialized help is the most responsible and often the bravest course of action.",
      "Recognizing your limitations in a crisis and quickly mobilizing support is a sign of true wisdom and courage.",
      "This is a very pragmatic and responsible choice that prioritizes the child's safety above all.",
      "You have a clear-headed and honest approach to emergencies, which is a valuable trait.",
      "This response is grounded in reality and focuses on the most effective way to ensure a positive outcome.",
      "It is honest to admit limitations and seek help from those who are more capable, which is courageous.",
      "This is a practical and life-saving response, showing great maturity under pressure.",
      "You recognize the need for expert help, which is a sign of wisdom and true courage.",
      "This is a very honest assessment of the situation and your own abilities, which is commendable.",
      "Your instinct is to get the right help, which is often the most courageous and effective thing to do.",
      "This is a practical and potentially life-saving response.",
      "You are being honest about what you can't do, and that honesty is a form of courage.",
      "This is a very responsible and honest reaction to a dangerous situation.",
      "You're not pretending to be a hero in a way that could cause more harm, and that honesty is valuable.",
      "This response is both honest and smart, maximizing the chances of a good result.",
      "Your choice to call for help is a sign of mature and honest thinking under extreme pressure.",
      "In a crisis, honesty about one's abilities is paramount, and you demonstrate that well.",
      "Choosing the most effective path to help, even if indirect, is a form of practical courage.",
      "This shows a strong sense of responsibility and an honest appraisal of a critical situation.",
      "Your response indicates that honesty guides your actions, which pays dividends in trust and effectiveness."
    ],
    2: [
      "Your response shows a commendable willingness to act and take a calculated risk to help.",
      "You balance personal risk and direct action, showing a practical and admirable form of courage.",
      "Your approach is a brave mix of caution and a heroic desire to intervene.",
      "This response shows courage and a quick-thinking willingness to take a calculated risk.",
      "You are trying to help while being mindful of the danger, which is both brave and intelligent.",
      "This is a courageous attempt to save a life, balanced with a healthy degree of self-preservation.",
      "Your action shows a brave heart and a quick-thinking, resourceful mind.",
      "This is a very courageous response that balances risk and the powerful desire to help.",
      "You are willing to put yourself in harm's way to an extent, which is a true mark of courage.",
      "This is a commendable act of bravery, using the resources at hand to make a difference.",
      "Your response is both brave and highly resourceful under pressure.",
      "This shows a great deal of courage and a desire to take immediate, impactful action.",
      "You are not afraid to take risks to help someone in need, which is a noble quality.",
      "This is a very heroic and courageous response, demonstrating a bias for action.",
      "Your immediate instinct is to act and help, which is incredibly brave.",
      "This is a very courageous and selfless act of attempting to assist.",
      "You are willing to take a significant risk to save a life, which is admirable.",
      "This response is a testament to your bravery and quick, innovative thinking.",
      "You are a very courageous person, willing to do what it takes to help others.",
      "You try to be honest about your limits while still pushing them, a skill you can always improve."
    ],
    3: [
      "Your response indicates a high level of honesty about your own abilities and limitations.",
      "Acknowledging what you can and cannot do, while still acting, is a true sign of integrated honesty.",
      "You are truthful and realistic, which are invaluable traits in any high-stakes situation.",
      "This response shows a brave attempt to help right up to the edge of your limits, which is very honest.",
      "You are honest about your limitations but still try to do everything you possibly can.",
      "This is a courageous and honest response, pushing your own boundaries to help effectively.",
      "Your action demonstrates both bravery and an honest, accurate assessment of your skills.",
      "This is a very courageous act, going as far as you safely can to provide aid.",
      "You are being both honest and brave by doing what is within your power to do.",
      "This response shows a great deal of courage, tempered with a wise realism.",
      "You are willing to take a personal risk up to your limit, and that is a sign of true courage.",
      "This is an admirable act of bravery, testing your own limits to save another person.",
      "Your response is both courageous and admirably honest about your capabilities.",
      "This is a very noble and brave thing to do, bridging the gap between desire and ability.",
      "You are not letting your limitations stop you from trying, which is incredibly courageous.",
      "This is a sign of great courage and personal integrity under pressure.",
      "You are pushing yourself to the edge of your ability to help, which is heroic.",
      "This is a very brave and honest response to a critical, life-threatening situation.",
      "Your willingness to help, despite the risks, is a testament to your profound courage.",
      "You are very honest, and that is always a good and respectable thing."
    ],
  }
};

export const getIndividualFeedback = (trait: Question['trait'], score: number): string => {
  const feedbackOptions = individualFeedback[trait]?.[score];
  if (!feedbackOptions || feedbackOptions.length === 0) {
    return "";
  }
  return feedbackOptions[Math.floor(Math.random() * feedbackOptions.length)];
};


const finalFeedbackMatrix: { [key: string]: string[] } = {
  high: [
    "Your responses indicate a well-developed suite of social and emotional skills, suggesting a natural aptitude for navigating diverse and complex social environments with confidence and grace.",
    "The assessment highlights your robust set of interpersonal skills, positioning you as an adaptable and effective individual who is likely to thrive in varied social and professional settings.",
    "You possess many qualities that make you highly effective in diverse social contexts. Your ability to understand, connect, and adapt is a significant strength.",
    "Your combination of skills suggests a strong capacity for leadership and influence. You are well-equipped to handle nuanced social dynamics with insight and integrity.",
    "This assessment reveals a high degree of social and emotional intelligence, indicating that you are poised for success in roles requiring strong interpersonal abilities.",
    "You demonstrate a natural proficiency in social navigation. Your skills in empathy, resilience, and communication are strong indicators of future success in collaborative environments.",
    "The pattern of your answers points to a sophisticated understanding of social dynamics. You are likely a person who builds strong, trust-based relationships with ease.",
    "Your results show a remarkable balance of self-awareness and social perception, qualities that are essential for thriving in today's interconnected world.",
    "You exhibit a powerful combination of resilience and sociability, suggesting you can not only build networks but also sustain them through challenges.",
    "This assessment reflects a high level of personal and interpersonal competence. You are well-prepared to engage effectively and meaningfully in a wide range of social situations.",
    "Your aptitude for social cognition is a clear strength, allowing you to interpret situations accurately and respond in a way that is both effective and appropriate.",
    "The qualities you've demonstrated are hallmarks of a person who is not only socially adept but also genuinely connects with others, fostering positive and productive interactions.",
    "Your high score suggests a natural ability to build rapport and trust, making you a valuable asset in any team or community.",
    "You possess the interpersonal toolkit to not only succeed but also to empower others in a variety of social and professional landscapes.",
    "Your results indicate a person who is both resilient in the face of adversity and gracious in their interactions—a powerful combination for personal and professional growth.",
    "You have a keen sense of your environment and the people in it, allowing you to adapt your approach for optimal outcomes.",
    "The assessment shows that you are a confident and effective communicator, capable of navigating social complexities with ease.",
    "Your strong results across multiple traits suggest a well-rounded and emotionally intelligent individual, capable of making a positive impact.",
    "You have a remarkable capacity for understanding others, which, combined with your resilience, makes you a formidable and respected individual.",
    "The insights from this assessment confirm that you have a strong foundation for building a successful and fulfilling life, rich with positive relationships."
  ],
  medium: [
    "You have a solid foundation of social skills, with clear areas identified for future growth and improvement. With focused effort, you can significantly enhance your effectiveness.",
    "You are well-equipped for many social situations and can become even more effective by developing specific skills. This assessment provides a roadmap for your growth.",
    "You have some very good qualities and can improve in others in order to excel in diverse social areas. Your self-awareness is the first step on this promising journey.",
    "This assessment shows a good balance of strengths and opportunities for development. Honing your skills in the identified areas will unlock your full potential.",
    "Your results indicate a solid set of interpersonal skills with the potential for mastery. Continued focus on self-improvement will yield significant rewards.",
    "You possess a promising foundation of social and emotional awareness. Targeting specific areas for development will accelerate your personal and professional growth.",
    "The assessment highlights a number of your strengths while also pointing toward skills that could be refined. This is a great position to be in for meaningful self-development.",
    "You have a commendable toolkit of social skills. By polishing some of these tools, you can increase your impact and confidence in a variety of settings.",
    "Your responses show a healthy mix of established skills and areas ripe for development. Embrace this opportunity to build upon your already strong foundation.",
    "You are on a positive trajectory. This assessment should serve as a valuable guide for transforming your good qualities into exceptional ones.",
    "Your current skill set is a great launching pad. With strategic effort in key areas, you can elevate your ability to navigate complex social environments.",
    "This assessment suggests you are adaptable and aware, with the capacity to become even more influential. Focus on turning your potential into proven strength.",
    "You have a good understanding of social dynamics. Deepening this understanding through practice and reflection will be highly beneficial.",
    "The results point to a capable individual with a clear path to even greater achievement. Your willingness to grow is your greatest asset.",
    "You have a number of valuable qualities. The next step is to intentionally cultivate the skills that will round out your interpersonal profile.",
    "This is a strong starting point. By focusing on the opportunities for growth highlighted here, you can build a truly impressive set of social skills.",
    "Your assessment shows that you are already effective in many areas. A focused approach to development will make you a standout in any social or professional context.",
    "You have a good mix of intuition and practical skills. Strengthening specific competencies will make you even more successful in your interactions.",
    "The qualities you possess are valuable. Now is the perfect time to build on them, transforming your potential into undeniable expertise.",
    "Your results are encouraging, showing a person who is self-aware and capable. Use these insights to guide your journey toward personal mastery."
  ],
  low: [
    "This assessment reveals significant opportunities for you to develop your social skills to navigate situations more effectively and confidently. The journey of a thousand miles begins with a single step.",
    "Focusing on building your social and emotional awareness will be key to your growth. You have untapped potential waiting to be discovered.",
    "You have a great deal of potential, but there is a journey ahead. Committing to working on your diverse social skills will be a rewarding endeavor.",
    "The results suggest that a dedicated focus on interpersonal skills would be highly beneficial. Every expert was once a beginner, and your growth journey starts now.",
    "This assessment should be seen as the starting point of a powerful personal development path. Building foundational social skills will open up many new doors for you.",
    "There is a clear opportunity to enhance your understanding of social dynamics. Embracing this challenge will lead to significant personal and professional rewards.",
    "Your potential is evident, but it requires cultivation. A conscious effort to improve your social and emotional skills will be transformative.",
    "This is a valuable opportunity to build your interpersonal toolkit from the ground up. With dedication, you can achieve remarkable growth.",
    "The path to social mastery is a marathon, not a sprint. Use these insights to take the first crucial steps in building your confidence and competence.",
    "This assessment highlights key areas for foundational growth. A commitment to learning and practicing new social skills will be a game-changer for you.",
    "While there is a way to go, your awareness of this is the most critical first step. You have the capacity to grow significantly in this area.",
    "Think of this as an exciting challenge. By focusing on core social competencies, you can fundamentally change how you interact with the world.",
    "Your journey toward greater social effectiveness starts today. Embrace the learning process, and you will see profound changes in your life.",
    "This assessment provides a clear map of where to begin. Building skills in empathy, communication, and resilience will create a strong foundation for your future.",
    "You have a blank canvas on which to paint a new picture of your social self. This is an exciting opportunity for reinvention and growth.",
    "The most successful people are lifelong learners. View this as the beginning of a new and exciting curriculum in your personal growth.",
    "It's time to invest in your greatest asset: yourself. Focusing on these foundational skills will pay dividends for the rest of your life.",
    "The gap between where you are and where you want to be is bridged by deliberate practice. You have the potential to close that gap.",
    "Every interaction is a chance to learn and grow. Adopt a curious mindset, and you will find your skills improving daily.",
    "This is not a final judgment, but a starting line. You have the potential to go far if you commit to the journey of self-improvement."
  ],
};

export const getFinalFeedback = (score: number): string => {
  let category: keyof typeof finalFeedbackMatrix;

  if (score >= 13) {
    category = "high";
  } else if (score >= 7) {
    category = "medium";
  } else {
    category = "low";
  }
  
  const categoryFeedback = finalFeedbackMatrix[category];
  return categoryFeedback[Math.floor(Math.random() * categoryFeedback.length)];
};

export const getFinalAssessment = (feedback: string): string => {
  return `This assessment provides valuable insights into your pro-social qualities that can make you an excellent Anandak. ${feedback} A commitment to continuous self-awareness and lifelong learning will undoubtedly unlock significant personal and professional growth. This certificate recognizes your proactive engagement in developing these pro-social skills.`;
};


// --- Translations ---

const finalAssessmentHindi = (feedbackEnglish: string) => {
    // This is a fixed template as per user request, not a direct translation of the dynamic feedback.
    const feedbackHindi = "आपके पास सामाजिक कौशल का एक प्रशंसनीय सेट है। इनमें से कुछ कौशलों को निखारकर, आप विभिन्न परिस्थितियों में अपने प्रभाव और आत्मविश्वास को बढ़ा सकते हैं।";
    return `यह मूल्यांकन आपके सामाजिक गुणों के बारे में बहुमूल्य जानकारी प्रदान करता है जो आपको एक उत्कृष्ट आनंदक बना सकते हैं। ${feedbackHindi} निरंतर आत्म-जागरूकता और आजीवन सीखने की प्रतिबद्धता निस्संदेह महत्वपूर्ण व्यक्तिगत और व्यावसायिक विकास को अनलॉक करेगी। यह प्रमाण पत्र इन सामाजिक कौशलों को विकसित करने में आपकी सक्रिय भागीदारी को मान्यता देता है।`;
}


export const translations = {
    en: {
        certTitle: "Certificate of Assessment",
        certPresentedTo: "This certificate is proudly presented to",
        certLine1_p1: "This is to certify that",
        certLine1_p2: "of",
        certLine1_p3: "has successfully completed the Anandak Assessment on",
        detailedResults: "Detailed Results",
        assessmentSummary: "Assessment Summary",
        issuingAuthorityName: "Anand Sansthan",
        issuingAuthority: "Issuing Authority",
        dateOfIssue: "Date of Issue",
        score: "Score:",
        traits: {
            'Gratitude': 'Gratitude',
            'Resilience': 'Resilience',
            'Empathy': 'Empathy',
            'Sociability': 'Sociability',
            'Social Cognition': 'Social Cognition',
            'Courage': 'Courage',
        },
        feedback: individualFeedback,
        finalAssessment: (text: string) => text, // Returns english text as is
    },
    hi: {
        certTitle: "मूल्यांकन प्रमाण पत्र",
        certPresentedTo: "यह प्रमाण पत्र गर्वपूर्वक प्रदान किया जाता है",
        certLine1_p1: "यह प्रमाणित किया जाता है कि",
        certLine1_p2: "निवासी",
        certLine1_p3: "ने दिनांक",
        certLine1_p4: "को आनंदक मूल्यांकन सफलतापूर्वक पूरा किया है।",
        detailedResults: "विस्तृत परिणाम",
        assessmentSummary: "मूल्यांकन सारांश:",
        issuingAuthorityName: "आनंद संस्थान",
        issuingAuthority: "जारी करने वाला प्राधिकरण",
        dateOfIssue: "जारी करने की तिथि",
        score: "स्कोर:",
        traits: {
            'Gratitude': 'कृतज्ञता',
            'Resilience': 'लचीलापन',
            'Empathy': 'सहानुभूति',
            'Sociability': 'मिलनसारी',
            'Social Cognition': 'सामाजिक अनुभूति',
            'Courage': 'साहस',
        },
        feedback: { // Simple translation mapping
            'Gratitude': {
                1: "आपको सभी प्रकार के समर्थन के लिए कृतज्ञता की अधिक भावना विकसित करने की क्षमता है।",
                2: "आप एक व्यावहारिक और संतुलित दृष्टिकोण बनाए रखते हैं, जो परिपक्वता का संकेत है।",
                3: "आप में कृतज्ञता की गहरी भावना है, जो वास्तव में एक दुर्लभ और उल्लेखनीय गुण है।"
            },
            'Resilience': {
                1: "आपको असफलताओं पर ध्यान केंद्रित करने के बजाय उनसे सीखकर आगे बढ़ने का अवसर है।",
                2: "आप में लचीलेपन की एक डिग्री है, और आप इसे और अधिक सक्रिय रुख के साथ विकसित कर सकते हैं।",
                3: "आपकी सक्रिय और लचीली मानसिकता आपकी सबसे बड़ी और सबसे मूल्यवान संपत्तियों में से एक है।"
            },
            'Empathy': {
                1: "अपनी भावनाओं के साथ अधिक जुड़कर गहरी सहानुभूति प्रतिक्रिया विकसित करने की क्षमता है।",
                2: "आप दूसरों की दुर्दशा के लिए महसूस करते हैं, और आप इस गहरी समझ को और विकसित कर सकते हैं।",
                3: "आप में एक मजबूत सहानुभूति की भावना है, जो आपको दूसरों के साथ गहराई से समझने और जुड़ने की अनुमति देती है।"
            },
            'Sociability': {
                1: "सामाजिक सेटिंग्स में अपने सुविधा क्षेत्र से बाहर निकलना शक्तिशाली आत्मविश्वास का निर्माण कर सकता है।",
                2: "आप सामाजिक संपर्क के लिए खुले हैं, और अधिक बार पहला कदम उठाना अत्यधिक फायदेमंद हो सकता है।",
                3: "आपका सक्रिय और मैत्रीपूर्ण दृष्टिकोण आपको एक स्वाभाविक और प्रभावी नेटवर्कर बनाता है।"
            },
            'Social Cognition': {
                1: "अनकहे सामाजिक संकेतों के बारे में अपनी जागरूकता विकसित करना रिश्तों को नेविगेट करने के लिए एक मूल्यवान कौशल है।",
                2: "आप सामाजिक स्थितियों को पढ़ने की अच्छी क्षमता रखते हैं और इस कौशल को और भी परिष्कृत कर सकते हैं।",
                3: "आप सामाजिक गतिशीलता की एक परिष्कृत और रणनीतिक समझ प्रदर्शित करते हैं।"
            },
            'Courage': { // Though not displayed, it's good practice to have it
                1: "विशिष्ट सहायता के लिए तुरंत कॉल करने की आपकी प्रवृत्ति सबसे जिम्मेदार और अक्सर सबसे बहादुर कार्रवाई है।",
                2: "आपकी प्रतिक्रिया मदद करने के लिए एक सराहनीय इच्छा और एक परिकलित जोखिम लेने को दर्शाती है।",
                3: "आपकी प्रतिक्रिया आपकी अपनी क्षमताओं और सीमाओं के बारे में उच्च स्तर की ईमानदारी को इंगित करती है।"
            }
        },
        finalAssessment: finalAssessmentHindi,
    }
};
