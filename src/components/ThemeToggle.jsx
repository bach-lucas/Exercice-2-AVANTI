import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { FiMoon, FiMonitor } from 'react-icons/fi'

export default function ThemeToggle() {
    const { theme, themes, changeTheme } = useContext(ThemeContext)

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-2 z-50">
            {Object.entries(themes).map(([key, themeConfig]) => (
                <button
                    key={key}
                    onClick={() => changeTheme(key)}
                    className={`p-3 rounded-full shadow-lg transition-all ${
                        theme.name === key
                            ? 'opacity-100 scale-110'
                            : 'opacity-70 hover:opacity-100 scale-100 hover:scale-105'
                    } ${
                        key === 'dracula' ? 'bg-dracula-comment text-dracula-purple' :
                            'bg-solarized-base1 text-solarized-blue'
                    }`}
                    aria-label={`Tema ${themeConfig.name}`}
                >
                    {key === 'dracula' ? <FiMoon size={20} /> : <FiMonitor size={20} />}
                </button>
            ))}
        </div>
    )
}