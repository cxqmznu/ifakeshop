import { Currency, Locale, CountryInfo, Brand } from './types';

export const currencies: Currency[] = [
  { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸', rate: 1, locale: 'en-US' },
  { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺', rate: 0.92, locale: 'de-DE' },
  { code: 'GBP', symbol: '£', name: 'British Pound', flag: '🇬🇧', rate: 0.79, locale: 'en-GB' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen', flag: '🇯🇵', rate: 149.50, locale: 'ja-JP' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee', flag: '🇮🇳', rate: 83.10, locale: 'en-IN' },
  { code: 'KRW', symbol: '₩', name: 'South Korean Won', flag: '🇰🇷', rate: 1320.00, locale: 'ko-KR' },
  { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', flag: '🇨🇳', rate: 7.24, locale: 'zh-CN' },
  { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', flag: '🇦🇪', rate: 3.67, locale: 'ar-AE' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', flag: '🇸🇬', rate: 1.34, locale: 'en-SG' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', flag: '🇦🇺', rate: 1.52, locale: 'en-AU' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', flag: '🇨🇦', rate: 1.36, locale: 'en-CA' },
  { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', flag: '🇧🇷', rate: 5.05, locale: 'pt-BR' },
  { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', flag: '🇸🇦', rate: 3.75, locale: 'ar-SA' },
  { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', flag: '🇨🇭', rate: 0.88, locale: 'de-CH' },
  { code: 'MXN', symbol: 'Mex$', name: 'Mexican Peso', flag: '🇲🇽', rate: 17.15, locale: 'es-MX' },
];

export const locales: Locale[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
];

export const countries: CountryInfo[] = [
  { code: 'US', name: 'United States', currency: 'USD', locale: 'en-US', languages: ['en'], timezone: 'America/New_York', dateFormat: 'MM/DD/YYYY', numberFormat: '1,000.00' },
  { code: 'IN', name: 'India', currency: 'INR', locale: 'en-IN', languages: ['en', 'hi'], timezone: 'Asia/Kolkata', dateFormat: 'DD/MM/YYYY', numberFormat: '1,00,000.00' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', locale: 'en-GB', languages: ['en'], timezone: 'Europe/London', dateFormat: 'DD/MM/YYYY', numberFormat: '1,000.00' },
  { code: 'DE', name: 'Germany', currency: 'EUR', locale: 'de-DE', languages: ['de'], timezone: 'Europe/Berlin', dateFormat: 'DD.MM.YYYY', numberFormat: '1.000,00' },
  { code: 'FR', name: 'France', currency: 'EUR', locale: 'fr-FR', languages: ['fr'], timezone: 'Europe/Paris', dateFormat: 'DD/MM/YYYY', numberFormat: '1 000,00' },
  { code: 'JP', name: 'Japan', currency: 'JPY', locale: 'ja-JP', languages: ['ja'], timezone: 'Asia/Tokyo', dateFormat: 'YYYY/MM/DD', numberFormat: '1,000' },
  { code: 'KR', name: 'South Korea', currency: 'KRW', locale: 'ko-KR', languages: ['ko'], timezone: 'Asia/Seoul', dateFormat: 'YYYY.MM.DD', numberFormat: '1,000' },
  { code: 'CN', name: 'China', currency: 'CNY', locale: 'zh-CN', languages: ['zh'], timezone: 'Asia/Shanghai', dateFormat: 'YYYY/MM/DD', numberFormat: '1,000.00' },
  { code: 'AE', name: 'UAE', currency: 'AED', locale: 'ar-AE', languages: ['ar'], timezone: 'Asia/Dubai', dateFormat: 'DD/MM/YYYY', numberFormat: '1,000.00' },
  { code: 'SG', name: 'Singapore', currency: 'SGD', locale: 'en-SG', languages: ['en', 'zh'], timezone: 'Asia/Singapore', dateFormat: 'DD/MM/YYYY', numberFormat: '1,000.00' },
  { code: 'AU', name: 'Australia', currency: 'AUD', locale: 'en-AU', languages: ['en'], timezone: 'Australia/Sydney', dateFormat: 'DD/MM/YYYY', numberFormat: '1,000.00' },
  { code: 'BR', name: 'Brazil', currency: 'BRL', locale: 'pt-BR', languages: ['pt'], timezone: 'America/Sao_Paulo', dateFormat: 'DD/MM/YYYY', numberFormat: '1.000,00' },
  { code: 'ES', name: 'Spain', currency: 'EUR', locale: 'es-ES', languages: ['es'], timezone: 'Europe/Madrid', dateFormat: 'DD/MM/YYYY', numberFormat: '1.000,00' },
  { code: 'IT', name: 'Italy', currency: 'EUR', locale: 'it-IT', languages: ['it'], timezone: 'Europe/Rome', dateFormat: 'DD/MM/YYYY', numberFormat: '1.000,00' },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', locale: 'ar-SA', languages: ['ar'], timezone: 'Asia/Riyadh', dateFormat: 'DD/MM/YYYY', numberFormat: '1,000.00' },
];

export const currencyMap = new Map(currencies.map(c => [c.code, c]));
export const countryMap = new Map(countries.map(c => [c.code, c]));
export const localeMap = new Map(locales.map(l => [l.code, l]));

export const brandNames: string[] = [
  'Apple', 'Samsung', 'Sony', 'LG', 'Dell', 'HP', 'Lenovo', 'ASUS', 'Google', 'Microsoft',
  'Tesla', 'Porsche', 'Ferrari', 'Lamborghini', 'BMW', 'Mercedes-Benz', 'Audi', 'Toyota', 'Honda', 'Ford',
  'Rolex', 'Omega', 'Patek Philippe', 'Audemars Piguet', 'Tag Heuer', 'Cartier', 'IWC',
  'Gucci', 'Prada', 'Louis Vuitton', 'Chanel', 'Dior', 'Versace', 'Armani', 'Hermès',
  'Nike', 'Adidas', 'Balenciaga', 'Saint Laurent', 'Valentino', 'Burberry', 'Fendi',
  'Gulfstream', 'Bombardier', 'Dassault', 'Cessna', 'Embraer', 'Airbus', 'Boeing',
  'Azimut', 'Ferretti', 'Sunseeker', 'Princess', 'Beneteau', 'Lürssen', 'Feadship',
  'Bugatti', 'Koenigsegg', 'Rimac', 'Pininfarina', 'Hennessey', 'Pagani', 'McLaren',
  'Herman Miller', 'Knoll', 'Vitra', 'Cassina', 'Flos', 'Artemide', 'Tom Dixon', 'IKEA',
  'Sennheiser', 'Bose', 'Beats', 'DJI', 'Canon', 'Nikon', 'Fujifilm', 'GoPro',
  'Bvlgari', 'Tiffany & Co.', 'Van Cleef & Arpels', 'Chopard', 'Christies Estates', 'Sothebys Realty',
  'Peloton', 'NordicTrack', 'Bowflex', 'Tonal', 'Harley-Davidson', 'Ducati',
  'Rivian', 'Lucid', 'Polestar', 'Hyundai', 'Kia', 'Land Rover', 'Genesis', 'Lexus',
  'OnePlus', 'Xiaomi', 'TCL', 'Hisense', 'Razer', 'Alienware', 'MSI', 'Corsair',
];

export const colors: string[] = [
  'Midnight Black', 'Starlight White', 'Space Gray', 'Pacific Blue', 'Alpine Green',
  'Deep Purple', 'Gold', 'Silver', 'Rose Gold', 'Product Red',
  'Graphite', 'Sierra Blue', 'Matte Black', 'Pearl White', 'Crimson Red',
  'Ocean Blue', 'Forest Green', 'Lavender', 'Coral', 'Sunset Orange',
  'Champagne', 'Titanium Gray', 'Burgundy', 'Navy', 'Teal',
  'Charcoal', 'Ivory', 'Beige', 'Cream', 'Blush Pink',
  'Cobalt', 'Emerald', 'Ruby', 'Sapphire', 'Amethyst',
  'Obsidian', 'Frost', 'Bronze', 'Copper', 'Platinum',
];

export const getCurrencyByCode = (code: string): Currency => currencyMap.get(code) || currencies[0];
export const getCountryByCode = (code: string): CountryInfo => countryMap.get(code) || countries[0];
export const getLocaleByCode = (code: string): Locale => localeMap.get(code) || locales[0];
