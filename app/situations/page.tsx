import { AlertTriangle, ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'В яких ситуаціях ми можемо допомогти | DocExpert',
};

const WHATSAPP_URL = 'https://wa.me/380963925481';

const cases = [
  {
    title: 'Посвідчення водія не відображається в Дії',
    text: 'Ваш документ не підтягується в застосунку «Дія» або в Кабінеті водія МВС, через що неможливо скористатися онлайн-послугами.',
  },
  {
    title: 'Не вдається замовити перевипуск посвідчення через Дію',
    text: 'Система видає помилку, послуга недоступна або надходить автоматична відмова без зрозумілої причини.',
  },
  {
    title: 'Потрібно обміняти вперше видане посвідчення на постійне',
    text: 'Термін дії 2-річного посвідчення закінчився, але ви перебуваєте за кордоном і не маєте можливості приїхати до України особисто.',
  },
  {
    title: 'На посвідченні або в базі МВС є помилки',
    text: 'Неправильно вказані дані, помилки у прізвищі, транслітерації, даті народження або інших персональних даних.',
  },
  {
    title: 'Відсутня прописка або прописка знаходиться на окупованій території',
    text: 'Через це Дія або Кабінет водія можуть блокувати оформлення чи перевипуск документа.',
  },
  {
    title: 'Замовили посвідчення через Дію, але документ повернувся назад',
    text: 'Посвідчення не було отримане вчасно та повернулося до МВС або сервісного центру.',
  },
  {
    title: 'Не вдалося отримати документ через представника в Україні',
    text: 'Родичам або знайомим відмовили у видачі посвідчення на пошті чи в іншому пункті отримання.',
  },
  {
    title: 'Живете за кордоном і не маєте представника в Україні',
    text: 'Потрібна допомога з організацією отримання документа та міжнародною доставкою.',
  },
  {
    title: 'Посвідчення втрачено або пошкоджено',
    text: 'Потрібно організувати процедуру перевипуску та отримання нового пластикового документа.',
  },
  {
    title: 'Потрібна міжнародна доставка документа',
    text: 'Необхідно отримати посвідчення водія за межами України після оформлення через державні сервіси.',
  },
  {
    title: 'Посвідчення відображається в Дії, але онлайн-послуги не працюють',
    text: 'Документ наче є в системі, але Дія або Кабінет водія все одно не дозволяють скористатися послугами.',
  },
  {
    title: 'Потрібна попередня перевірка ситуації',
    text: 'Якщо ви не впевнені, чи можливо вирішити вашу проблему дистанційно — ми можемо провести попередній аналіз ситуації.',
  },
] as const;

const difficult = [
  {
    title: 'Посвідчення було замовлене через Дію на сервісний центр',
    text: 'Але представнику в Україні не вдалося його отримати.',
  },
  {
    title: 'Документ оформлювався через ДП «Документ» у Європі',
    text: 'Але посвідчення не видали через зміни в законодавстві або внутрішні обмеження.',
  },
  {
    title: 'Українське посвідчення було обміняне на іноземне',
    text: 'У деяких випадках це ускладнює або блокує подальші процедури в Україні.',
  },
  {
    title: 'Посвідчення було вилучене за кордоном',
    text: 'Кожна ситуація потребує окремого аналізу та перевірки.',
  },
  {
    title: 'Посвідчення видане давно або не має цифрових даних',
    text: 'Інформація може бути відсутня або неповною в державних реєстрах.',
  },
  {
    title: 'Документ був виданий на тимчасово окупованій території',
    text: 'У таких випадках можливі додаткові перевірки або експертизи.',
  },
] as const;

const dontHelp = [
  {
    title: 'Позбавлення права керування в Україні',
    text: 'Якщо було рішення суду, проблеми з поліцією, МВС або відкриті питання по позбавленню права керування.',
  },
  {
    title: 'Куплені посвідчення водія',
    text: 'Якщо документ був виготовлений нелегально та відсутній у державних реєстрах.',
  },
  {
    title: 'Виготовлення посвідчення з нуля',
    text: 'Ми не оформлюємо нові посвідчення без проходження офіційної процедури та складання іспитів.',
  },
  {
    title: 'Додавання нових категорій',
    text: 'Для цього необхідна особиста присутність та офіційне проходження навчання й іспитів в Україні.',
  },
  {
    title: 'Відновлення після серйозних юридичних порушень',
    text: 'Якщо існують обмеження, накладені державними органами України.',
  },
] as const;

