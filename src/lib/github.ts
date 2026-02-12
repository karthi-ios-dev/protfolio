export interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    language: string | null;
    fork: boolean;
    updated_at: string;
}

const USERNAME = "codigotechnologies"; // Defaulting to the user's apparent org/name or a placeholder. 
// The user said "Karthikeyan", but I don't have his exact username. I will use a placeholder constant that is easy to change.
// "Karthikeyan" is common. I'll use "karthik" as a placeholder or maybe "apple" as a safe bet for data? 
// No, I should use a real one or handle errors gracefully. 
// I'll use "vercel" or similar as a fallback if "karthikeyan" fails, but better to put a comment.
// Let's use a clear placeholder variable.

export async function getRepos(): Promise<Repository[]> {
    // Using a public GitHub user for demo purposes if specific user not known. 
    // User asked for "iOS Developer". 
    // I will assume the user will replace this.
    const targetUser = "karthik";

    try {
        const res = await fetch(`https://api.github.com/users/${targetUser}/repos?sort=updated&per_page=100`, {
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        if (!res.ok) {
            throw new Error("Failed to fetch repositories");
        }

        const repos: Repository[] = await res.json();

        // Filter out forks if desired, or keep them. 
        // Filter for featured projects logic can go here.
        return repos
            .filter((repo) => !repo.fork && repo.description) // Only non-forks with descriptions
            .sort((a, b) => b.stargazers_count - a.stargazers_count); // Sort by stars
    } catch (error) {
        console.error("Error fetching repos:", error);
        return [];
    }
}
