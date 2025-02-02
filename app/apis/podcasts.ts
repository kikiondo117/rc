import { getImageUrl } from "~/utils/cloudinary";

export async function loader() {
  const images = await getImageUrl("rc/rc-colaboraciones");
  return Response.json({ images });
}
