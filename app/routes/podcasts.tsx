import type { CloudinaryResource } from "~/types/cloudinary";

import { useQuery } from "@tanstack/react-query";
import { CgSpinner } from "react-icons/cg";

export default function Podcasts() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["podcasts"],
    queryFn: () => fetch(`api/podcasts`).then((res) => res.json()),
  });

  return (
    <div className="mx-4 flex flex-col gap-4 min-h-[60vh]">
      <h1 className="text-2xl w-fit font-medium">Podcasts y Colaboraciones</h1>

      <div className="flex flex-wrap gap-4 justify-center items-center">
        {isLoading ? (
          <div className="min-h-[80vh] flex justify-center items-center gap-4">
            <CgSpinner className="animate-spin text-white" />
            <p>Cargando...</p>
          </div>
        ) : (
          <>
            {data.images.map((image: CloudinaryResource) => (
              <img
                key={image.filename}
                src={image.secure_url}
                alt={image.filename}
                className="w-48 h-48"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
