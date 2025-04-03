import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export const themes = {
    dracula: {
        name: 'dracula',
        background: 'bg-dracula-background',
        text: 'text-dracula-foreground',
        textSecondary: 'text-dracula-comment',
        card: 'bg-dracula-currentLine',
        input: 'bg-dracula-comment border-dracula-comment focus:ring-dracula-purple focus:border-dracula-purple',
        button: 'bg-dracula-purple hover:bg-dracula-pink text-dracula-foreground',
        buttonSecondary: 'bg-dracula-comment hover:bg-dracula-selection text-dracula-foreground',
        gradient: 'from-dracula-purple to-dracula-pink',
        error: 'bg-dracula-comment text-dracula-red',
        border: 'border-dracula-comment'
    },
    solarized: {
        name: 'solarized',
        background: 'bg-solarized-base3',
        text: 'text-solarized-base00',
        textSecondary: 'text-solarized-base01',
        card: 'bg-solarized-base2',
        input: 'bg-solarized-base3 border-solarized-base1 focus:ring-solarized-blue focus:border-solarized-blue',
        button: 'bg-solarized-blue hover:bg-solarized-violet text-solarized-base3',
        buttonSecondary: 'bg-solarized-base1 hover:bg-solarized-base2 text-solarized-base00',
        gradient: 'from-solarized-violet to-solarized-blue',
        error: 'bg-solarized-orange/20 text-solarized-orange',
        border: 'border-solarized-base1'
    }
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(themes.dracula)

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dracula'
        const selectedTheme = themes[savedTheme] || themes.dracula
        setTheme(selectedTheme)
        document.documentElement.className = savedTheme
    }, [])

    const changeTheme = (themeName) => {
        const selectedTheme = themes[themeName] || themes.dracula
        setTheme(selectedTheme)
        localStorage.setItem('theme', themeName)
        document.documentElement.className = themeName
    }

    return (
        <ThemeContext.Provider value={{ theme, themes, changeTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}