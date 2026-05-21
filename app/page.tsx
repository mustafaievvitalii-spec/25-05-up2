'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const trustBadges = [
  'Офіційна процедура',
  'Робота через державні реєстри',
  'Супровід клієнтів по Європі',
  'Договір про надання послуг',
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
  {
    q: 'Чи можна відновити права, якщо вони старого зразка (ламіновані)?',
    a: 'Так, але це вимагає додаткової верифікації через паперові архіви МВС. Ми допомагаємо з цим процесом.',
  },
  {
    q: 'Скільки часу займає доставка пластику за кордон?',
    a: 'Офіційний випуск займає до 5 робочих днів, а міжнародна доставка в межах ЄС — від 7 до 14 днів.',
  },
  {
    q: "Чи з'явиться нове посвідчення в Дії?",
    a: 'Так, оскільки процедура повністю офіційна, нове посвідчення автоматично підтягнеться в Дію одразу після внесення в базу МВС.',
  },
];

function formatTime(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600)
    .toString()
    .padStart(2, '0');
  const m = Math.floor((totalSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const s = (totalSeconds % 60).toString().padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function Page() {
  const [secondsLeft, setSecondsLeft] = useState(2 * 60 * 60);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 2 * 60 * 60));
    }, 1000);

    return () => clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen bg-[#05070d] text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.24),transparent_35%),radial-gradient(circle_at_80%_15%,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_60%_70%,rgba(14,165,233,0.18),transparent_35%)]" />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/15 bg-white/5 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.07),0_0_50px_rgba(56,189,248,0.12)] backdrop-blur-2xl lg:p-14"
        >
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-200">
            <span className="h-2 w-2 rounded-full bg-cyan-300" />
            DocExpert Legal Support
          </p>
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
            Відновлення посвідчення водія дистанційно. Для українців за кордоном.
          </h1>
          <p className="mt-6 max-w-3xl text-base text-slate-300 sm:text-lg">
            Допомагаємо внести посвідчення в Дію, перевипустити пластикове посвідчення та виправити помилки в базі
            МВС без необхідності приїжджати в Україну.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span key={badge} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-200">
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 px-6 py-3 font-medium text-slate-950 transition hover:brightness-110">
              Отримати консультацію
            </button>
            <button className="rounded-xl border border-emerald-300/40 bg-emerald-400/10 px-6 py-3 font-medium text-emerald-200 transition hover:bg-emerald-400/20">
              Написати у WhatsApp
            </button>
            <button className="rounded-xl border border-violet-300/40 bg-violet-400/10 px-6 py-3 font-medium text-violet-200 transition hover:bg-violet-400/20">
              Написати у Viber
            </button>
          </div>

          <motion.div
            key={secondsLeft}
            initial={{ scale: 0.98, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="mt-10 inline-flex items-center gap-3 rounded-xl border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-amber-100"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="8" />
              <path d="M12 8v4l3 2" />
            </svg>
            <span className="text-sm sm:text-base">Акційна ціна діє ще: {formatTime(secondsLeft)}</span>
          </motion.div>
        </motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-6 pb-20 lg:grid-cols-2 lg:px-10">
        {[
          {
            name: 'Електронний',
            subtitle: 'Е-посвідчення в Дії',
            oldPrice: '€220',
            newPrice: '€149',
            items: ['Аудит ситуації', 'Оновлення даних у реєстрах', 'Супровід до появи в Дії'],
            popular: false,
          },
          {
            name: 'Пластик + Доставка',
            subtitle: 'Офіційний пластик МВС з доставкою за кордон',
            oldPrice: '€420',
            newPrice: '€299',
            items: ['Усе з пакету “Електронний”', 'Перевипуск пластику', 'Контроль отримання в Україні', 'Міжнародна доставка в руки'],
            popular: true,
          },
        ].map((plan, i) => (
          <motion.article
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="relative rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl"
          >
            {plan.popular && (
              <span className="absolute right-6 top-6 rounded-full border border-cyan-300/40 bg-cyan-300/15 px-3 py-1 text-xs text-cyan-100">
                Популярно
              </span>
            )}
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <p className="mt-2 text-slate-300">{plan.subtitle}</p>
            <ul className="mt-6 space-y-3">
              {plan.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-200">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m5 12 4 4 10-10" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-end gap-3">
              <span className="text-lg text-slate-400 line-through">{plan.oldPrice}</span>
              <span className="text-4xl font-semibold text-cyan-200">{plan.newPrice}</span>
            </div>
            <button className="mt-7 w-full rounded-xl bg-gradient-to-r from-indigo-400 to-cyan-400 px-6 py-3 font-medium text-slate-950 hover:brightness-110">
              Замовити
            </button>
          </motion.article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <h2 className="text-3xl font-semibold">Як проходить процедура</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              className="relative rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-lg"
            >
              <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-sm text-cyan-100">
                {idx + 1}
              </span>
              <p>{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <h2 className="text-3xl font-semibold">Необхідні документи</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc, idx) => (
            <motion.div
              key={doc}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.07, duration: 0.45 }}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-xl"
            >
              <svg viewBox="0 0 24 24" className="mb-3 h-7 w-7 text-indigo-200" fill="none" stroke="currentColor" strokeWidth="1.7">
                <rect x="4" y="3" width="16" height="18" rx="2" />
                <path d="M8 8h8M8 12h8M8 16h5" />
              </svg>
              <p>{doc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-semibold">Важливі нюанси</h3>
            <ul className="mt-5 space-y-3 text-slate-200">
              <li>• Посвідчення до 2014 року часто відсутні в реєстрі.</li>
              <li>• Дія може не підтягувати авто через неактуальні дані.</li>
              <li>• Помилки бази МВС можуть блокувати процедуру.</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="rounded-3xl border border-rose-300/35 bg-rose-300/10 p-7 backdrop-blur-xl"
          >
            <h3 className="flex items-center gap-2 text-2xl font-semibold text-rose-100">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 3 2.5 20h19L12 3Z" />
                <path d="M12 9v5m0 3h.01" />
              </svg>
              У яких випадках ми НЕ допомагаємо
            </h3>
            <p className="mt-4 text-rose-100/95">
              Ми не займаємося виготовленням прав з нуля, додаванням категорій, відновленням після ст.130 КУпАП або
              підробкою документів. Лише офіційні процедури, що не вимагають складання іспитів.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-2xl"
        >
          <h2 className="text-3xl font-semibold">Часті запитання</h2>
          <div className="mt-6 space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={item.q} className="overflow-hidden rounded-2xl border border-white/15 bg-[#0d1220]/70">
                  <button
                    onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="font-medium text-slate-100">{item.q}</span>
                    <motion.svg
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      viewBox="0 0 24 24"
                      className="h-5 w-5 shrink-0 text-cyan-200"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </motion.svg>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                      >
                        <p className="border-t border-white/10 px-5 py-4 text-slate-300">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 lg:px-10">
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-2xl"
        >
          <h2 className="text-3xl font-semibold">Залиште заявку</h2>
          <p className="mt-2 text-slate-300">Ми зв&apos;яжемося з вами для безкоштовної первинної перевірки ситуації.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="text-sm text-slate-300">Ваше ім&apos;я</span>
              <input
                type="text"
                placeholder="Введіть ваше ім'я"
                className="rounded-xl border border-white/15 bg-[#090e19]/90 px-4 py-3 text-slate-100 outline-none ring-cyan-300/50 transition focus:ring"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-slate-300">Код країни</span>
              <select className="rounded-xl border border-white/15 bg-[#090e19]/90 px-4 py-3 text-slate-100 outline-none ring-cyan-300/50 transition focus:ring">
                <option>+380 (UA)</option>
                <option>+48 (PL)</option>
                <option>+49 (DE)</option>
                <option>+420 (CZ)</option>
                <option>+39 (IT)</option>
              </select>
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm text-slate-300">Номер телефону</span>
              <input
                type="tel"
                placeholder="XX XXX XX XX"
                className="rounded-xl border border-white/15 bg-[#090e19]/90 px-4 py-3 text-slate-100 outline-none ring-cyan-300/50 transition focus:ring"
              />
            </label>

            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="text-sm text-slate-300">Країна перебування зараз</span>
              <input
                type="text"
                placeholder="Наприклад: Польща"
                className="rounded-xl border border-white/15 bg-[#090e19]/90 px-4 py-3 text-slate-100 outline-none ring-cyan-300/50 transition focus:ring"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-xl bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-300 px-6 py-3 font-semibold text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.3)] transition duration-300 hover:scale-[1.01] hover:bg-[length:200%_200%] hover:shadow-[0_0_42px_rgba(56,189,248,0.45)]"
          >
            Залишити заявку на безкоштовну перевірку
          </button>
        </motion.form>
      </section>

      <footer className="border-t border-white/10 bg-[#070b14]/80 py-10 backdrop-blur-xl">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-3 lg:px-10">
          <div>
            <p className="text-xl font-semibold text-cyan-200">DocExpert</p>
            <p className="mt-2 text-sm text-slate-300">
              Дистанційний юридичний супровід для відновлення посвідчення водія, внесення в Дію та офіційного
              перевипуску пластику МВС з доставкою за кордон.
            </p>
            <p className="mt-4 text-xs text-slate-400">© 2026 DocExpert. Усі права захищено.</p>
          </div>

          <div className="text-sm text-slate-300">
            Ми працюємо виключно в межах чинного законодавства України та регламентів МВС. Сервіс надає
            консультаційну та супроводжувальну допомогу.
          </div>

          <div className="flex flex-col gap-3 text-sm lg:items-end">
            <a href="#" className="text-cyan-200 transition hover:text-cyan-100">
              Політика конфіденційності
            </a>
            <a href="#" className="text-cyan-200 transition hover:text-cyan-100">
              Публічна оферта
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
