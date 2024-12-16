import { createContext, useContext, ReactNode } from 'react';
import { useState, useCallback } from 'react';
import { AxiosError } from 'axios';
import { User, Repo } from '../types/GitHub';
import {
  getUserDetails,
  getUserRepos,
  getRepoDetails,
} from '../services/githubApi';

interface UserContextValue {
  user: User | null;
  repos: Repo[];
  repoDetails: Repo | null;
  error: string | null;
  loading: boolean;
  sortOrder: 'asc' | 'desc';

  setUser: (user: User | null) => void;
  setRepos: (repos: Repo[]) => void;
  setError: (error: string | null) => void;
  setLoading: (loading: boolean) => void;
  setSortOrder: (order: 'asc' | 'desc') => void;
  setRepoDetails: (repo: Repo | null) => void;

  fetchUser: (username: string) => Promise<void>;
  fetchUserRepos: (
    username: string,
    order?: 'asc' | 'desc',
    page?: number,
    perPage?: number,
  ) => Promise<void>;
  fetchRepoDetails: (owner: string, repo: string) => Promise<void>;
}

export const UserContext = createContext<UserContextValue | undefined>(
  undefined,
);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [repoDetails, setRepoDetails] = useState<Repo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  function handleErrorResponse(status?: number): string {
    switch (status) {
      case 404:
        return 'Recurso não encontrado.';
      case 403:
        return 'Limite de requisições atingido. Tente novamente mais tarde.';
      default:
        return 'Ocorreu um erro ao carregar os dados. Por favor, tente novamente.';
    }
  }

  const fetchUser = useCallback(async (username: string) => {
    setLoading(true);
    setError(null);
    setUser(null);
    try {
      const response = await getUserDetails(username);
      setUser(response.data);
    } catch (err: unknown) {
      const axiosErr = err as AxiosError;
      const status = axiosErr.response?.status;
      setError(handleErrorResponse(status));
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUserRepos = useCallback(
    async (username: string, order: 'asc' | 'desc' = 'desc', page: number = 1, perPage: number = 10) => {
      setLoading(true);
      setError(null);
  
      try {
        const response = await getUserRepos(username, page, perPage); 
        const newRepos = response.data;
  
        const sorted = newRepos.sort((a: Repo, b: Repo) => {
          return order === 'asc'
            ? a.stargazers_count - b.stargazers_count
            : b.stargazers_count - a.stargazers_count;
        });
  
        setRepos((prevRepos) => (page === 1 ? sorted : [...prevRepos, ...sorted]));
  
        setSortOrder(order);
      } catch (err: unknown) {
        const axiosErr = err as AxiosError;
        const status = axiosErr.response?.status;
        setError(handleErrorResponse(status));
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const fetchRepoDetailsFn = useCallback(
    async (owner: string, repo: string) => {
      setLoading(true);
      setError(null);
      setRepoDetails(null);
      try {
        const response = await getRepoDetails(owner, repo);
        setRepoDetails(response.data);
      } catch (err: unknown) {
        const axiosErr = err as AxiosError;
        const status = axiosErr.response?.status;
        setError(handleErrorResponse(status));
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const value: UserContextValue = {
    user,
    repos,
    repoDetails,
    error,
    loading,
    sortOrder,

    setUser,
    setRepos,
    setError,
    setLoading,
    setSortOrder,
    setRepoDetails,

    fetchUser,
    fetchUserRepos,
    fetchRepoDetails: fetchRepoDetailsFn,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUserContext(): UserContextValue {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
}
