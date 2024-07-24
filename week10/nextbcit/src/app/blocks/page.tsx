import { db } from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function BlocksPage() {
  const userId = cookies().get('user_id')?.value;
  if (!userId) redirect("/login");

  const blocks = await db.block.findMany({
    where: { userId: Number(userId) },
  });
  const renderedBlocks = blocks.map((block) => {
    return (
      <Link
        key={block.id}
        className="flex justify-between items-center p-2 border rounded"
        href={`/blocks/${block.id}`}
      >
        <div>{block.title}</div>
      </Link>
    );
  });
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h2 className="text-xl font-bold">Blocks</h2>
        <Link href="/blocks/create" className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedBlocks}</div>
    </div>
  );
}
