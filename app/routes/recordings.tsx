import { useQuery } from "@tanstack/react-query";

export default function Recordings() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["podcasts_audio", 10],
    queryFn: () =>
      fetch(`api/podcasts_audio?total=10`).then((res) => res.json()),
  });

  return (
    <div className="mx-8">
      <h1 className="card bg-base-300 rounded-box grid h-20 place-items-center text-2xl">
        Programas grabados
      </h1>
      <div className="divider"></div>

      <div className="flex flex-col gap-4 box-border md:flex-row md:flex-wrap w-full ">
        {isLoading && (
          <div className="min-h-[80vh] flex flex-col justify-center items-center gap-4 w-full">
            <span className="loading loading-ring loading-lg"></span>
            <p>Cargando...</p>
          </div>
        )}

        {data &&
          data.podcasts.map((recording) => {
            return (
              <div className="card bg-neutral text-neutral-content w-full  md:w-80 indicator">
                <span className="indicator-item badge badge-primary">new</span>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title">Programas grabados</h2>
                  <p>Radiochilanga.</p>
                  <div className="card-actions justify-end">
                    <p>{recording.public_id.split("/").pop()}</p>
                    <audio controls src={recording.url}></audio>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
