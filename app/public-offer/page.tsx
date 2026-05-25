import { ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Публічна оферта | DocExpert',
};

export default function PublicOfferPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_35%)]" />
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 lg:px-10">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#D4FF00] hover:text-[#D4FF00]"><ArrowLeft className="h-4 w-4" />Повернутися на головну</a>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 lg:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/55 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4FF00]"><ShieldCheck className="h-4 w-4" />Публічний документ</span>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl">Публічна оферта</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-zinc-200 sm:text-base">
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">1. Загальні положення</h2><p className="mt-2">Даний документ є офіційною публічною пропозицією щодо надання консультаційно-організаційних послуг через сайт DocExpert.</p><p className="mt-2">Користування сайтом, заповнення форм, звернення через месенджери або інші канали зв’язку означає повне прийняття умов цієї оферти.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">2. Предмет оферти</h2><p className="mt-2">DocExpert надає консультаційно-організаційні послуги, пов’язані з:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>перевіркою ситуацій щодо посвідчення водія</li><li>супроводом процедур через державні сервіси</li><li>підготовкою інформації та рекомендацій</li><li>допомогою у взаємодії з державними структурами</li><li>організаційним супроводом клієнтів за кордоном</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">3. Характер послуг</h2><p className="mt-2">DocExpert:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>не є державним органом</li><li>не друкує посвідчення водія</li><li>не виготовляє документи</li><li>не вносить інформацію до державних реєстрів незаконним шляхом</li><li>не гарантує прийняття рішень державними органами</li></ul><p className="mt-2">Усі процедури здійснюються виключно через офіційні державні сервіси та відповідно до чинного законодавства України.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">4. Обов’язки сторін</h2><p className="mt-2">Виконавець зобов’язується:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>надати консультаційно-організаційний супровід</li><li>інформувати клієнта щодо етапів процедури</li><li>забезпечити комунікацію в межах наданих послуг</li></ul><p className="mt-2">Клієнт зобов’язується:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>надавати достовірну інформацію</li><li>не приховувати важливі обставини</li><li>своєчасно надавати необхідні документи</li><li>виконувати офіційні вимоги державних органів</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">5. Вартість послуг та оплата</h2><p className="mt-2">Вартість послуг визначається індивідуально або зазначається на сайті.</p><p className="mt-2">Оплата може здійснюватися:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>частинами</li><li>на офіційні реквізити</li><li>відповідно до погоджених умов</li></ul><p className="mt-2">У деяких випадках можуть застосовуватись додаткові витрати:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>державні платежі</li><li>доставка</li><li>послуги третіх осіб</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">6. Відсутність гарантії результату</h2><p className="mt-2">DocExpert не може гарантувати позитивний результат у випадках, коли рішення залежить від:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>державних органів</li><li>перевірок МВС</li><li>роботи державних реєстрів</li><li>змін законодавства</li><li>індивідуальних обставин клієнта</li></ul><p className="mt-2">Кожна ситуація оцінюється індивідуально.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">7. Відмова у наданні послуг</h2><p className="mt-2">DocExpert залишає за собою право відмовити у наданні послуг у випадках:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>надання неправдивої інформації</li><li>підозри на шахрайство</li><li>спроб обходу законодавства</li><li>запитів на незаконні дії</li><li>ситуацій, що суперечать законодавству України</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">8. Відповідальність</h2><p className="mt-2">DocExpert не несе відповідальності за:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>рішення державних органів</li><li>затримки з боку МВС або інших структур</li><li>технічні збої державних сервісів</li><li>зміни законодавства</li><li>помилки у документах, наданих клієнтом</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">9. Конфіденційність</h2><p className="mt-2">Обробка персональних даних здійснюється відповідно до Політики конфіденційності, розміщеної на сайті.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">10. Зміни умов оферти</h2><p className="mt-2">DocExpert має право змінювати умови цієї оферти без попереднього повідомлення.</p><p className="mt-2">Актуальна версія документа завжди доступна на сайті.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">11. Контакти</h2><p className="mt-2">Усі питання щодо послуг можна уточнити через контактні форми або месенджери, вказані на сайті.</p></section>
          </div>
        </div>
      </section>
    </main>
  );
}