export default function SituationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_35%)]" />

      <div className="fixed left-4 top-4 z-[130] sm:left-6">
        <a href="/" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-[#D4FF00]/55 bg-black/70 px-4 py-2 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-[#D4FF00] hover:text-[#D4FF00] hover:shadow-[0_0_18px_rgba(212,255,0,0.28)]"><ArrowLeft className="h-4 w-4" />← На головну</a>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 lg:p-10">
          <h1 className="text-3xl font-black sm:text-5xl">В яких ситуаціях ми можемо допомогти</h1>
          <p className="mt-4 max-w-5xl text-[#A1A1AA] sm:text-lg">DocExpert надає консультаційно-організаційні послуги для українців за кордоном у питаннях водійських документів, перевипуску посвідчення та роботи з державними сервісами України.</p>
          <div className="mt-5 rounded-2xl border border-orange-400/45 bg-gradient-to-br from-[#2a120d]/80 via-[#1f0f0a]/80 to-[#170c08]/80 p-4 text-orange-100 shadow-[0_0_0_1px_rgba(251,146,60,0.22),0_0_28px_rgba(249,115,22,0.15)]">
            <p>Ми не друкуємо посвідчення водія та не виготовляємо документи “з нуля”. Усі процедури виконуються виключно через офіційні державні сервіси України, МВС, Дію та Кабінет водія.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#lead" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)]">Залишити заявку</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <h2 className="text-3xl font-bold">У яких ситуаціях до нас варто звернутись</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {cases.map((item) => (
            <article key={item.title} className="rounded-2xl border border-neutral-800 bg-[#111111] p-5 transition hover:border-[#D4FF00]/55 hover:shadow-[0_0_22px_rgba(212,255,0,0.16)]">
              <CheckCircle2 className="mb-3 h-5 w-5 text-[#D4FF00]" />
              <h3 className="font-semibold text-zinc-100">{item.title}</h3>
              <p className="mt-2 text-sm text-[#A1A1AA]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="rounded-3xl border border-amber-500/45 bg-gradient-to-br from-[#1f1408] via-[#171009] to-[#120d07] p-7 shadow-[0_0_0_1px_rgba(245,158,11,0.2),0_0_36px_rgba(245,158,11,0.18)]">
          <h2 className="text-3xl font-bold">Складні ситуації, де результат залежить від багатьох факторів</h2>
          <p className="mt-3 text-[#d6c8a8]">У деяких випадках ми можемо спробувати допомогти, однак успіх залежить від багатьох факторів, а гарантувати позитивний результат неможливо.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {difficult.map((item) => (
              <div key={item.title} className="rounded-2xl border border-amber-500/30 bg-black/30 p-4">
                <AlertTriangle className="mb-2 h-5 w-5 text-amber-300" />
                <h3 className="font-semibold text-amber-100">{item.title}</h3>
                <p className="mt-1 text-sm text-amber-100/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
        <div className="rounded-3xl border border-red-500/45 bg-gradient-to-br from-[#220d0d] via-[#180b0b] to-[#130909] p-7 shadow-[0_0_0_1px_rgba(248,113,113,0.25),0_0_36px_rgba(239,68,68,0.18)]">
          <h2 className="text-3xl font-bold text-red-100">У яких випадках ми точно не допомагаємо</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {dontHelp.map((item) => (
              <div key={item.title} className="rounded-2xl border border-red-500/30 bg-black/30 p-4">
                <AlertTriangle className="mb-2 h-5 w-5 text-red-300" />
                <h3 className="font-semibold text-red-100">{item.title}</h3>
                <p className="mt-1 text-sm text-red-100/90">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7">
          <h2 className="text-3xl font-bold">Важливо</h2>
          <p className="mt-3 whitespace-pre-line text-[#A1A1AA]">Ми надаємо виключно консультаційно-організаційні послуги та супровід клієнтів.

Усі процедури виконуються через офіційні державні сервіси України.

Результат у складних ситуаціях може залежати від багатьох факторів, включно зі станом даних у державних реєстрах, рішеннями сервісних центрів МВС та індивідуальними особливостями справи.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/#lead" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)]">Залишити заявку</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Написати у WhatsApp</a>
            <a href="/" className="rounded-full border border-neutral-700 px-6 py-3 text-zinc-100 transition hover:border-[#D4FF00] hover:text-[#D4FF00]">Повернутись на головну</a>
          </div>
        </div>
      </section>
    </main>
  );
}
