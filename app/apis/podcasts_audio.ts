import { getPodcasts } from "~/utils/cloudinary";

export async function loader() {
  const podcasts = await getPodcasts("rc/audio");
  return Response.json({ podcasts });
}
