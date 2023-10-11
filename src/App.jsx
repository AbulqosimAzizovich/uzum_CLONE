import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import AlertStyle from "./components/UI/Alert";
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const App = () => {
  return (
      <>
          {/* <AlertStyle /> */}
          <Header />
          <Suspense fallback={<h1>LOADING . . .</h1>}>
              <main id="main">
                  <Outlet />
              </main>
          </Suspense>
          <Footer />
      </>
  );
};

export default App;
