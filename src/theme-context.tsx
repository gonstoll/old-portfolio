import * as React from 'react'

type Theme = 'light' | 'dark'

interface Context {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = React.createContext<Context>({
  theme: 'light',
  toggleTheme: () => undefined,
})

export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext should be used inside a context provider')
  }

  return context
}

export function ThemeContextProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = React.useState<Theme>(() => {
    const persistedTheme = localStorage.getItem('theme') as Theme | null
    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)')
    if (persistedTheme) {
      return persistedTheme
    }
    if (!persistedTheme && isDarkTheme.matches) {
      return 'dark'
    }
    return 'light'
  })

  function toggleTheme() {
    const updatedTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(updatedTheme)
    localStorage.setItem('theme', updatedTheme)
    document.documentElement.classList.toggle('dark', updatedTheme === 'dark')
  }

  React.useEffect(() => {
    const isDarkTheme = matchMedia('(prefers-color-scheme: dark)')

    function handleThemeChange(e: MediaQueryListEvent) {
      const theme = e.matches ? 'dark' : 'light'
      setTheme(theme)
      if (theme === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }

    isDarkTheme.addEventListener('change', handleThemeChange)

    return () => {
      isDarkTheme.removeEventListener('change', handleThemeChange)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
