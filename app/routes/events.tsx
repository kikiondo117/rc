import type { CloudinaryResource } from "~/types/cloudinary";

import { useQuery } from "@tanstack/react-query";
import { CgSpinner } from "react-icons/cg";

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
        <div className="min-h-[80vh] flex flex-col justify-center items-center gap-4">
          <span className="loading loading-ring loading-lg"></span>
          <p>Cargando...</p>
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
