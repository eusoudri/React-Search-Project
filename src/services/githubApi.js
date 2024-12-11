import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
});

export const getUserDetails = (username) => api.get(`/users/${username}`);
export const getUserRepos = (username) => api.get(`/users/${username}/repos`);
export const getRepoDetails = (owner, repo) => api.get(`/repos/${owner}/${repo}`);

export default api;
