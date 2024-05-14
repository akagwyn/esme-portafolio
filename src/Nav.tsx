import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { IconContext } from "react-icons";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 768);
  const showMobileMenu = !isDesktop;

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="z-10 m-auto w-full">
      {isDesktop && (
        <ul className="flex justify-between text-xl items-center py-5">
          <li>
            <Link to="/" className="font-specter font-bold px-2 text-2xl">
              Esmeralda Lopez Colli
            </Link>
          </li>

          <li className="flex font-light text-zinc-500">
            <Link
              to="/sobre-mi"
              className="px-2"
              onClick={() => handleCloseMenu()}
            >
              Sobre mi
            </Link>
            <Link
              to="/contacto"
              className="px-2"
              onClick={() => handleCloseMenu()}
            >
              Contacto
            </Link>
            <Link
              to="https://www.instagram.com/ivan.gwyn/"
              target="_blank"
              className="px-2"
              onClick={() => handleCloseMenu()}
            >
              Instagram
            </Link>
          </li>
        </ul>
      )}
      {showMobileMenu && !isMenuOpen && (
        <nav className="">
          <Link
            to="/"
            className="flex justify-between py-5 px-2 text-xl items-center m-auto "
          >
            <p className=" font-bold text-primary-100 text-2xl text-center">
              Ivan Hughes
            </p>
            <div onClick={() => handleOpenMenu()}>
              <FaBars size={30} />
            </div>
          </Link>
        </nav>
      )}

      {isMenuOpen && (
        <div className="absolute h-full w-full bg-black duration-100">
          <div
            className="absolute right-0 p-5"
            onClick={() => handleCloseMenu()}
          >
            <IconContext.Provider value={{ color: "white" }}>
              <IoCloseSharp size={30} />
            </IconContext.Provider>
          </div>
          <div className="flex justify-center text-center flex-col h-full text-2xl text-white">
            <Link to="/">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Home{" "}
              </p>
            </Link>
            <Link to="/">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Sobre mi
              </p>
            </Link>
            <Link to="/contacto">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Contacto
              </p>
            </Link>
            <Link to="https://www.instagram.com/ivxnbelike/" target="_blank">
              <p className="m-2" onClick={() => handleCloseMenu()}>
                Instagram
              </p>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
