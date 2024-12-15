// types/GitHub.d.ts
export interface User {
  login: string;
  id: number;
  avatar_url: string;
  followers: number;
  following: number;
  email: string | null;
  bio: string | null;
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
