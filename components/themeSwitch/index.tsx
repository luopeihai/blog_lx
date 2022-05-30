import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Icon from '@/components/icon'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()
  useEffect(() => setMounted(true), [])
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4"
      onClick={() =>
        setTheme(
          theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'
        )
      }
    >
      {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
        <Icon className="text-gray-900 dark:text-gray-100" code="&#xe60f;" />
      ) : (
        <Icon className="text-gray-900 dark:text-gray-100" code="&#xe6b8;" />
      )}
    </button>
  )
}

export default ThemeSwitch
