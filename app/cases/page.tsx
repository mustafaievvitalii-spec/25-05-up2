import { AlertTriangle, ArrowLeft, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Складні ситуації з посвідченням водія | DocExpert',
};

const WHATSAPP_URL = 'https://wa.me/380963925481';
const TELEGRAM_URL = 'https://t.me/Mr_assistant01';

const helpCases = [
  'Хочу обміняти вперше видане посвідчення на постійне, але не маю можливості приїхати в Україну особисто',
  'На посвідченні є помилка, але я не можу її виправити через проживання за кордоном',
  'Відсутня прописка в Україні або прописка на окупованій території і Дія надає відмову',
  'Посвідчення водія замовив через Дію, але його не видали і документ повернувся в МВС',
  'Посвідчення не вдається замовити через Дію або Кабінет водія (послуга недоступна або приходить відмова)',
  'Замовив посвідчення через Дію, але на пошті відмовили у видачі представнику',
  'Живу за кордоном та не маю представника в Україні для отримання документів',
  'Посвідчення не відображається в Дії',
  'Після обміну або перевипуску посвідчення в реєстрах з’явились помилки',
  'Дані посвідчення не підтягуються у сервісах МВС',
  'Документи були оформлені давно і інформація відсутня у цифрових реєстрах',
  'Не можу завершити процедуру через проблеми з фото або даними в реєстрі',
] as const;

const difficultCases = [
  'Замовив посвідчення через Дію на сервісний центр, а не пошту, та не зміг отримати через представника',
  'Замовив обмін посвідчення у Європі через ДП Документ, але посвідчення не видали через зміни в законодавстві',
  'Обміняв українське посвідчення за кордоном на іноземне',
  'Посвідчення було вилучене в Європі',
  'Посвідчення видане на окупованій території та відсутні дані в реєстрах',
] as const;

const noHelpCases = [
  'Було позбавлення посвідчення водія в Україні і питання не вирішене через суд, поліцію або МВС',
  'Посвідчення було куплене в інтернеті після 2014 року та відсутнє у державних реєстрах',
  'Потрібно зробити посвідчення “з нуля”',
  'Потрібно додати нову категорію без проходження офіційної процедури',
  'Потрібно обійти офіційні державні процедури',
] as const;

export default function CasesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_35%)]" />
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-10 lg:px-10">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#D4FF00] hover:text-[#D4FF00]"><ArrowLeft className="h-4 w-4" />На головну</a>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 lg:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/55 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4FF00]"><ShieldCheck className="h-4 w-4" />Офіційний супровід для українців за кордоном</span>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl">В яких ситуаціях ми можемо допомогти</h1>
          <p className="mt-5 max-w-5xl whitespace-pre-line text-[#A1A1AA] sm:text-lg">DocExpert надає виключно консультаційно-організаційні послуги.
Ми працюємо з державними реєстрами, сервісними центрами та офіційними процедурами.
Ми НЕ друкуємо посвідчення водія та не створюємо документи незаконним шляхом.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <h2 className="text-3xl font-bold">У яких ситуаціях до нас найчастіше звертаються</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {helpCases.map((item) => (
            <article key={item} className="rounded-2xl border border-neutral-800 bg-[#111111] p-5 transition hover:border-[#D4FF00]/55 hover:shadow-[0_0_22px_rgba(212,255,0,0.16)]">
              <CheckCircle2 className="mb-3 h-5 w-5 text-[#D4FF00]" />
              <p className="text-sm leading-relaxed text-zinc-100">{item}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="rounded-3xl border border-amber-500/45 bg-gradient-to-br from-[#1f1408] via-[#171009] to-[#120d07] p-7 shadow-[0_0_0_1px_rgba(245,158,11,0.2),0_0_36px_rgba(245,158,11,0.18)]">
          <h2 className="text-3xl font-bold">Складні ситуації, де можливість допомоги залежить від багатьох факторів</h2>
          <p className="mt-3 text-[#d6c8a8]">У деяких випадках ми можемо допомогти консультаційно та організаційно, але результат залежить від конкретної ситуації та рішень державних органів.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {difficultCases.map((item) => (
              <div key={item} className="rounded-2xl border border-amber-500/30 bg-black/30 p-4"><AlertTriangle className="mb-2 h-5 w-5 text-amber-300" /><p className="text-sm text-amber-100">{item}</p></div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-amber-500/35 bg-black/35 p-4 text-sm text-amber-100">У таких випадках ми не можемо гарантувати позитивний результат, але можемо провести перевірку ситуації та оцінити можливі варіанти дій.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="rounded-3xl border border-red-500/45 bg-gradient-to-br from-[#220d0d] via-[#180b0b] to-[#130909] p-7 shadow-[0_0_0_1px_rgba(248,113,113,0.25),0_0_36px_rgba(239,68,68,0.18)]">
          <h2 className="text-3xl font-bold text-red-100">У яких випадках ми не допомагаємо</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {noHelpCases.map((item) => (
              <div key={item} className="rounded-2xl border border-red-500/30 bg-black/30 p-4"><AlertTriangle className="mb-2 h-5 w-5 text-red-300" /><p className="text-sm text-red-100">{item}</p></div>
            ))}
          </div>
          <p className="mt-5 rounded-2xl border border-red-500/35 bg-black/35 p-4 text-sm text-red-100">DocExpert працює виключно в межах законодавства України та офіційних процедур.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7">
          <h2 className="text-3xl font-bold">Не впевнені чи можемо допомогти саме у вашій ситуації?</h2>
          <p className="mt-3 text-[#A1A1AA]">Залиште заявку та ми безкоштовно проведемо попередню перевірку вашої ситуації.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#lead" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)]">Отримати консультацію</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у WhatsApp</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/70 px-6 py-3"><Send className="h-4 w-4" />Написати у Telegram</a>
          </div>
        </div>
      </section>
    </main>
  );
}
