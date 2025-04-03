module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dracula
        'dracula-background': '#282a36',
        'dracula-currentLine': '#44475a',
        'dracula-foreground': '#f8f8f2',
        'dracula-comment': '#6272a4',
        'dracula-purple': '#bd93f9',
        'dracula-pink': '#ff79c6',
        'dracula-red': '#ff5555',

        // Solarized
        'solarized-base3': '#fdf6e3',
        'solarized-base2': '#eee8d5',
        'solarized-base1': '#93a1a1',
        'solarized-base00': '#657b83',
        'solarized-base01': '#586e75',
        'solarized-blue': '#268bd2',
        'solarized-violet': '#6c71c4',
        'solarized-orange': '#cb4b16'
      },
    },
  },
  plugins: [],
}