const BASE = process.env.NEXT_PUBLIC_API_BASE_URL!;

async function j<T>(res: Response): Promise<T> { if (!res.ok) throw new Error(await res.text()); return res.json() as Promise<T>; }

export type User = { id: string; name: string; lineStatus: "online"|"offline" };
export type Progress = { id: string; userId: string; stageKey: string; status: string; score?: number|null; updatedAt: string };

export const Api = {
  createUser: async (name: string) => j<User>(await fetch(`${BASE}/api/users`, {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ name, lineStatus: "online" })
  })),
  listUsers:  async (q?: string) => {
    const u = new URL(`${BASE}/api/users`); if (q) u.searchParams.set("q", q);
    const { data } = await j<{ data: User[] }>(await fetch(u, { cache: "no-store" })); return data;
  },
  getProgress: async (userId: string) => {
    const u = new URL(`${BASE}/api/progress`); u.searchParams.set("userId", userId);
    const { data } = await j<{ data: Progress[] }>(await fetch(u, { cache: "no-store" })); return data;
  },
  saveProgress: async (p: { userId: string; stageKey: string; status: "passed"|"failed"|"in-progress"; score?: number|null }) =>
    j<Progress>(await fetch(`${BASE}/api/progress`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(p) })),
};
