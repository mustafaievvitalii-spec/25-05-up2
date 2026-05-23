'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { AlertTriangle, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, CreditCard, FileText, IdCard, Instagram, MapPinned, MessageCircle, Music2, Send, Timer, X, Zap } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type NavItem = { label: string; href: string; cta?: boolean };

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
const REVIEWS_TIKTOK_URL = 'https://www.tiktok.com/@documentexxpert/video/7546263722323447096';

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


const reviewImages = Array.from({ length: 13 }, (_, i) => ({
  src: `/reviews/review-${i + 1}.webp`,
  alt: `Відгук клієнта DocExpert ${i + 1}`,
}));

const navItems: NavItem[] = [
  { label: 'Послуги', href: '#services' },
  { label: 'Ціни', href: '#pricing' },
  { label: 'Як працюємо', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Подати заявку', href: '#lead', cta: true },
  { label: 'Верифікація посвідчення', href: '/verification' },
];

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(2 * 60 * 60);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', code: '+380 (UA)', phone: '', country: '', situation: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 2 * 60 * 60)), 1000);
  
  const submitLead = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('idle');
    setIsSubmitting(true);
    try {
      const phone = `${formData.code} ${formData.phone}`.trim();
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone,
          country: formData.country,
          situation: formData.situation,
        }),
      });
      if (!res.ok) throw new Error('send_failed');
      setFormData({ name: '', code: '+380 (UA)', phone: '', country: '', situation: '' });
      setFormStatus('success');
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1200) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setReviewIndex((prev) => (prev + 1) % reviewImages.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  const visibleReviews = useMemo(
    () => Array.from({ length: slidesToShow }, (_, i) => reviewImages[(reviewIndex + i) % reviewImages.length]),
    [reviewIndex, slidesToShow],
  );


  return (
    <main className="min-h-screen bg-[#000000] text-white">
      <header className={`sticky top-0 z-[110] border-b border-neutral-800/60 backdrop-blur-xl transition ${isScrolled ? 'bg-black/80' : 'bg-black/45'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <a href="#" className="text-sm font-semibold tracking-wide text-[#D4FF00]">DocExpert</a>
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={item.cta ? 'rounded-full bg-[#D4FF00] px-4 py-2 text-sm font-bold text-black transition hover:shadow-[0_0_20px_rgba(212,255,0,0.35)]' : 'rounded-full px-3 py-2 text-sm text-zinc-200 transition hover:text-[#D4FF00]'}>
                {item.label}
              </a>
            ))}
          </nav>
          <button onClick={() => setMobileOpen((p) => !p)} className="rounded-lg border border-neutral-700 p-2 text-zinc-100 md:hidden" aria-label="Toggle menu">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <nav className="border-t border-neutral-800 bg-black/90 px-6 py-3 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileOpen(false)} className={item.cta ? 'rounded-full bg-[#D4FF00] px-4 py-2 text-center text-sm font-bold text-black' : 'rounded-lg px-3 py-2 text-sm text-zinc-200'}>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_90%_10%,rgba(212,255,0,0.08),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(212,255,0,0.06),transparent_40%)]" />

      <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[120] flex flex-col gap-3 sm:right-6">
        {[{ label: 'Написати у WhatsApp', href: WHATSAPP_URL, icon: MessageCircle, glow: 'hover:shadow-[0_0_24px_rgba(34,197,94,0.55)]', color: 'text-green-400 border-green-500/70' }, { label: 'Написати у Viber', href: VIBER_URL, icon: MessageCircle, glow: 'hover:shadow-[0_0_24px_rgba(168,85,247,0.55)]', color: 'text-purple-400 border-purple-500/70' }, { label: 'Написати у Telegram', href: TELEGRAM_URL, icon: Send, glow: 'hover:shadow-[0_0_24px_rgba(59,130,246,0.55)]', color: 'text-blue-400 border-blue-500/70' }].map((item) => (
          <motion.a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" title={item.label} whileHover={{ y: -3, scale: 1.04 }} animate={{ y: [0, -3, 0] }} transition={{ duration: 2.4, repeat: Infinity }} className={`group relative flex h-14 w-14 items-center justify-center rounded-full border bg-[#0f0f0fcc] shadow-[0_10px_30px_rgba(0,0,0,0.55)] backdrop-blur-xl transition ${item.color} ${item.glow}`}>
            <item.icon className="h-6 w-6" />
            <span className="pointer-events-none absolute right-16 hidden whitespace-nowrap rounded-lg border border-neutral-700 bg-black/95 px-3 py-1 text-xs text-zinc-100 group-hover:block">{item.label}</span>
          </motion.a>
        ))}
      </div>

      <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-12 pt-14 sm:pt-16 lg:px-10 lg:pb-14 lg:pt-20">
        <motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 sm:p-8 lg:p-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black px-4 py-1 text-xs uppercase tracking-[0.22em] text-[#D4FF00]"><span className="h-2 w-2 rounded-full bg-[#D4FF00]" />DocExpert - юридична допомога</p>
          <h1 className="mt-7 max-w-5xl text-4xl font-black leading-[1.05] sm:text-5xl lg:mt-8 lg:text-6xl">Водійські послуги для українців у Європі</h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg lg:mt-6">Допомагаємо внести посвідчення в Дію, перевипустити пластик, виправити помилки в базі МВС та пройти офіційні процедури дистанційно.</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className={socialLinkClasses} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a className={socialLinkClasses} href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" aria-label="TikTok"><Music2 className="h-5 w-5" /></a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-2 text-sm text-zinc-100 transition hover:bg-[#D4FF00] hover:text-black">Переглянути наші соцмережі</a>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-2">{trustBadges.map((badge) => <div key={badge} className="group flex items-center gap-3 rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 transition hover:border-[#D4FF00]/60 hover:shadow-[0_0_25px_rgba(212,255,0,0.2)]"><Zap className="h-5 w-5 text-[#D4FF00]" /><span className="text-sm text-zinc-200">{badge}</span></div>)}</div>

          <div className="mt-8 flex flex-wrap gap-3">
            <motion.button whileHover={{ scale: 1.02 }} animate={{ boxShadow: ['0 0 0px rgba(212,255,0,0.25)', '0 0 22px rgba(212,255,0,0.35)', '0 0 0px rgba(212,255,0,0.25)'] }} transition={{ duration: 2, repeat: Infinity }} className="rounded-full bg-[#D4FF00] px-7 py-3 font-bold text-black">Отримати консультацію</motion.button>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 bg-black px-6 py-3 font-medium text-white transition hover:shadow-[0_0_20px_rgba(212,255,0,0.2)]">Написати у WhatsApp</a>
            <a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 bg-black px-6 py-3 font-medium text-white transition hover:shadow-[0_0_20px_rgba(212,255,0,0.2)]">Написати у Viber</a>
          </div>

          <motion.div key={secondsLeft} initial={{ opacity: 0.8, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.2 }} className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#D4FF00]/55 bg-black px-7 py-4 text-base font-semibold text-[#D4FF00] shadow-[0_0_0_1px_rgba(212,255,0,0.28),0_0_34px_rgba(212,255,0,0.30)] lg:px-9 lg:py-5 lg:text-xl"><Timer className="h-6 w-6 lg:h-7 lg:w-7" />Акційна ціна діє ще: {formatTime(secondsLeft)}</motion.div>
        </motion.div>
      </section>

      <section id="pricing" className="mx-auto grid max-w-7xl scroll-mt-24 grid-cols-1 gap-4 px-6 pb-10 lg:grid-cols-12 lg:px-10">{pricingPlans.map((plan, index) => <motion.article key={plan.name} {...fadeInUp} transition={{ duration: 0.55, delay: index * 0.08 }} className="group relative rounded-3xl border border-neutral-800 bg-[#111111] p-7 lg:col-span-6"><div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100 group-hover:shadow-[inset_0_0_0_1px_rgba(212,255,0,0.5),0_0_28px_rgba(212,255,0,0.16)]" />{plan.popular && <span className="absolute right-5 top-5 rounded-full border border-[#D4FF00]/70 px-3 py-1 text-xs text-[#D4FF00]">Популярно</span>}<h2 className="text-3xl font-bold">{plan.name}</h2><p className="mt-2 text-[#A1A1AA]">{plan.subtitle}</p><ul className="mt-5 space-y-2">{plan.items.map((item) => <li key={item} className="flex items-start gap-2 text-zinc-100"><Zap className="mt-0.5 h-5 w-5 shrink-0 text-[#D4FF00]" />{item}</li>)}</ul><div className="mt-6 flex items-end gap-3"><span className="text-xl text-zinc-500 line-through">{plan.oldPrice}</span><span className="text-4xl font-black text-[#D4FF00]">{plan.newPrice}</span></div><div className="mt-6 flex flex-wrap gap-2"><button className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black">Замовити</button><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-3 text-sm">WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-3 text-sm">Viber</a>{plan.name === 'Верифікація данних в базі МВС' && <a href="/verification" className="rounded-full border border-[#D4FF00] px-4 py-3 text-sm text-[#D4FF00] transition hover:shadow-[0_0_20px_rgba(212,255,0,0.25)]">В яких ситуаціях потрібна верифікація?</a>}</div></motion.article>)}</section>

      <section id="process" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-10 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Як проходить процедура</h2><div className="mt-7 grid gap-4 lg:grid-cols-6">{steps.map((step, idx) => <div key={step} className="group relative rounded-2xl border border-neutral-800 bg-[#111111] p-4 transition hover:border-[#D4FF00]/50 hover:shadow-[0_0_24px_rgba(212,255,0,0.16)]"><div className="mb-3 flex items-center gap-2 text-[#D4FF00]"><Zap className="h-4 w-4" /><span className="text-xs font-semibold">Крок {idx + 1}</span></div><p className="text-sm text-zinc-200">{step}</p></div>)}</div></motion.div></section>


      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/50 bg-black/60 px-3 py-1 text-xs font-semibold text-[#D4FF00]">Реальні скріншоти відгуків</span>
              <h2 className="mt-3 text-3xl font-bold">Реальні відгуки від наших клієнтів</h2>
              <p className="mt-2 max-w-3xl text-[#A1A1AA]">Скріншоти взяті з нашої TikTok-сторінки. Відгуки можна перевірити у профілі DocExpert.</p>
            </div>
            <a href={REVIEWS_TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/70 px-5 py-2.5 text-sm font-semibold text-[#D4FF00] transition hover:shadow-[0_0_22px_rgba(212,255,0,0.35)]">
              <Music2 className="h-4 w-4" />Переглянути TikTok
            </a>
          </div>

          <div className="mt-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-2">
                <button onClick={() => setReviewIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length)} className="rounded-full border border-neutral-700 p-2 text-zinc-200 transition hover:border-[#D4FF00] hover:text-[#D4FF00]"><ChevronLeft className="h-5 w-5" /></button>
                <button onClick={() => setReviewIndex((prev) => (prev + 1) % reviewImages.length)} className="rounded-full border border-neutral-700 p-2 text-zinc-200 transition hover:border-[#D4FF00] hover:text-[#D4FF00]"><ChevronRight className="h-5 w-5" /></button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" onTouchStart={(e) => setTouchStart(e.touches[0].clientX)} onTouchEnd={(e) => { if (touchStart === null) return; const dx = e.changedTouches[0].clientX - touchStart; if (dx > 40) setReviewIndex((prev) => (prev - 1 + reviewImages.length) % reviewImages.length); if (dx < -40) setReviewIndex((prev) => (prev + 1) % reviewImages.length); setTouchStart(null); }}>
              {visibleReviews.map((img) => (
                <button key={img.src} onClick={() => setLightboxSrc(img.src)} className="group overflow-hidden rounded-2xl border border-[#D4FF00]/40 bg-[#111111] p-2 text-left shadow-[0_0_20px_rgba(212,255,0,0.12)] transition hover:scale-[1.01] hover:shadow-[0_0_28px_rgba(212,255,0,0.22)]">
                  <div className="relative h-[420px] w-full">
                    <Image src={img.src} alt={img.alt} fill className="object-contain rounded-xl" sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw" />
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {reviewImages.map((_, i) => (
                <button key={i} onClick={() => setReviewIndex(i)} className={`h-2.5 w-2.5 rounded-full transition ${i === reviewIndex ? 'bg-[#D4FF00]' : 'bg-neutral-700 hover:bg-neutral-500'}`} aria-label={`Слайд ${i + 1}`} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {lightboxSrc && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center bg-black/90 p-4" onClick={() => setLightboxSrc(null)}>
          <button className="absolute right-4 top-4 rounded-full border border-neutral-700 p-2 text-zinc-100" onClick={() => setLightboxSrc(null)}><X className="h-5 w-5" /></button>
          <div className="relative h-[86vh] w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <Image src={lightboxSrc} alt="Повний розмір відгуку" fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10"><h2 className="text-3xl font-bold">Необхідні документи</h2><div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">{docs.map((doc, idx) => { const Icon = [CreditCard, FileText, IdCard, FileText, MapPinned][idx] ?? FileText; return <motion.div key={doc} {...fadeInUp} transition={{ duration: 0.5, delay: idx * 0.06 }} className={`group rounded-2xl border border-neutral-800 bg-[#111111] p-5 ${idx === 0 ? 'lg:col-span-6' : 'lg:col-span-3'}`}><div className="mb-3 inline-flex rounded-full border border-neutral-700 bg-black p-2"><Icon className="h-5 w-5 text-[#D4FF00]" /></div><p className="text-zinc-100">{doc}</p></motion.div>; })}</div></section>

      <section className="mx-auto max-w-7xl px-6 pb-10 lg:px-10"><div className="grid gap-4 lg:grid-cols-12"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#111111] p-7 lg:col-span-7"><h3 className="text-2xl font-bold">Важливі нюанси</h3><ul className="mt-4 space-y-3 text-[#A1A1AA]"><li>• Посвідчення до 2014 року часто відсутні в реєстрі.</li><li>• Дія може не підтягувати посвідчення через неактуальні дані.</li><li>• Помилки бази МВС блокують процедуру.</li></ul></motion.div><motion.div {...fadeInUp} className="group relative overflow-hidden rounded-3xl border border-orange-500/45 bg-gradient-to-br from-[#2a120d]/90 via-[#1d0f0b]/90 to-[#150a08]/90 p-6 shadow-[0_0_0_1px_rgba(251,146,60,0.24),0_0_40px_rgba(234,88,12,0.2)] transition hover:shadow-[0_0_0_1px_rgba(251,146,60,0.4),0_0_58px_rgba(249,115,22,0.3)] sm:p-7 lg:col-span-5"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,146,60,0.2),transparent_38%),linear-gradient(120deg,transparent,rgba(251,146,60,0.08),transparent)] opacity-70" /><motion.div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }} transition={{ duration: 4, repeat: Infinity }} /><div className="relative"><span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/45 bg-black/35 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-200"><AlertTriangle className="h-4 w-4 text-orange-300" />Warning</span><h3 className="text-2xl font-black leading-tight text-orange-100 sm:text-3xl">У яких випадках ми НЕ допомагаємо</h3><p className="mt-4 text-sm leading-relaxed text-orange-100/90 sm:text-base">Ми працюємо виключно в межах <span className="font-semibold text-orange-300">офіційних процедур МВС України</span>.</p><p className="mt-4 text-sm font-semibold text-orange-200 sm:text-base">Ми НЕ займаємось:</p><ul className="mt-2 space-y-2 text-sm leading-relaxed text-orange-100/90 sm:text-base"><li>• виготовленням посвідчення водія з нуля</li><li>• додаванням нових категорій</li><li>• відновленням після ст.130 КУпАП</li><li>• підробкою або зміною документів</li><li>• відновленням посвідчення після офіційного обміну на європейське</li></ul><p className="mt-4 text-sm leading-relaxed text-orange-100/90 sm:text-base">Якщо українське посвідчення було обміняне на європейське, <span className="font-semibold text-orange-300">оригінал посвідчення</span> зазвичай відправляється назад в Україну та анулюється в системі МВС.</p><p className="mt-4 text-sm leading-relaxed text-orange-100 sm:text-base">Ми працюємо лише з <span className="font-semibold text-orange-300">офіційними процедурами</span>, які не потребують складання іспитів та не порушують законодавство.</p></div></motion.div></div></section>

      <section id="faq" className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-10 lg:px-10"><motion.div {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Популярні запитання</h2><div className="mt-5 space-y-3">{faqItems.map((item, idx) => {const isOpen = openFaq === idx; return <div key={item.q} className="overflow-hidden rounded-2xl border border-neutral-800 bg-[#111111]"><button className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left" onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))}><span className="font-semibold text-zinc-100">{item.q}</span><motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>{isOpen ? <ChevronUp className="h-5 w-5 text-[#D4FF00]" /> : <ChevronDown className="h-5 w-5 text-[#D4FF00]" />}</motion.div></button><AnimatePresence initial={false}>{isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}><p className="border-t border-neutral-800 px-5 py-4 text-[#A1A1AA]">{item.a}</p></motion.div>}</AnimatePresence></div>;})}</div></motion.div></section>

      <section id="lead" className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-12 lg:px-10"><motion.form onSubmit={submitLead} {...fadeInUp} className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7"><h2 className="text-3xl font-bold">Залиште заявку</h2><p className="mt-2 text-[#A1A1AA]">Після заявки ми безкоштовно перевіримо вашу ситуацію у межах офіційної процедури.</p><div className="mt-4 flex flex-wrap items-center gap-3"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><Instagram className="h-5 w-5" /></a><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><Send className="h-5 w-5" /></a><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><MessageCircle className="h-5 w-5" /></a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><MessageCircle className="h-5 w-5" /></a><a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><Send className="h-5 w-5" /></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-4 py-2 text-sm transition hover:bg-[#D4FF00] hover:text-black">Переглянути наші соцмережі</a></div><div className="mt-6 grid gap-4 sm:grid-cols-2"><label className="flex flex-col gap-2 sm:col-span-2"><span className="text-sm text-zinc-300">Ваше ім&apos;я</span><input required value={formData.name} onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))} type="text" placeholder="Введіть ваше ім'я" className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label><label className="flex flex-col gap-2"><span className="text-sm text-zinc-300">Код країни</span><select value={formData.code} onChange={(e) => setFormData((p) => ({ ...p, code: e.target.value }))} className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70"><option>+380 (UA)</option><option>+48 (PL)</option><option>+49 (DE)</option><option>+420 (CZ)</option><option>+39 (IT)</option></select></label><label className="flex flex-col gap-2"><span className="text-sm text-zinc-300">Номер телефону</span><input required value={formData.phone} onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))} type="tel" placeholder="XX XXX XX XX" className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label><label className="flex flex-col gap-2 sm:col-span-2"><span className="text-sm text-zinc-300">Країна перебування зараз</span><input required value={formData.country} onChange={(e) => setFormData((p) => ({ ...p, country: e.target.value }))} type="text" placeholder="Наприклад: Польща" className="rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label><label className="flex flex-col gap-2 sm:col-span-2"><span className="text-sm text-zinc-300">Ситуація</span><textarea value={formData.situation} onChange={(e) => setFormData((p) => ({ ...p, situation: e.target.value }))} placeholder="Коротко опишіть вашу ситуацію" className="min-h-[110px] rounded-2xl border border-neutral-800 bg-[#111111] px-4 py-3 text-white outline-none transition focus:border-[#D4FF00]/70" /></label></div><div className="mt-3">{formStatus === 'success' && <p className="text-sm text-lime-300">Заявку успішно відправлено</p>}{formStatus === 'error' && <p className="text-sm text-red-300">Помилка відправки заявки</p>}</div><div className="mt-6 flex flex-wrap gap-3"><button disabled={isSubmitting} type="submit" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)] disabled:opacity-70">{isSubmitting ? 'Відправка...' : 'Залишити заявку на безкоштовну перевірку'}</button><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у Viber</a></div></motion.form></section>

      <footer className="border-t border-neutral-900 bg-black py-10"><div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-10"><div><p className="text-xl font-bold text-[#D4FF00]">DocExpert</p><p className="mt-2 text-sm text-[#A1A1AA]">Дистанційний юридичний супровід для відновлення посвідчення водія, внесення в Дію та офіційного перевипуску пластику МВС.</p><p className="mt-4 text-xs text-zinc-500">© 2026 DocExpert. Усі права захищено.</p></div><div className="text-sm text-[#A1A1AA]">Ми працюємо виключно в межах чинного законодавства України та регламентів МВС. Сервіс надає консультаційну та супроводжувальну допомогу.<div className="mt-4 flex gap-3"><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><Instagram className="h-5 w-5" /></a><a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className={socialLinkClasses}><Send className="h-5 w-5" /></a><a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-3 py-2 text-xs">Переглянути наші соцмережі</a></div></div><div className="flex flex-col gap-3 text-sm lg:items-end"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-100 transition hover:text-[#D4FF00]">Написати у WhatsApp</a><a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-100 transition hover:text-[#D4FF00]">Написати у Viber</a><a href="#" className="text-zinc-100 transition hover:text-[#D4FF00]">Політика конфіденційності</a><a href="#" className="text-zinc-100 transition hover:text-[#D4FF00]">Публічна оферта</a><a href="/verification" className="text-zinc-100 transition hover:text-[#D4FF00]">Верифікація посвідчення</a></div></div></footer>
    </main>
  );
}
