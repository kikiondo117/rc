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
            <li>
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

      {/* <div>
        <h2 className="text-2xl w-fit font-medium">Locutores</h2>
      </div> */}
    </div>
  );
}
