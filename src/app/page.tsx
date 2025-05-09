"use client";

import { api } from "@/backend/convex/_generated/api";
import { useQuery } from "convex/react";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
    </main>
  );
}
