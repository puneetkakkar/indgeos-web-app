import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { DrawerAppBar } from "./DrawerAppBar";

export const ProtectedLayout = () => {
  const { user } = useAuth();

  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <DrawerAppBar />
      {outlet}
    </>
  );
};
