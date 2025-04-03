import { useContext } from 'react';
import { GitHubContext } from '../context/GitHubContext';
import { ThemeContext } from '../context/ThemeContext';

export default function Filters() {
    const { filters, setFilters } = useContext(GitHubContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`p-4 rounded-lg shadow ${theme.card} h-fit`}>
            <h3 className={`font-semibold mb-3 ${theme.textSecondary}`}>
                Filtros
            </h3>
            <div className="space-y-4">
                <div>
                    <label className={`block text-sm mb-1 ${theme.textSecondary}`}>
                        Mín. de Repositórios
                    </label>
                    <input
                        type="number"
                        value={filters.minRepos}
                        onChange={(e) => setFilters({...filters, minRepos: e.target.value})}
                        className={`w-full p-2 border rounded ${theme.input}`}
                    />
                </div>

                <div>
                    <label className={`block text-sm mb-1 ${theme.textSecondary}`}>
                        Linguagem Principal
                    </label>
                    <input
                        type="text"
                        value={filters.language}
                        onChange={(e) => setFilters({...filters, language: e.target.value})}
                        className={`w-full p-2 border rounded ${theme.input}`}
                        placeholder="JavaScript, Python, etc"
                    />
                </div>

                <div>
                    <label className={`block text-sm mb-1 ${theme.textSecondary}`}>
                        Localização
                    </label>
                    <input
                        type="text"
                        value={filters.location}
                        onChange={(e) => setFilters({...filters, location: e.target.value})}
                        className={`w-full p-2 border rounded ${theme.input}`}
                        placeholder="São Paulo, Brazil"
                    />
                </div>
            </div>
        </div>
    );
}