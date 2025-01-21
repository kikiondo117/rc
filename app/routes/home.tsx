import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { ProgramCard } from "~/components/molecules/ProgramCard/ProgramCard";
import { programs } from "~/utils/programs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio chilanga" },
    { name: "description", content: "Bienvenidos a radio chilanga!" },
  ];
}

export default function Home() {
  return (
    <div className="mx-4 flex flex-col gap-4">
      <main className="flex flex-col gap-4">
        <h1 className="text-2xl w-fit font-medium">Programas de la semana</h1>

        <ul className="flex flex-col justify-center items-center gap-4 md:flex-row md:flex-wrap">
          {programs.map((program) => (
            <li key={program.title}>
              <ProgramCard
                title={program.title}
                days={program.days}
                time={program.time}
                tags={program.tags}
                img={program.img}
              />
            </li>
          ))}
        </ul>
      </main>

      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl w-fit font-medium self-start">Eventos</h2>

        <div className="flex flex-col gap-4 w-full max-w-screen-lg">
          <h3 className="text-rc-primary font-extralight">
            Rockstar - Turo Jackson
          </h3>

          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100076177904911%2Fvideos%2F1691858868042704%2F&show_text=true&width=560&t=0"
            className="w-full h-72 md:h-96"
            scrolling="no"
            frameBorder={1}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>

      {/* <div>
        <h3 className="text-2xl w-fit font-medium">Patrocinadores</h3>
      </div> */}
    </div>
  );
}
