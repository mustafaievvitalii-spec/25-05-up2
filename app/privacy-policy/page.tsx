import { ArrowLeft, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Політика конфіденційності | DocExpert',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_0%,rgba(212,255,0,0.1),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(212,255,0,0.06),transparent_35%)]" />
      <section className="mx-auto max-w-5xl px-6 pb-8 pt-10 lg:px-10">
        <a href="/" className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm text-zinc-200 transition hover:border-[#D4FF00] hover:text-[#D4FF00]"><ArrowLeft className="h-4 w-4" />Повернутися на головну</a>
      </section>
      <section className="mx-auto max-w-5xl px-6 pb-16 lg:px-10">
        <div className="rounded-3xl border border-neutral-800 bg-[#0A0A0A] p-7 lg:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#D4FF00]/55 bg-black/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4FF00]"><ShieldCheck className="h-4 w-4" />Політика сайту</span>
          <h1 className="mt-4 text-3xl font-black sm:text-5xl">Політика конфіденційності</h1>
          <div className="mt-6 space-y-6 text-sm leading-relaxed text-zinc-200 sm:text-base">
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">1. Загальні положення</h2><p className="mt-2">DocExpert поважає право кожного користувача на конфіденційність та захист персональних даних.</p><p className="mt-2">Дана Політика конфіденційності пояснює, які дані можуть збиратися під час використання сайту, як вони використовуються та яким чином забезпечується їх захист.</p><p className="mt-2">Користуючись сайтом, ви погоджуєтесь із умовами цієї Політики конфіденційності.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">2. Які дані ми можемо збирати</h2><p className="mt-2">Під час використання сайту або заповнення форм можуть збиратися:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>Ім’я</li><li>Номер телефону</li><li>Telegram / WhatsApp / Viber контакт</li><li>Адреса електронної пошти за наявності</li><li>Інформація щодо вашої ситуації або запиту</li><li>IP-адреса</li><li>Тип пристрою</li><li>Браузер</li><li>Cookies</li><li>Дані аналітики</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">3. Мета збору інформації</h2><p className="mt-2">Отримані дані використовуються виключно для:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>зв’язку з клієнтом</li><li>надання консультаційно-організаційних послуг</li><li>перевірки ситуації клієнта</li><li>обробки заявок</li><li>покращення роботи сайту</li><li>аналітики рекламних кампаній</li><li>захисту від шахрайства та зловживань</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">4. Консультаційно-організаційний характер послуг</h2><p className="mt-2">DocExpert надає виключно консультаційно-організаційні послуги.</p><p className="mt-2">Ми:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>не є державним органом</li><li>не друкуємо посвідчення водія</li><li>не виготовляємо документи</li><li>не змінюємо державні реєстри незаконним шляхом</li></ul><p className="mt-2">Усі процедури здійснюються виключно через офіційні державні сервіси та в межах чинного законодавства України.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">5. Передача даних третім особам</h2><p className="mt-2">Ми не продаємо та не передаємо персональні дані третім особам, окрім випадків:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>коли це необхідно для надання послуг</li><li>коли цього вимагає законодавство</li><li>коли користувач самостійно надав згоду</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">6. Cookies та аналітика</h2><p className="mt-2">Сайт може використовувати:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>cookies</li><li>Meta Pixel</li><li>TikTok Pixel</li><li>Google Analytics</li><li>інші аналітичні інструменти</li></ul><p className="mt-2">Це необхідно для:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>аналізу відвідуваності</li><li>покращення реклами</li><li>оптимізації роботи сайту</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">7. Захист інформації</h2><p className="mt-2">Ми вживаємо необхідних технічних та організаційних заходів для захисту персональних даних від:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>втрати</li><li>несанкціонованого доступу</li><li>зміни</li><li>поширення</li></ul></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">8. Посилання на сторонні сервіси</h2><p className="mt-2">Сайт може містити посилання на:</p><ul className="mt-2 list-disc space-y-1 pl-5"><li>Instagram</li><li>TikTok</li><li>Telegram</li><li>WhatsApp</li><li>Viber</li><li>інші сторонні сервіси</li></ul><p className="mt-2">Ми не несемо відповідальності за політику конфіденційності сторонніх платформ.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">9. Зміни до політики</h2><p className="mt-2">DocExpert залишає за собою право змінювати цю Політику конфіденційності без попереднього повідомлення.</p><p className="mt-2">Актуальна версія завжди доступна на сайті.</p></section>
            <section><h2 className="text-xl font-semibold text-[#D4FF00]">10. Контакти</h2><p className="mt-2">З усіх питань щодо обробки персональних даних ви можете звернутися через контактні форми або месенджери, вказані на сайті.</p></section>
          </div>
        </div>
      </section>
    </main>
  );
}
