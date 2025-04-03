import { useState } from 'react';

const SearchBar = ({ onSearch, loading }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onSearch(username.trim());
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
            <input
                type="text"
                placeholder="Digite um usuário do GitHub"
                className="flex-1 px-4 py-2 border rounded-lg"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
            />
            <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
            >
                {loading ? 'Buscando...' : 'Buscar'}
            </button>
        </form>
    );
};

export default SearchBar