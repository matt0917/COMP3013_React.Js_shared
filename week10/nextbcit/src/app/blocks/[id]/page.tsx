import { deleteBlock } from "@/app/actions";
import { db } from "@/db";
import Link from "next/link";

export default async function BlockPage({ params }: any) {
  const block = await db.block.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Link href={`/blocks/${params.id}/edit`} className="border p-2 rounded max-w-20">
          Edit
        </Link>
        <form action={deleteBlock}>
          <input type="hidden" name="id" value={params.id} />
          <button className="border p-2 rounded">Delete</button>
        </form>
      </div>
      <p>{block?.title}</p>
      <pre className="p-5 border rounded-md">{block?.code}</pre>
    </div>
  );
}

