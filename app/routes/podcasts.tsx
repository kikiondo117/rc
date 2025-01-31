import type { CloudinaryResource } from "~/types/cloudinary";
import type { Route } from "../+types/root";

import { getImageUrl } from "~/utils/cloudinary";

export async function loader() {
  const images = await getImageUrl("rc/rc-colaboraciones");
  return { images };
}

export default function Podcasts({ loaderData }: Route.ComponentProps) {
  const { images } = loaderData as unknown as { images: CloudinaryResource[] };

  return (
    <div className="mx-4 flex flex-col gap-4 min-h-[60vh]">
      <h1 className="text-2xl w-fit font-medium">Podcasts y Colaboraciones</h1>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {images &&
          images.map((image) => (
            <img
              key={image.filename}
              src={image.secure_url}
              alt={image.filename}
              className="w-48 h-48"
            />
          ))}
      </div>
    </div>
  );
}
