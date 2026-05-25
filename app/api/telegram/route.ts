import { NextResponse } from 'next/server';

type Body = {
  name?: string;
  phone?: string;
  country?: string;
  situation?: string;
};

export async function POST(req: Request) {
  try {
    const token = process.env.TELEGRAM_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (!token || !chatId) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const body = (await req.json()) as Body;
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const country = body.country?.trim();
    const situation = body.situation?.trim() || 'Не вказано';
    if (!name || !phone || !country) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const currentDate = new Date().toLocaleString('uk-UA', { timeZone: 'Europe/Kyiv' });
    const text = `🚨 Нова заявка з сайту DocExpert\n\n👤 Ім’я: ${name}\n📞 Телефон: ${phone}\n🌍 Країна: ${country}\n📝 Ситуація: ${situation}\n\n🕒 Дата: ${currentDate}`;

    const tgRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text }),
      cache: 'no-store',
    });

    if (!tgRes.ok) return NextResponse.json({ ok: false }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
