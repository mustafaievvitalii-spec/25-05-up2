'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, CreditCard, FileText, IdCard, MapPinned, MessageCircle, Passport, Timer, Zap } from 'lucide-react';
import { FaInstagram, FaTiktok, FaTelegramPlane, FaViber, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

type Plan = {
  name: string;
  subtitle: string;
  oldPrice: string;
  newPrice: string;
  items: string[];
  popular?: boolean;
};

const WHATSAPP_URL = 'https://wa.me/380963925481';
const VIBER_URL = 'viber://chat?number=%2B380963925481';
const INSTAGRAM_URL = 'https://www.instagram.com/pro_docs_poland';
const TIKTOK_URL = 'https://www.tiktok.com/@documentexxpert';
const TELEGRAM_URL = 'https://t.me/pro_docs_poland';

const trustBadges = [
  'Офіційна процедура',
  'Робота через державні реєстри',
  'Супровід клієнтів по Європі',
  'Договір про надання послуг',
];

const pricingPlans: Plan[] = [
  {
    name: 'Верифікація данних в базі МВС',
    subtitle: 'Е-посвідчення в Дії',
    oldPrice: '200 €',
    newPrice: '100 €',
    items: ['Аудит ситуації', 'Оновлення даних у реєстрах', 'Супровід до появи в Дії'],
  },
  {
    name: 'Пластик + Доставка',
    subtitle: 'Офіційний пластик МВС з доставкою за кордон',
    oldPrice: '350 €',
    newPrice: '250 €',
    items: ['Перевипуск пластику', 'Контроль отримання в Україні', 'Міжнародна доставка в руки'],
    popular: true,
  },
];

const steps = [
  'Перевірка ситуації',
  'Верифікація через реєстри МВС',
  'Оновлення в Дії',
  'Замовлення нового посвідчення',
  'Отримання в Україні',
  'Доставка за кордон',
];

const docs = ['Фото посвідчення водія', 'Закордонний паспорт', 'Внутрішній паспорт або ID-карта', 'ІПН', 'Прописка'];

const faqItems = [
  { q: 'Як ви вносите посвідчення в Дію?', a: 'Наш юрист подає офіційний запит до МВС для проведення верифікації посвідчення водія. Після оновлення інформації посвідчення з’являється або оновлюється в застосунку «Дія».' },
  { q: 'Це офіційна процедура?', a: 'Так. Процедура проходить через державні реєстри та електронні сервіси МВС України. Ми надаємо організаційний супровід та допомогу з документами.' },
  { q: 'Чи потрібно їхати в Україну?', a: 'У більшості випадків — ні. Більшість процедур можна пройти дистанційно без особистого візиту в Україну.' },
  { q: 'Що робити, якщо посвідчення не відображається в Дії?', a: 'Найчастіше проблема пов’язана з відсутністю або помилками даних у реєстрі МВС. У таких випадках необхідна верифікація посвідчення.' },
  { q: 'Чи допомагаєте ви, якщо в Дії немає фото?', a: 'Так. Це одна з найпоширеніших ситуацій. У багатьох випадках проблему можна вирішити через оновлення даних у реєстрі.' },
  { q: 'Що робити, якщо Дія дає відмову при замовленні посвідчення?', a: 'Причиною можуть бути помилки у даних, відсутність цифрового фото або некоректна інформація у базі МВС. Ми допомагаємо перевірити ситуацію та знайти рішення.' },
  { q: 'Чи можна відновити посвідчення після обміну на європейське?', a: 'Ні. Якщо Україна офіційно отримала інформацію про обмін посвідчення на європейське, дистанційне відновлення неможливе.' },
  { q: 'Чи допомагаєте ви за відсутності прописки в Україні?', a: 'Так, у багатьох випадках відсутність прописки не є критичною проблемою. Кожна ситуація перевіряється індивідуально.' },
  { q: 'Скільки часу займає процедура?', a: 'Верифікація посвідчення зазвичай займає до 1 місяця. Перевипуск пластикового посвідчення — до 3-х тижнів після внесення в реєстр.' },
  { q: 'Як я можу перевірити результат?', a: 'Перед фінальним етапом посвідчення оновлюється в застосунку «Дія». Клієнт може самостійно перевірити інформацію.' },
  { q: 'Які документи потрібні для початку роботи?', a: 'Зазвичай потрібні: посвідчення водія, закордонний паспорт, внутрішній паспорт або ID-карта, ІПН, прописка.' },
  { q: 'Чи можна оплатити послугу при отриманні?', a: 'У деяких випадках можлива часткова або фінальна оплата при особистому отриманні документів у Польщі або Чехії.' },
  { q: 'Чи працюєте ви з посвідченнями старого зразка?', a: 'Так. Посвідчення старого зразка часто потребують додаткової верифікації через відсутність даних у сучасному реєстрі МВС.' },
  { q: 'Чи допомагаєте ви з посвідченнями з окупованих територій?', a: 'Так, однак у деяких випадках може знадобитися додаткова перевірка або експертиза посвідчення.' },
  { q: 'Чи працюєте ви офіційно?', a: 'Так. Ми працюємо через договір про надання послуг та супроводжуємо клієнта на всіх етапах процедури.' },
];

const fadeInUp = { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.55 } };

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
  const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

