import { currencies, currencyMap, countryMap, locales } from '@shared/constants';

export type { Currency, Locale } from '@shared/types';

export { currencies, currencyMap, countryMap, locales };

export function formatPrice(priceUSD: number, currencyCode: string = 'USD'): string {
  const currency = currencyMap.get(currencyCode) || currencyMap.get('USD')!;
  const converted = priceUSD * currency.rate;
  
  try {
    return new Intl.NumberFormat(currency.locale || 'en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: currencyCode === 'JPY' || currencyCode === 'KRW' ? 0 : 2,
      maximumFractionDigits: currencyCode === 'JPY' || currencyCode === 'KRW' ? 0 : 2,
    }).format(converted);
  } catch {
    return `${currency.symbol}${converted.toFixed(2)}`;
  }
}

export function formatNumber(num: number, locale: string = 'en-US'): string {
  return new Intl.NumberFormat(locale).format(num);
}

export function detectUserCountry(): string {
  if (typeof window === 'undefined') return 'US';
  
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const timezoneMap: Record<string, string> = {
    'America/New_York': 'US',
    'America/Chicago': 'US',
    'America/Denver': 'US',
    'America/Los_Angeles': 'US',
    'Europe/London': 'GB',
    'Europe/Paris': 'FR',
    'Europe/Berlin': 'DE',
    'Europe/Madrid': 'ES',
    'Europe/Rome': 'IT',
    'Asia/Kolkata': 'IN',
    'Asia/Tokyo': 'JP',
    'Asia/Seoul': 'KR',
    'Asia/Shanghai': 'CN',
    'Asia/Dubai': 'AE',
    'Asia/Singapore': 'SG',
    'Asia/Riyadh': 'SA',
    'Australia/Sydney': 'AU',
    'America/Sao_Paulo': 'BR',
    'America/Toronto': 'CA',
    'Europe/Moscow': 'RU',
  };

  return timezoneMap[timezone] || 'US';
}

export function detectUserLocale(): string {
  if (typeof window === 'undefined') return 'en';
  const lang = navigator.language || 'en';
  return lang.split('-')[0];
}

export function detectUserCurrency(): string {
  const country = detectUserCountry();
  const info = countryMap.get(country);
  return info?.currency || 'USD';
}
