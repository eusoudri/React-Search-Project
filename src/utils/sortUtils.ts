import { Repo } from '../types/GitHub';

export function sortByStars(
  repos: Repo[],
  order: 'asc' | 'desc' = 'desc',
): Repo[] {
  return [...repos].sort((a, b) => {
    if (order === 'asc') {
      return a.stargazers_count - b.stargazers_count;
    } else {
      return b.stargazers_count - a.stargazers_count;
    }
  });
}
