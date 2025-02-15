import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useQuery } from "@tanstack/react-query";

import { ProgramCard } from "~/components/molecules/ProgramCard/ProgramCard";
import { daily, programs, recordings } from "~/utils/programs";
import { ConfettiCustom } from "~/components/molecules/Confetti/Confetti";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Radio chilanga" },
    {
      name: "description",
      content: "Bienvenidos a radio chilanga! tu radio online",
      keywords: "Radio Chilanga, música mexicana, radio online, música en vivo",
      "og:title": "Radio Chilanga",
      "og:description":
        "Disfruta de la mejor música mexicana en Radio Chilanga, disponible online en todo el mundo.",
      "og:type": "website",
      "og:url": "https://radiochilanga.com",
      "og:image": "https://radiochilanga.com/logo.jpg",
    },
  ];
}

export default function Home() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["podcasts_audio", 5],
    queryFn: () =>
      fetch(`api/podcasts_audio?total=5`).then((res) => res.json()),
  });

  return (
    <div className="mx-4 flex flex-col gap-8">
      <section
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1616626710700-8cb67b8260d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b24lMjBhaXJ8ZW58MHx8MHx8fDA%3D)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Radiochilanga Live</h1>
            <p className="mb-5">
              Ve las entrevistas grabadas en nuestra pagína oficial de de
              Facebook - Radio Chilanga Live.
            </p>

            <Link to="#live" className="btn bg-blue-500 text-white">
              Visitar
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
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
      </section>

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
                <tr key={program.title}>
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
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <section className="flex flex-col gap-4 justify-center items-center">
        <h3 className="divider divider-primary md:text-2xl">
          Programas grabados
        </h3>

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
                <div
                  key={recording.url}
                  className="card bg-neutral text-neutral-content w-full  md:w-80"
                >
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">¡Programa disponibles!</h2>

                    <div className="card-actions justify-end">
                      <p className="text-rc-primary">
                        {recording.public_id.split("/").pop()}
                      </p>
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
      </section>

      <div className="flex flex-col gap-4">
        <h4 className="text-center text-xl md:text-2xl">PATROCINADORES</h4>

        <div className="carousel carousel-end rounded-box">
          <div className="carousel-item">
            <img
              src="https://res.cloudinary.com/kikis-javascript/image/upload/v1739402845/rc/Patrocinadores/kikis-404_2_hzsg9e.jpg"
              alt="kikis 404"
              className="h-full w-80"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
              alt="Drink"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
              alt="Drink"
            />
          </div>
        </div>
      </div>

      <section id="live" className="flex flex-col gap-4">
        <h3 className="divider divider-secondary md:text-2xl ">
          Radio Chilanga Live
        </h3>

        <div className="text-center font-thin">
          Radiochilanga Live es una plataforma en la que podrás ver las
          entrevistas en vivo.
        </div>
        <Link
          to="https://www.facebook.com/profile.php?id=100076177904911"
          className="btn btn-primary text-white max-w-xs mx-auto"
          target="_blank"
        >
          Visitar Radiochilanga Live
        </Link>
      </section>
    </div>
  );
}
