export interface GithubRepo {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  open_issues_count: number;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  language: string;
  // Add other fields if needed in the future
}
