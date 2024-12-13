import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export function getUserDetails(username: string) {
  return api.get(`/users/${username}`);
}

export function getUserRepos(username: string) {
  return api.get(`/users/${username}/repos`);
}

export function getRepoDetails(owner: string, repo: string) {
  return api.get(`/repos/${owner}/${repo}`);
}
