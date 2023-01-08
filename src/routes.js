import {
  createBrowserRouter,
  createRoutesFromElements,
  defer,
  Route,
} from "react-router-dom";
import { AuthLayout } from "./components/AuthLayout";
import { ProtectedLayout } from "./components/ProtectedLayout";
import LoginPage from "./pages/Auth/LoginPage";
import WebMap from "./pages/Home/WebMap";

const getUserData = () =>
  new Promise((resolve) =>
    setTimeout(() => {
      const user = window.localStorage.getItem("user");
      resolve(user);
    }, 3000)
  );

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={<AuthLayout />}
        loader={() => defer({ userPromise: getUserData() })}
      >
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<ProtectedLayout />}>
          <Route path="/" element={<WebMap />} />
        </Route>
      </Route>
    </>
  )
);

export default router;
