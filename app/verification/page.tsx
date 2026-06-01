'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { AlertTriangle, ArrowLeft, ShieldCheck } from 'lucide-react';


declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const isDev = process.env.NODE_ENV !== 'production';

function trackMetaEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined' || typeof window.fbq !== 'function') return;
  window.fbq('trackCustom', eventName, params ?? {});
  if (isDev) console.log('[MetaPixel]', eventName, params ?? {});
}

const WHATSAPP_URL = 'https://wa.me/380963925481';
const VIBER_URL = 'viber://chat?number=%2B380963925481';

const cases = [
  ['Посвідчення не відображається в Дії', 'Якщо посвідчення водія не підтягується в застосунку «Дія», найчастіше причина у відсутності або некоректності даних у цифровому реєстрі МВС.'],
  ['Після замовлення через Дію прийшла відмова', 'Якщо ви замовили посвідчення через Дію, але наступного дня отримали відмову, це може свідчити про помилки або невідповідність даних у реєстрі.'],
  ['Потрібен обмін посвідчення у Європі', 'У деяких країнах при обміні посвідчення можуть перевіряти наявність даних у цифровій базі. Якщо інформації немає — процедура може бути ускладнена.'],
  ['У базі права активні, але є помилки', 'Помилки в особистих даних, некоректні категорії або інші неточності можуть блокувати електронні послуги та створювати проблеми при обміні.'],
  ['Зміна прізвища або персональних даних', 'Якщо після зміни прізвища або інших персональних даних інформація не була вчасно оновлена в МВС, може знадобитися додаткова перевірка та оновлення.'],
  ['Потрібно внести посвідчення в Дію для впевненості', 'Внесення посвідчення в Дію дає більше зручності та впевненості під час користування авто за кордоном, особливо якщо документ старого зразка або не відображається в електронних сервісах.'],
] as const;

const steps = ['Попередня перевірка ситуації', 'Підготовка звернення', 'Запит до відповідних органів', 'Оновлення або підтвердження даних', 'Перевірка результату в Дії'] as const;
const factors = ['Рік видачі посвідчення', 'Наявність цифрового фото', 'Коректність персональних даних', 'Місце видачі посвідчення', 'Наявність активного внутрішнього паспорта або ID-карти', 'Стан даних у реєстрах МВС'] as const;

const fadeInUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.5 } };

export default function VerificationPage() {
  useEffect(() => {
    trackMetaEvent('ViewInstructionPage');
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_35%)]" />
      <div className="fixed left-4 top-4 z-[130] sm:left-6">
        <a href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4FF00]/55 bg-black/70 px-4 py-2 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-[#D4FF00] hover:text-[#D4FF00] hover:shadow-[0_0_18px_rgba(212,255,0,0.28)]"><ArrowLeft className="h-4 w-4" />← На головну</a>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 lg:p-10"><h1 className="text-3xl font-black sm:text-5xl">В яких ситуаціях потрібна верифікація посвідчення водія?</h1><p className="mt-5 max-w-4xl text-[#A1A1AA] sm:text-lg">Верифікація допомагає оновити або підтвердити дані посвідчення в реєстрах МВС, щоб документ коректно відображався в Дії та електронних сервісах.</p></motion.div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-[#D4FF00]/35 bg-[#0A0A0A] p-7 shadow-[0_0_30px_rgba(212,255,0,0.12)] lg:p-10"><h2 className="text-2xl font-black sm:text-4xl">Безкоштовна інструкція: як верифікувати посвідчення водія самостійно</h2><p className="mt-4 max-w-4xl text-[#A1A1AA] sm:text-lg">Ми підготували покрокову відеоінструкцію, у якій пояснюємо, коли потрібна верифікація посвідчення водія та як пройти цю процедуру самостійно.</p><div className="mt-6 overflow-hidden rounded-3xl border border-neutral-800 bg-black shadow-[0_0_28px_rgba(212,255,0,0.14)]"><div className="aspect-video w-full"><iframe className="h-full w-full" src="https://www.youtube.com/embed/SHL0sNclDpM?si=OJjHN1XXqLasPofN" title="Безкоштовна інструкція: як верифікувати посвідчення водія самостійно" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div></div></motion.div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10"><h2 className="text-3xl font-bold">Коли потрібна верифікація</h2><div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{cases.map(([t, d], i) => <motion.article key={t} {...fadeInUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-neutral-800 bg-[#111111] p-5"><ShieldCheck className="mb-3 h-5 w-5 text-[#D4FF00]" /><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm text-[#A1A1AA]">{d}</p></motion.article>)}</div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Як проходить верифікація</h2><div className="mt-6 grid gap-3 lg:grid-cols-5">{steps.map((s, idx) => <div key={s} className="rounded-2xl border border-neutral-800 bg-[#111111] p-4"><div className="mb-2 text-sm font-semibold text-[#D4FF00]">Крок {idx + 1}</div><p className="text-sm text-zinc-200">{s}</p></div>)}</div></motion.div></section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10"><h2 className="text-3xl font-bold">Що може впливати на результат</h2><div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{factors.map((f, i) => <motion.div key={f} {...fadeInUp} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl border border-orange-900 bg-gradient-to-br from-[#1a0e0b] to-[#120808] p-5"><AlertTriangle className="mb-3 h-5 w-5 text-[#D4FF00]" /><p>{f}</p></motion.div>)}</div><p className="mt-5 rounded-2xl border border-neutral-800 bg-[#111111] p-5 text-[#A1A1AA]">Кожна ситуація перевіряється індивідуально. У деяких випадках можуть знадобитися додаткові документи або додаткова перевірка.</p></section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Потрібна перевірка вашого посвідчення?</h2><p className="mt-3 text-[#A1A1AA]">Залиште заявку — ми перевіримо вашу ситуацію та підкажемо, чи можливо внести посвідчення в Дію або оновити дані в реєстрах МВС.</p><div className="mt-6 flex flex-wrap gap-3"><a href="/#lead" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)]">Залишити заявку</a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у Viber</a></div></motion.div></section>
    </main>
  );
}