const socialLinkClasses = 'rounded-full border border-neutral-700 bg-[#111111] p-2.5 text-zinc-100 transition hover:border-[#D4FF00] hover:text-[#D4FF00] hover:shadow-[0_0_20px_rgba(212,255,0,0.24)]';

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(2 * 60 * 60);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 2 * 60 * 60)), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(212,255,0,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(212,255,0,0.06),transparent_40%)]" />

      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[120] flex flex-col gap-3 sm:right-6">
        {[{ label: 'Написати у WhatsApp', href: WHATSAPP_URL, icon: FaWhatsapp, glow: 'hover:shadow-[0_0_24px_rgba(34,197,94,0.55)]', color: 'text-green-400 border-green-500/70' }, { label: 'Написати у Viber', href: VIBER_URL, icon: FaViber, glow: 'hover:shadow-[0_0_24px_rgba(168,85,247,0.55)]', color: 'text-purple-400 border-purple-500/70' }, { label: 'Написати у Telegram', href: TELEGRAM_URL, icon: FaTelegramPlane, glow: 'hover:shadow-[0_0_24px_rgba(59,130,246,0.55)]', color: 'text-blue-400 border-blue-500/70' }].map((item) => (
          <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" title={item.label} whileHover={{ y: -3, scale: 1.04 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2.4, repeat: Infinity }} className={`group relative flex h-14 w-14 items-center justify-center rounded-full border bg-[#0f0f0fcc] shadow-[0_10px_30px_rgba(0,0,0,0.55)] backdrop-blur-xl transition ${item.color} ${item.glow}`}>
            <item.icon className="h-6 w-6" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-neutral-700 bg-black/95 px-3 py-1 text-xs text-zinc-100 group-hover:block">{item.label}</span>
          </motion.a>
        ))}
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-16 lg:px-10">
        <motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-8 lg:p-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-4 py-1 text-xs uppercase tracking-[0.22em] text-[#D4FF00]"><span className="h-2 w-2 rounded-full bg-[#D4FF00]" />DocExpert - юридична допомога</p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black leading-tight sm:text-6xl">Відновлення посвідчення водія дистанційно. Для українців за кордоном.</h1>
          <p className="mt-6 max-w-3xl text-base text-[#A1A1AA] sm:text-lg">Допомагаємо внести посвідчення в Дію, перевипустити пластикове посвідчення та виправити помилки в базі МВС без необхідності приїжджати в Україну.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className={socialLinkClasses} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="h-5 w-5" /></a>
            <a className={socialLinkClasses} href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok className="h-5 w-5" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-2 text-sm text-zinc-100 transition hover:bg-[#D4FF00] hover:text-black">Переглянути наші соцмережі</a>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2">{trustBadges.map((badge) => <div key={badge} className="group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 transition hover:border-[#D4FF00]/60 hover:shadow-[0_0_25px_rgba(212,255,0,0.2)]"><Zap className="h-5 w-5 text-[#D4FF00]" /><span className="text-sm text-zinc-200">{badge}</span></div>)}</div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button whileHover={{ scale: 1.02 }} animate={{ boxShadow: ['0 0 0px rgba(212,255,0,0.25)', '0 0 22px rgba(212,255,0,0.35)', '0 0 0px rgba(212,255,0,0.25)'] }} transition={{ duration: 2, repeat: Infinity }} className="rounded-full bg-[#D4FF00] px-7 py-3 font-bold text-black">Отримати консультацію</motion.button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 bg-black px-6 py-3 font-medium text-white transition hover:shadow-[0_0_20px_rgba(212,255,0,0.2)]">Написати у WhatsApp</a>
            <a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 bg-black px-6 py-3 font-medium text-white transition hover:shadow-[0_0_20px_rgba(212,255,0,0.2)]">Написати у Viber</a>
          </div>

          <motion.div key={secondsLeft} initial={{ opacity: 0.8, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-4 py-2 text-sm text-[#D4FF00]"><Timer className="h-4 w-4" />Акційна ціна діє ще: {formatTime(secondsLeft)}</motion.div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-6 pb-10 lg:grid-cols-12 lg:px-10">{pricingPlans.map((plan, index) => <motion.article key={plan.name} {...fadeInUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="group relative rounded-3xl border border-neutral-800 bg-[#111111] p-7 lg:col-span-6"><div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgba(212,255,0,0.5),0_0_28px_rgba(212,255,0,0.16)]" />{plan.popular && <span className="absolute right-5 top-5 rounded-full border border-[#D4FF00]/70 px-3 py-1 text-xs text-[#D4FF00]">Популярно</span>}<h2 className="text-3xl font-bold">{plan.name}</h2><p className="mt-2 text-[#A1A1AA]">{plan.subtitle}</p><ul className="mt-5 space-y-2">{plan.items.map((item) => <li key={item} className="flex items-start gap-2 text-zinc-100"><Zap className="mt-0.5 h-5 w-5 shrink-0 text-[#D4FF00]" />{item}</li>)}</ul><div className="mt-6 flex items-end gap-3"><span className="text-xl text-zinc-500 line-through">{plan.oldPrice}</span><span className="text-4xl font-black text-[#D4FF00]">{plan.newPrice}</span></div><div className="mt-6 flex flex-wrap gap-2"><button className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black">Замовити</button><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-3 text-sm">WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-3 text-sm">Viber</a></div></motion.article>)}</section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Як проходить процедура</h2><div className="mt-7 grid gap-4 lg:grid-cols-6">{steps.map((step, idx) => <div key={step} className="group relative rounded-2xl border border-neutral-800 bg-[#111111] p-4 transition hover:border-[#D4FF00]/50 hover:shadow-[0_0_24px_rgba(212,255,0,0.16)]"><div className="mb-3 flex items-center gap-2 text-[#D4FF00]"><Zap className="h-4 w-4" /><span className="text-xs font-semibold">Крок {idx + 1}</span></div><p className="text-sm text-zinc-200">{step}</p></div>)}</div></motion.div></section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10"><h2 className="text-3xl font-bold">Необхідні документи</h2><div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">{docs.map((doc, idx) => { const Icon = [CreditCard, Passport, IdCard, FileText, MapPinned][idx] ?? FileText; return <motion.div key={doc} {...fadeInUp} transition={{ duration: 0.5, delay: idx * 0.06 }} className={`group rounded-2xl border border-neutral-800 bg-[#111111] p-5 ${idx === 0 ? 'lg:col-span-6' : 'lg:col-span-3'}`}><div className="mb-3 inline-flex rounded-full border border-neutral-700 bg-black p-2"><Icon className="h-5 w-5 text-[#D4FF00]" /></div><p className="text-zinc-100">{doc}</p></motion.div>; })}</div></section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10"><div className="grid gap-4 lg:grid-cols-12"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#111111] p-7 lg:col-span-7"><h3 className="text-2xl font-bold">Важливі нюанси</h3><ul className="mt-4 space-y-3 text-[#A1A1AA]"><li>• Посвідчення до 2014 року часто відсутні в реєстрі.</li><li>• Дія може не підтягувати авто через неактуальні дані.</li><li>• Помилки бази МВС блокують процедуру.</li></ul></motion.div><motion.div {...fadeInUp} className="rounded-3xl border border-orange-900 bg-gradient-to-br from-[#1a0e0b] to-[#120808] p-7 lg:col-span-5"><h3 className="flex items-center gap-2 text-2xl font-bold text-orange-300"><Zap className="h-6 w-6 text-[#D4FF00]" />У яких випадках ми НЕ допомагаємо</h3><p className="mt-4 text-orange-100/90">Ми не займаємося виготовленням прав з нуля, додаванням категорій, відновленням після ст.130 КУпАП або підробкою документів. Лише офіційні процедури, що не вимагають складання іспитів.</p></motion.div></div></section>

      <section className="mx-auto max-w-5xl px-6 pb-10 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Популярні запитання</h2><div className="mt-5 space-y-3">{faqItems.map((item, idx) => {const isOpen = openFaq === idx; return <div key={item.q} className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111111]"><button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))}><span className="font-semibold text-zinc-100">{item.q}</span><motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>{isOpen ? <ChevronUp className="h-5 w-5 text-[#D4FF00]" /> : <ChevronDown className="h-5 w-5 text-[#D4FF00]" />}</motion.div></button><AnimatePresence initial={false}>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}><p className="border-t border-neutral-800 px-5 py-4 text-[#A1A1AA]">{item.a}</p></motion.div>}</AnimatePresence></div>;})}</div></motion.div></section>

      <section className="mx-auto max-w-5xl px-6 pb-12 lg:px-10"><motion.form {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Залиште заявку</h2><p className="mt-2 text-[#A1A1AA]">Після заявки ми безкоштовно перевіримо вашу ситуацію у межах офіційної процедури.</p><div className="mt-4 flex flex-wrap items-center gap-3"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaInstagram className="h-5 w-5" /></a><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaTiktok className="h-5 w-5" /></a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaWhatsapp className="h-5 w-5" /></a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaViber className="h-5 w-5" /></a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaTelegramPlane className="h-5 w-5" /></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-2 text-sm transition hover:bg-[#D4FF00] hover:text-black">Переглянути наші соцмережі</a></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 sm:col-span-2"><span className="text-sm text-zinc-300">Ваше ім&apos;я</span><input type="text" placeholder="Введіть ваше ім'я" className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label><label className="flex flex-col gap-2"><span className="text-sm text-zinc-300">Код країни</span><select className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70"><option>+380 (UA)</option><option>+48 (PL)</option><option>+49 (DE)</option><option>+420 (CZ)</option><option>+39 (IT)</option></select></label><label className="flex flex-col gap-2"><span className="text-sm text-zinc-300">Номер телефону</span><input type="tel" placeholder="XX XXX XX XX" className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label><label className="flex flex-col gap-2 sm:col-span-2"><span className="text-sm text-zinc-300">Країна перебування зараз</span><input type="text" placeholder="Наприклад: Польща" className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label></div><div className="mt-6 flex flex-wrap gap-3"><button type="submit" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)]">Залишити заявку на безкоштовну перевірку</button><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у Viber</a></div></motion.form></section>

      <footer className="border-t border-neutral-900 bg-black py-10"><div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-10"><div><p className="text-xl font-bold text-[#D4FF00]">DocExpert</p><p className="mt-2 text-sm text-[#A1A1AA]">Дистанційний юридичний супровід для відновлення посвідчення водія, внесення в Дію та офіційного перевипуску пластику МВС.</p><p className="mt-4 text-xs text-zinc-500">© 2026 DocExpert. Усі права захищено.</p></div><div className="text-sm text-[#A1A1AA]">Ми працюємо виключно в межах чинного законодавства України та регламентів МВС. Сервіс надає консультаційну та супроводжувальну допомогу.<div className="mt-4 flex gap-3"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaInstagram className="h-5 w-5" /></a><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><FaTiktok className="h-5 w-5" /></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-3 py-2 text-xs">Переглянути наші соцмережі</a></div></div><div className="flex flex-col gap-3 text-sm lg:items-end"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-100 transition hover:text-[#D4FF00]">Написати у WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-100 transition hover:text-[#D4FF00]">Написати у Viber</a><a href="#" className="text-zinc-100 transition hover:text-[#D4FF00]">Політика конфіденційності</a><a href="#" className="text-zinc-100 transition hover:text-[#D4FF00]">Публічна оферта</a></div></div></footer>
    </main>
  );
}
