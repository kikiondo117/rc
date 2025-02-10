import { Link } from "react-router";
import type { Route } from "./+types/home";

import { ProgramCard } from "~/components/molecules/ProgramCard/ProgramCard";
import { daily, programs, recordings } from "~/utils/programs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio chilanga" },
    { name: "description", content: "Bienvenidos a radio chilanga!" },
  ];
}

export default function Home() {
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

        {/* <ul className="flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap">
          {daily.map((program) => (
            <li key={program.title}>
              <ProgramCard
                title={program.title}
                days={program.days}
                time={program.time}
                tags={program.tags}
                img={program.img}
                broadcaster={program.broadcaster}
              />
            </li>
          ))}
        </ul> */}
      </div>

      <main className="flex flex-col gap-4">
        <h1 className="text-2xl md:text-3xl w-fit font-medium">
          Programas semanales
        </h1>

        <ul className="flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap">
          {programs.map((program) => (
            <li key={program.title}>
              <ProgramCard
                title={program.title}
                days={program.days}
                time={program.time}
                tags={program.tags}
                img={program.img}
                broadcaster={program.broadcaster}
              />
            </li>
          ))}
        </ul>
      </main>

      <div className="flex flex-col gap-4 justify-center items-center">
        <h3 className="divider divider-primary">Programas grabados</h3>

        <div>
          {recordings.map((recording) => {
            return (
              <div>
                <img src={recording.url} />
                <div>
                  <p>{recording.title}</p>
                  <audio controls src={recording.url}></audio>
                </div>
              </div>
            );
          })}
        </div>

        {/* <Link to="/grabados">
          <button className="bg-rc-primary text-white text-base font-medium py-2 px-4 rounded-md">
            Ver todos
          </button>
        </Link> */}
      </div>
    </div>
  );
}
