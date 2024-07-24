import { editBlock } from "@/app/actions";
import { CodeEditor } from "@/components/CodeEditor";
import { db } from "@/db";

export default async function EditPage({ params }: any) {
  const block = await db.block.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  return (
    <div>
      <h3 className="font-bold m-3">Edit a Block</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            className="border rounded p-2 w-screen bg-gray-300"
            type="text"
            name="title"
            id="title"
            defaultValue={block?.title}
            disabled
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <CodeEditor snippet={block} />
        </div>
      </div>
    </div>
  );
}
