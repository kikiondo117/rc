import { Link, Outlet } from "react-router";

import { MusicPlayer } from "~/components/organims/MusicPlayer";

export default function MainLayout() {
  return (
    <div className="container mx-auto">
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
              <Link className="hover:text-yellow-500 underline" to={"/"}>
                Inicio
              </Link>
            </li>
            <li>
              <Link className="hover:text-yellow-500 underline" to={"/about"}>
                Sobre nosotros
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="  max-w-screen pb-14">
        <Outlet></Outlet>
      </div>

      <footer className="fixed bottom-0 w-full left-0">
        <MusicPlayer />
      </footer>
    </div>
  );
}
