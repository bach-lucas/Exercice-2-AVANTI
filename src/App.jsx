import { useContext, useState } from 'react'
import { ThemeContext } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import LoadingSpinner from './components/LoadingSpinner'
import UserProfile from './components/UserProfile'

function App() {
    const context = useContext(ThemeContext)
    const [searchTerm, setSearchTerm] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [userData, setUserData] = useState(null)

    // Verificação segura do contexto
    if (!context || !context.theme) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="p-4 bg-white rounded shadow">
                    Carregando temas...
                </div>
            </div>
        )
    }

    const { theme } = context

    const handleSearch = async (e) => {
        e.preventDefault()
        if (searchTerm.trim()) {
            try {
                setLoading(true);
                setError(null);
                setUserData(null); // Limpa dados anteriores

                const response = await fetch(`https://api.github.com/users/${searchTerm}`);
                if (!response.ok) throw new Error('Usuário não encontrado');

                const data = await response.json();
                setUserData(data);
                console.log("Dados do usuário:", data);

            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
    }

    return (
        <div className={`min-h-screen transition-colors duration-300 ${theme.background || 'bg-gray-100'}`}>
            <ThemeToggle />
            <div className="container mx-auto p-4">
                <h1 className={`text-2xl font-bold mb-6 text-center ${theme.text || 'text-gray-900'}`}>
                    Busca de Perfis GitHub
                </h1>

                <form onSubmit={handleSearch} className="max-w-md mx-auto mb-8">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Digite um usuário do GitHub"
                            className={`flex-1 p-3 rounded-lg border focus:outline-none focus:ring-2 ${
                                theme.input || 'bg-white border-gray-300 focus:ring-blue-500 focus:border-blue-500'
                            }`}
                            disabled={loading}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className={`px-6 py-3 rounded-lg font-medium ${
                                loading ? 'bg-gray-400' : (theme.button || 'bg-blue-600 hover:bg-blue-700 text-white')
                            }`}
                        >
                            {loading ? 'Buscando...' : 'Buscar'}
                        </button>
                    </div>
                </form>

                {loading && <LoadingSpinner />}

                {error && (
                    <div className={`p-4 rounded-lg text-center mb-6 ${
                        theme.error || 'bg-red-100 text-red-800'
                    }`}>
                        {error}
                    </div>
                )}

                {userData && (
                    <div className="mt-8">
                        <UserProfile
                            user={userData}
                            theme={theme}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default App