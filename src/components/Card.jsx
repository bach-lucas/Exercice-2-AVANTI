import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Card({ children }) {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`rounded-lg p-6 transition-colors duration-300 ${theme.card} ${theme.border} border`}>
            <h2 className={`text-xl font-bold mb-4 ${theme.text}`}>Título do Card</h2>
            <p className={`mb-4 ${theme.textSecondary}`}>Descrição do card com texto secundário</p>
            <button className={`px-4 py-2 rounded-lg ${theme.button} transition-colors`}>
                Ação Principal
            </button>
            <button className={`px-4 py-2 rounded-lg ml-2 ${theme.buttonSecondary} transition-colors`}>
                Secundário
            </button>
            {children}
        </div>
    );
}