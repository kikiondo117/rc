import type { Route } from "./+types/upload";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) {
    return { status: 400 };
  }
}

export default function UploadPage() {
  return (
    <form method="post" encType="multipart/form-data">
      <label>
        Select file:
        <input type="file" name="file" />
      </label>
      <button type="submit">Upload</button>
    </form>
  );
}
