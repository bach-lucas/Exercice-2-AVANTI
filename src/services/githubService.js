import axios from 'axios';

// Configure o token no arquivo .env
const GITHUB_TOKEN = import.meta.env.GITHUB_PUBLIC_TOKEN;

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
    }
});

const searchUser = async (username) => {
    try {
        // 1. Tentativa exata
        const exactResponse = await api.get(`/users/${username}`);

        return {
            data: exactResponse.data,
            exactMatch: true,
            error: null
        };

    } catch (error) {
        if (error.response?.status === 404) {
            return {
                data: null,
                exactMatch: false,
                error: 'Usuário não encontrado'
            };
        }

        console.error('Erro na API:', error.response?.status);
        return {
            data: null,
            exactMatch: false,
            error: error.response?.status === 401
                ? 'Erro de autenticação - Token inválido'
                : 'Erro ao acessar a API do GitHub'
        };
    }
};

export default { searchUser };