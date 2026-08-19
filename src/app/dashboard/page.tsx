import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Dashboard() {
  const cvuri = await prisma.cv.findMany({
    where: {
      userId: 1, 
    },
  });

  return (
    <main className="mx-auto max-w-3xl p-8">
      <h1 className="text-4xl font-bold">Dashboard</h1>

      <h2 className="mt-8 text-2xl font-semibold">CV-urile mele</h2>

      <div className="mt-4 flex flex-col gap-4">
        {cvuri.map((cv) => (
          <div key={cv.id} className="rounded-xl border border-gray-200 p-6 shadow-sm">
            <h3 className="text-xl font-semibold">{cv.titlu}</h3>
            <p className="mt-2 text-gray-600">Preset: {cv.preset}</p>
            <p className="mt-2 text-gray-600">Data creării: {cv.createdAt.toLocaleDateString()}</p>
          </div>
        ))}
      </div>

      <Link href="/" className="mt-8 inline-block text-blue-600 underline">
        Inapoi acasa
      </Link>
    </main>
  );
}