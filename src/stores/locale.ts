import { useStore } from 'zustand'
import { createStore } from 'zustand/vanilla'

import type { Locale } from 'src/config'

type LocaleStore = {
  locale: Locale
  setLocale: (loc: Locale) => void
}

export const localeStore = createStore<LocaleStore>((set) => ({
  locale: 'fr-FR',
  setLocale: (loc) => set({ locale: loc }),
}))

export const useLocaleStore = () => useStore(localeStore)
