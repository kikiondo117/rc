import { Link, Outlet, useLocation } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

import { MusicPlayer } from "~/components/organims/MusicPlayer";
import { eventsQueries } from "~/queries/programsQuery";

export default function MainLayout() {
  const queryClient = useQueryClient();

  return (
    <div>
      <div className="container mx-auto dark:text-white">
        <header className="md:mx-auto flex max-w-screen-lg items-center justify-between py-4 mx-4">
          <Link to="/" className="flex items-center">
            <img
              className="h-10"
              src="/imgs/rc/Logo-b.png"
              alt="Radio chilanga"
            />
          </Link>
          <nav className="mt-8">
            <ul className="flex justify-end gap-4">
              <li>
                <Link
                  className="hover:text-yellow-500 underline"
                  to={"/events"}
                  onMouseOver={() => {
                    queryClient.prefetchQuery({
                      queryKey: eventsQueries.all().queryKey,
                      queryFn: eventsQueries.all().queryFn,
                    });
                  }}
                >
                  Eventos
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-yellow-500 underline"
                  to={"/podcasts"}
                >
                  Podcasts
                </Link>
              </li>

              <li>
                <Link className="hover:text-yellow-500 underline" to={"/about"}>
                  Sobre <br /> nosotros
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className="max-w-screen pb-20 ">
          <Outlet></Outlet>
        </div>
      </div>

      <footer className="footer footer-center bg-base-200 text-base-content p-10 mb-12 md:mb-24">
        <aside>
          <img
            src="/imgs/rc/Logo-Icon.svg"
            alt="radiochilanga"
            className="w-24 h-24"
          />

          <p className="font-bold">
            Radiochilanga MIT
            <br />
            Fundada desde 2019
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>

      <section className="fixed bottom-0 w-full left-0">
        <MusicPlayer />
      </section>
    </div>
  );
}
