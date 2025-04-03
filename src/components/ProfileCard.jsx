export default function ProfileCard({ user, isExactMatch = true }) {
    return (
        <div className={`rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl 
      bg-white dark:bg-dracula-currentLine
      ${!isExactMatch && 'border-2 border-amber-300 dark:border-dracula-purple'}`}>

            {/* Cabeçalho com nome e username */}
            <div className="px-6 pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <img
                        src={user.avatar_url}
                        alt={`Avatar de ${user.login}`}
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full border-4 border-blue-100 dark:border-dracula-purple"
                    />

                    <div>
                        {/* Nome completo (se existir) */}
                        {user.name && (
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-dracula-pink">
                                {user.name}
                            </h1>
                        )}

                        {/* Username (sempre visível) */}
                        <div className="flex items-center gap-2 mt-1">
              <span className="text-lg text-gray-600 dark:text-dracula-foreground">
                @{user.login}
              </span>
                            {!isExactMatch && (
                                <span className="text-xs bg-amber-100 dark:bg-dracula-purple text-amber-800 dark:text-dracula-foreground px-2 py-1 rounded-full">
                  aproximado
                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bio e estatísticas */}
            <div className="p-6">
                {user.bio && (
                    <p className="text-gray-600 dark:text-dracula-foreground mb-6">
                        {user.bio}
                    </p>
                )}

                <div className="grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-50 dark:bg-dracula-comment p-3 rounded-lg">
                        <div className="font-semibold text-blue-700 dark:text-dracula-cyan">Seguidores</div>
                        <div className="text-lg dark:text-dracula-foreground">{user.followers}</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-dracula-comment p-3 rounded-lg">
                        <div className="font-semibold text-blue-700 dark:text-dracula-cyan">Seguindo</div>
                        <div className="text-lg dark:text-dracula-foreground">{user.following}</div>
                    </div>
                    <div className="bg-blue-50 dark:bg-dracula-comment p-3 rounded-lg">
                        <div className="font-semibold text-blue-700 dark:text-dracula-cyan">Repositórios</div>
                        <div className="text-lg dark:text-dracula-foreground">{user.public_repos}</div>
                    </div>
                </div>
            </div>

            {/* Link para o perfil */}
            <div className="bg-gray-50 dark:bg-dracula-comment px-6 py-4 text-center">
                <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-dracula-cyan font-medium"
                >
                    Ver perfil completo no GitHub
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
}