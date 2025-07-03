
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    const url = `https://www.google.com/inputtools/request?ime=transliteration_en_hi&num=1&cp=0&cs=1&ie=utf-8&oe=utf-8&app=jsapi&text=${encodeURIComponent(text)}`;
    
    const response = await fetch(url);
    if (!response.ok) {
        console.error('Google API fetch failed with status:', response.status);
        throw new Error('Failed to fetch from Google Input Tools API');
    }

    const data = await response.json();

    if (data && data[0] === 'SUCCESS' && data[1] && data[1][0] && data[1][0][1] && data[1][0][1][0]) {
      const transliteratedText = data[1][0][1][0];
      return NextResponse.json({ transliteration: transliteratedText });
    } else {
      // Return the original text as a fallback if transliteration fails
      return NextResponse.json({ transliteration: text });
    }

  } catch (error) {
    console.error('Transliteration API error:', error);
    // Return the original text in case of an error
    const { text } = await req.json().catch(() => ({ text: '' }));
    return NextResponse.json({ transliteration: text });
  }
}
