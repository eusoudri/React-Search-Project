export interface User {
  login: string;
  id: number;
  avatar_url: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string | null;
  public_repos: number
}

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  language: string | null;
  description: string | null;
  html_url: string;
  updated_at: date
  visibility: string
  forks: number
}

export interface Error {
  response: string;
  name: string;
  full_name: string;
  owner: {
    login: string;
  };
  stargazers_count: number;
  language: string | null;
  description: string | null;
  html_url: string;
}
