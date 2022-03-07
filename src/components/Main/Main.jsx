import React from "react";
import { Route, Routes } from "react-router-dom";
import AvisoLegal from "src/pages/clientes/AvisoLegal/AvisoLegal";
import DondeEstamos from "src/pages/clientes/DondeEstamos/DondeEstamos";
import Horarios from "src/pages/clientes/Horarios/Horarios";
import PoliticaCookies from "src/pages/clientes/PoliticaCookies/PoliticaCookies";
import PoliticaPrivacidad from "src/pages/clientes/PoliticaPrivacidad/PoliticaPrivacidad";

const Home = React.lazy(() => import("../../pages/clientes/Home/Home"));
const Reservas = React.lazy(() =>
  import("../../pages/clientes/Reservas/Reservas")
);
const Restaurante = React.lazy(() =>
  import("../../pages/clientes/Restaurante/Restaurante")
);
const CartaPedidos = React.lazy(() =>
  import("../../pages/clientes/CartaPedidos/CartaPedidos")
);
const CompraRegistro = React.lazy(() =>
  import("../../pages/clientes/CompraRegistro/CompraRegistro")
);
const Regalar = React.lazy(() =>
  import("../../pages/clientes/Regalar/Regalar")
);

const Contacto = React.lazy(() =>
  import("../../pages/clientes/Contacto/Contacto")
);
const Socios = React.lazy(() => import("../../pages/clientes/Socios/Socios"));

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
                <Reservas />
              </React.Suspense>
            }
          />
          <Route
            path="/carta-pedidos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <CartaPedidos />
              </React.Suspense>
            }
          />

          <Route
            path="/socios"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Socios />
              </React.Suspense>
            }
          />
          <Route
            path="/contacto"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Contacto />
              </React.Suspense>
            }
          />

          <Route
            path="/regalar"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Regalar />
              </React.Suspense>
            }
          />

          {/*************************
        Paginas sin link en el menú  
        ***************************/}

          <Route
            path="/compraregistro"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <CompraRegistro />
              </React.Suspense>
            }
          />
          <Route
            path="/dondeestamos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DondeEstamos />
              </React.Suspense>
            }
          />
          <Route
            path="/horarios"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Horarios />
              </React.Suspense>
            }
          />
                    <Route
            path="/avisolegal"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <AvisoLegal />
              </React.Suspense>
            }
          />
                    <Route
            path="/politicacookies"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PoliticaCookies />
              </React.Suspense>
            }
          />
                    <Route
            path="/politicaprivacidad"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PoliticaPrivacidad />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
