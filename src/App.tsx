import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import "react-photo-view/dist/react-photo-view.css";

const SashaEter = lazy(() => import("./Albums/SashaEter"));
const Contacto = lazy(() => import("./Contacto"));
const SobreMi = lazy(() => import("./SobreMi"));

export default function App() {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] bg-zinc-50 text-zinc-800 font-lorimer-no-2 min-h-screen md:px-4 scroll-smooth">
      <Nav />
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            Cargando...
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<SashaEter />} />
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/sobre-mi" element={<SobreMi />}></Route>
        </Routes>
      </Suspense>

      <footer className="text-center py-5 text-xs font-light text-zinc-500">
        Diseñado por Ivan Gwyn Hughes
      </footer>
    </div>
  );
}
