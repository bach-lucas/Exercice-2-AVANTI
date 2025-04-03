import { FiGithub, FiUsers, FiUserPlus, FiGitBranch, FiExternalLink } from 'react-icons/fi';

export default function UserProfile({ user = {}, theme = {} }) {
    const {
        avatar_url = '/default-avatar.png',
        login = 'usuário-desconhecido',
        name = '',
        bio = '',
        followers = 0,
        following = 0,
        public_repos = 0,
        html_url = '#'
    } = user;

    const themeConfig = {
        card: theme.card || 'bg-white dark:bg-gray-800',
        text: theme.text || 'text-gray-800 dark:text-gray-50',
        textSecondary: theme.textSecondary || 'text-gray-600 dark:text-gray-200',
        button: theme.button || 'bg-blue-600 hover:bg-blue-700 text-white',
        border: theme.border || 'border-blue-400',
        statBg: theme.buttonSecondary || 'bg-gray-50 dark:bg-gray-700'
    };

    return (
        <div className={`max-w-md mx-auto rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg ${themeConfig.card}`}>
            <div className="p-6">
                <div className="flex items-center gap-4">
                    <img
                        src={avatar_url}
                        alt={`Avatar de ${name || login}`}
                        className={`h-16 w-16 rounded-full border-2 ${themeConfig.border}`}
                    />
                    <div>
                        <h2 className={`text-xl font-bold ${themeConfig.text}`}>
                            {name || login}
                        </h2>
                        <p className={`flex items-center ${themeConfig.textSecondary}`}>
                            <FiGithub className="mr-1" /> @{login}
                        </p>
                    </div>
                </div>

                {bio && (
                    <p className={`mt-4 italic ${themeConfig.textSecondary}`}>
                        {bio}
                    </p>
                )}

                <div className="mt-6 grid grid-cols-3 gap-2">
                    <StatItem
                        icon={<FiUsers className="text-blue-500" size={18} />}
                        label="Seguidores"
                        value={followers}
                        theme={themeConfig}
                    />
                    <StatItem
                        icon={<FiUserPlus className="text-green-500" size={18} />}
                        label="Seguindo"
                        value={following}
                        theme={themeConfig}
                    />
                    <StatItem
                        icon={<FiGitBranch className="text-purple-500" size={18} />}
                        label="Repos"
                        value={public_repos}
                        theme={themeConfig}
                    />
                </div>

                <a
                    href={html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center justify-center px-4 py-2 rounded-md transition-colors ${themeConfig.button}`}
                >
                    Ver perfil completo
                    <FiExternalLink className="ml-2" size={16} />
                </a>
            </div>
        </div>
    );
}

const StatItem = ({ icon, label, value, theme }) => (
    <div className={`flex flex-col items-center p-3 rounded-lg ${theme.statBg}`}>
        <div className={`flex items-center gap-2 ${theme.textSecondary}`}>
            {icon}
            <span className="text-sm font-medium text-gray-50 dark:text-gray-100">
                    {label}
                </span>
        </div>
        <span className={`mt-1 text-lg font-bold text-gray-50 dark:text-gray-100`}>
                {value}
            </span>
    </div>
);