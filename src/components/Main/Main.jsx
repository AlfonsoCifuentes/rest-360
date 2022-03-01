import React from "react";
import { Route, Routes } from "react-router-dom";


// import Home from "../../pages/clientes/Home/Home";
// import Reservas from "../../pages/clientes/Reservas/Reservas";

const Home = React.lazy(() => import("../../pages/clientes/Home/Home"));
const Reservas = React.lazy(() => import("../../pages/clientes/Reservas/Reservas"));
const Restaurante = React.lazy(() => import("../../pages/clientes/Restaurante/Restaurante"))


const Main = () => {
  return (
    <div className="mainDiv">
      <main>

        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Home />
              </React.Suspense>
            }
          />
                    <Route
            path="/restaurante"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Restaurante />
              </React.Suspense>
            }
          />
          <Route
            path="/reservas"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Reservas
                 />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
