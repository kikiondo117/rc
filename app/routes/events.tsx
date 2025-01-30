import type { Route } from "../+types/root";
import type { CloudinaryResource } from "~/types/cloudinary";

import { json } from "stream/consumers";
import { getImageUrl } from "~/utils/cloudinary";
import { events } from "~/utils/events";

export async function loader() {
  const images = await getImageUrl("rc");
  return { images };
}

export default function Events({ loaderData }: Route.ComponentProps) {
  const { images } = loaderData as unknown as { images: CloudinaryResource[] };

  return (
    <div className="mx-4 flex flex-col gap-4">
      <h1 className="text-2xl w-fit font-medium">Eventos pasados</h1>

      <h2>Rockstar - Radio Chilanga Live</h2>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {images &&
          images.map((image) => (
            <img
              key={image.filename}
              src={image.secure_url}
              alt={image.filename}
              className="w-60 h-96"
            />
          ))}
      </div>
    </div>
  );
}
