import { getPodcasts } from "~/utils/cloudinary";
import type { Route } from "../+types/root";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const total = url.searchParams.get("total") || 5;

  const podcasts = await getPodcasts("rc/audio", +total);
  return Response.json({ podcasts });
}
