import type { Route } from "../+types/root";
import type { CloudinaryResource } from "~/types/cloudinary";

import { useQuery } from "@tanstack/react-query";
import { eventsQueries } from "~/queries/programsQuery";

export default function Events() {
  const { isLoading, error, data } = useQuery({
    queryKey: eventsQueries.all().queryKey,
    queryFn: () => fetch(`/cloudinary`).then((res) => res.json()),
  });

  return (
    <div className="mx-4 flex flex-col gap-4">
      <h1 className="text-2xl w-fit font-medium">Eventos pasados</h1>

      <h2>Rockstar - Radio Chilanga Live</h2>

      {isLoading ? (
        <div className="min-h-96  flex justify-center items-center">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {data.images.map((image: CloudinaryResource) => (
            <img
              key={image.filename}
              src={image.secure_url}
              alt={image.filename}
              className="w-60 h-96"
            />
          ))}
        </div>
      )}
    </div>
  );
}
