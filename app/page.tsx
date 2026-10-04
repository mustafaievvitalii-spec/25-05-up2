import type { Metadata } from 'next';
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'Водійські послуги для українців за кордоном | DocExpert',
  description: 'Консультації та супровід з питань українського посвідчення водія: верифікація даних, відображення в Дії, перевипуск і доставка за кордон.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Водійські послуги для українців за кордоном | DocExpert',
    description: 'Верифікація даних, відображення посвідчення в Дії, перевипуск і доставка за кордон. Перевірка ситуації перед початком роботи.',
    url: '/',
    siteName: 'DocExpert',
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function Page() {
  return <HomePage />;
}
