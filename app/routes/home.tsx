import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { ProgramCard } from "~/components/molecules/ProgramCard/ProgramCard";
import { daily, programs, recordings } from "~/utils/programs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio chilanga" },
    { name: "description", content: "Bienvenidos a radio chilanga!" },
  ];
}

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["podcasts_audio", 5],
    queryFn: () =>
      fetch(`api/podcasts_audio?total=5`).then((res) => res.json()),
  });

  return (
    <div className="mx-4 flex flex-col gap-4">
      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4 w-full max-w-screen-lg md:items-center">
          <h3 className="text-rc-primary font-extralight">
            Rockstar - Silver Shadow
          </h3>

          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100076177904911%2Fvideos%2F3400822440055698%2F&show_text=false&width=560&t=0"
            className="w-full h-48 md:h-72 md:w-1/2"
            scrolling="no"
            frameBorder={1}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl w-fit font-medium">
          Programas regulares
        </h2>

        <div className="carousel carousel-center bg-neutral rounded-box w-full space-x-4 p-4">
          {daily.map((program) => (
            <div className="carousel-item" key={program.title}>
              <ProgramCard
                title={program.title}
                days={program.days}
                time={program.time}
                tags={program.tags}
                img={program.img}
                broadcaster={program.broadcaster}
              />
            </div>
          ))}
        </div>
      </div>

      <main className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl w-fit font-medium">
          Programas semanales
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Locutor</th>
                <th>Programa</th>
                <th>Días</th>
                <th>Horario</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) => (
                <>
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={program.img} alt={program.title} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{program.broadcaster}</div>
                          <div className="text-sm opacity-50">México</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {program.title}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {program.tags.join(", ")}
                      </span>
                    </td>
                    <td>{program.days}</td>
                    <td>{program.time}</td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="divider divider-primary">Programas grabados</h3>

        <div className="flex flex-col gap-4 box-border md:flex-row md:flex-wrap w-full ">
          {isLoading && (
            <div className="min-h-[80vh] flex flex-col justify-center items-center gap-4">
              <span className="loading loading-ring loading-lg"></span>
              <p>Cargando...</p>
            </div>
          )}

          {data &&
            data.podcasts.map((recording) => {
              return (
                <div className="card bg-neutral text-neutral-content w-full  md:w-80">
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">Podcast disponibles!</h2>
                    <p>Radiochilanga.</p>
                    <div className="card-actions justify-end">
                      <p>{recording.public_id}</p>
                      <audio controls src={recording.url}></audio>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <Link to="/recordings">
          <button className="bg-rc-primary text-white text-base font-medium py-2 px-4 rounded-md">
            Ver todos
          </button>
        </Link>
      </div>
    </div>
  );
}
