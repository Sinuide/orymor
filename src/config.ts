// Some local checks
// Ideally all this should come from some config, here its hard coded for simplicity
export const VALID_LOCALES = ['fr-FR', 'en-US'] as const

export const DEFAULT_LOCALE = 'fr-FR'

export type Locale = (typeof VALID_LOCALES)[number]

export function isValidLocale(
  locale: string | null | undefined,
): locale is Locale {
  return VALID_LOCALES.includes(locale as Locale)
}

export function getLocaleOrDefault(locale: string | undefined): Locale {
  return isValidLocale(locale) ? locale : DEFAULT_LOCALE
}

export function getLanguageFromLocale(locale: Locale): string {
  return locale.split('-')[0]
}
