import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'В яких ситуаціях ми можемо допомогти | DocExpert',
};

const WHATSAPP_URL = 'https://wa.me/380963925481';
const VIBER_URL = 'viber://chat?number=%2B380963925481';

const situations = [
  'посвідчення не відображається в Дії',
  'потрібен перевипуск пластикового посвідчення',
  'втрачене посвідчення',
  'закінчився строк дії посвідчення',
  'є помилки в базі МВС',
  'потрібно отримати документ в Україні та доставити за кордон',
  'потрібна попередня перевірка ситуації',
] as const;

export default function SituationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_35%)]" />
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-10 lg:px-10">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#D4FF00] hover:text-[#D4FF00]"><ArrowLeft className="h-4 w-4" />Повернутися на головну</a>
      </section>
      <section className="mx-auto max-w-6xl px-6 pb-12 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 lg:p-10">
          <h1 className="text-3xl font-black sm:text-5xl">В яких ситуаціях ми можемо допомогти</h1>
          <p className="mt-4 text-[#A1A1AA]">DocExpert допомагає з офіційними водійськими процедурами для українців за кордоном. Нижче — найчастіші запити, з якими до нас звертаються.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {situations.map((item) => (
              <div key={item} className="rounded-2xl border border-neutral-800 bg-[#111111] p-4 transition hover:border-[#D4FF00]/55 hover:shadow-[0_0_20px_rgba(212,255,0,0.16)]">
                <CheckCircle2 className="mb-2 h-5 w-5 text-[#D4FF00]" />
                <p className="text-zinc-100">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="/#lead" className="rounded-full bg-[#D4FF00] px-6 py-3 font-bold text-black transition hover:shadow-[0_0_30px_rgba(212,255,0,0.35)]">Залишити заявку</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">WhatsApp</a>
            <a href={VIBER_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#D4FF00]/70 px-6 py-3">Viber</a>
          </div>
        </div>
      </section>
    </main>
  );
}
