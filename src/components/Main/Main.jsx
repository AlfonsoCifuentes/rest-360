import React from "react";
import { Route, Routes } from "react-router-dom";
import Pedido from "src/pages/clientes/Pedido/Pedido";

const Home = React.lazy(() => import("../../pages/clientes/Home/Home"));
const Reservas = React.lazy(() => import("../../pages/clientes/Reservas/Reservas"));
const Restaurante = React.lazy(() => import("../../pages/clientes/Restaurante/Restaurante"));
const CartaPedidos = React.lazy(() => import("../../pages/clientes/CartaPedidos/CartaPedidos"));
const CompraRegistro = React.lazy(() => import("../../pages/clientes/CompraRegistro/CompraRegistro"));
const Regalar = React.lazy(() => import("../../pages/clientes/Regalar/Regalar"));
const Contacto = React.lazy(() => import("../../pages/clientes/Contacto/Contacto"));
const Socios = React.lazy(() => import("../../pages/clientes/Socios/Socios"));
const AvisoLegal = React.lazy(() => import("../../pages/clientes/AvisoLegal/AvisoLegal"));
const DondeEstamos = React.lazy(() => import("../../pages/clientes/DondeEstamos/DondeEstamos"));
const Horarios = React.lazy(() => import("../../pages/clientes/Horarios/Horarios"));
const PoliticaCookies = React.lazy(() => import("../../pages/clientes/PoliticaCookies/PoliticaCookies"));
const PoliticaPrivacidad = React.lazy(() => import("../../pages/clientes/PoliticaPrivacidad/PoliticaPrivacidad"));
const RegistroUsuarios = React.lazy(() => import("../../pages/clientes/RegistroUsuarios/RegistroUsuarios"));

// Admin routes.
const AdmMain = React.lazy(() => import("../../pages/admin/AdmMain/AdmMain"));
const DetallePedidos = React.lazy(() => import("../../pages/admin/DetallePedidos/DetallePedidos"));
const DetallePlatos = React.lazy(() => import("../../pages/admin/DetallePlatos/DetallePlatos.jsx"));
const DetalleTickets = React.lazy(() => import("../../pages/admin/DetalleTickets/DetalleTickets"));
const ListadoPedidos = React.lazy(() => import("../../pages/admin/ListadoPedidos/ListadoPedidos"));
const ListadoPlatos = React.lazy(() => import("../../pages/admin/ListadoPlatos/ListadoPlatos"));
const ListadoRegalos = React.lazy(() => import("../../pages/admin/ListadoRegalos/ListadoRegalos"));
const ListadoReservas = React.lazy(() => import("../../pages/admin/ListadoReservas/ListadoReservas"));
const ListadoTickets = React.lazy(() => import("../../pages/admin/ListadoTickets/ListadoTickets"));
const ListadoUsuarios = React.lazy(() => import("../../pages/admin/ListadoUsuarios/ListadoUsuarios"));
const PedidosEnCurso = React.lazy(() => import("../../pages/admin/PedidosEnCurso/PedidosEnCurso"));

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
            path="/su-pedido"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <Pedido />
              </React.Suspense>
            }
          />

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

          <Route
            path="/registro"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <RegistroUsuarios />
              </React.Suspense>
            }
          />

          {/*************************
            Paginas Admin con botones  
            ***************************/}

          <Route
            path="/admmain"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <AdmMain />
              </React.Suspense>
            }
          />

          <Route
            path="/detallepedidos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DetallePedidos />
              </React.Suspense>
            }
          />

          <Route
            path="/detalleplatos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DetallePlatos />
              </React.Suspense>
            }
          />

          <Route
            path="/detalletickets"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <DetalleTickets />
              </React.Suspense>
            }
          />

          <Route
            path="/listadopedidos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoPedidos />
              </React.Suspense>
            }
          />

          <Route
            path="/listadoplatos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoPlatos />
              </React.Suspense>
            }
          />

          <Route
            path="/listadoregalos"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoRegalos />
              </React.Suspense>
            }
          />

          <Route
            path="/listadoreservas"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoReservas />
              </React.Suspense>
            }
          />

          <Route
            path="/listadotickets"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoTickets />
              </React.Suspense>
            }
          />

          <Route
            path="/listadousuarios"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <ListadoUsuarios />
              </React.Suspense>
            }
          />

          <Route
            path="/pedidosencurso"
            element={
              <React.Suspense fallback={<>Loading ...</>}>
                <PedidosEnCurso />
              </React.Suspense>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default Main;
