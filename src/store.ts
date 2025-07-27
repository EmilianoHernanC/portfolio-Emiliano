import {create} from  'zustand'
import { persist } from 'zustand/middleware'

interface TranslationStore{
    language: 'es' | 'en'
    toggleLanguage: () => void
    setLanguage: (lang: 'es' | 'en') => void
}

export const useStore= create<TranslationStore>() (
    persist(
        (set) => ({
            language: 'es',
            toggleLanguage: () =>
                set((state) => ({
                language: state.language === 'es' ? 'en' : 'es',
                })),
            setLanguage: (lang) => set({ language: lang }),
        }),
        {
            name: 'ui-store', // nombre del localStorage
        }
    )
)