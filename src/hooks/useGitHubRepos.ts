import { useEffect, useState } from 'react';

export type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
};

const RELEVANT_TOPICS = [
  'react', 'javascript', 'typescript', 'python', 'node', 'nextjs', 'vue',
  'ai', 'machine-learning', 'data', 'web', 'frontend', 'backend',
  'education', 'learning', 'tutorial', 'api', 'fullstack', 'design',
  'cybersecurity', 'security', 'cloud', 'devops', 'mobile',
];

const RELEVANT_LANGUAGES = [
  'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS', 'Java',
  'Go', 'Rust', 'C++', 'C#', 'Shell', 'Dart', 'Kotlin', 'Swift',
  'Vue', 'Svelte', 'PHP', 'Ruby',
];

function isRelevant(repo: GitHubRepo): boolean {
  if (repo.topics?.some((t) => RELEVANT_TOPICS.includes(t.toLowerCase()))) return true;
  if (repo.language && RELEVANT_LANGUAGES.includes(repo.language)) return true;
  const desc = (repo.description || '').toLowerCase();
  if (desc.includes('web') || desc.includes('app') || desc.includes('ai') || desc.includes('data') || desc.includes('api') || desc.includes('learning') || desc.includes('education') || desc.includes('tech') || desc.includes('digital')) return true;
  return false;
}

export function useGitHubRepos(username: string = 'DebugNinja10') {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function fetchRepos() {
      try {
        setLoading(true);
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`, {
          headers: { Accept: 'application/vnd.github+json' },
        });
        if (!res.ok) throw new Error('GitHub API error');
        const data: GitHubRepo[] = await res.json();
        const filtered = data
          .filter((repo) => !repo.fork && isRelevant(repo))
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        if (!cancelled) setRepos(filtered);
      } catch (err) {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Failed to load');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchRepos();
    return () => { cancelled = true; };
  }, [username]);

  return { repos, loading, error };
}
