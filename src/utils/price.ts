import type { Locale } from 'src/config'

export const getCurrency = (locale: Locale) => {
  switch (locale) {
    case 'en-US':
      return 'USD'
    default:
      return 'EUR'
  }
}

// Keep price localized, no info from api so just using path locale
export const getPrice = (price: number, locale: Locale) =>
  price.toLocaleString(locale, {
    style: 'currency',
    currency: getCurrency(locale),
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })
