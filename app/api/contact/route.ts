import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      name?: string; phone?: string; email?: string;
    };

    console.log('[contact] received:', body);

    const { name, phone, email } = body;

    if (!name?.trim() || !phone?.trim() || !email?.trim()) {
      return NextResponse.json({ error: 'Заполните все поля' }, { status: 400 });
    }

    const scriptUrl = process.env.APPS_SCRIPT_URL;
    console.log('[contact] scriptUrl:', scriptUrl ? scriptUrl.slice(0, 60) + '…' : 'NOT SET');

    if (!scriptUrl) {
      return NextResponse.json({ error: 'Сервис не настроен' }, { status: 500 });
    }

    const url = new URL(scriptUrl);
    url.searchParams.set('name',  name.trim());
    url.searchParams.set('phone', phone.trim());
    url.searchParams.set('email', email.trim());

    console.log('[contact] calling Apps Script…');

    const res = await fetch(url.toString(), { redirect: 'follow' });
    const text = await res.text();

    console.log('[contact] Apps Script status:', res.status);
    console.log('[contact] Apps Script response:', text);

    if (!res.ok) {
      throw new Error(`Apps Script responded with ${res.status}: ${text}`);
    }

    return NextResponse.json({ ok: true });

  } catch (err) {
    console.error('[contact] ERROR:', err);
    return NextResponse.json(
      { error: String(err) },
      { status: 500 }
    );
  }
}

// GET — быстрый тест прямо из браузера: /api/contact/test
export async function GET() {
  const scriptUrl = process.env.APPS_SCRIPT_URL;
  if (!scriptUrl) {
    return NextResponse.json({ error: 'APPS_SCRIPT_URL not set' }, { status: 500 });
  }

  const url = new URL(scriptUrl);
  url.searchParams.set('name',  'Тест');
  url.searchParams.set('phone', '+7 000 000 00 00');
  url.searchParams.set('email', 'test@kamzino.kz');

  const res  = await fetch(url.toString(), { redirect: 'follow' });
  const text = await res.text();

  return NextResponse.json({
    scriptUrl: scriptUrl.slice(0, 60) + '…',
    status: res.status,
    response: text,
  });
}
