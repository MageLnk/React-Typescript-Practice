import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
// Routes
import routes from "./routes";
// Components

// Styles
import logo from "../logo.svg";
// App
const Navigation = () => {
  const deployList = (routes: Array<any>) =>
    routes.map(({ to, name }) => (
      <li key={name}>
        <NavLink to={to} className={({ isActive }) => (isActive ? "nav-active" : "")}>
          {name}
        </NavLink>
      </li>
    ));

  const deployRoutes = (routes: Array<any>) =>
    routes.map((results) => <Route key={results.name} path={results.path} element={<results.Component />} />);

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>{deployList(routes)}</ul>
          </nav>
          <Routes>
            {deployRoutes(routes)}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
