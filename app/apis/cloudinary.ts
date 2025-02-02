import { getImageUrl } from "~/utils/cloudinary";

export async function loader() {
  const images = await getImageUrl("rc");
  return Response.json({ images });
}
