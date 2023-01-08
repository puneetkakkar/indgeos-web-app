import { Alert, LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { Await, useLoaderData, useOutlet } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  const { userPromise } = useLoaderData();

  return (
    <Suspense fallback={<LinearProgress />}>
      <Await
        resolve={userPromise}
        errorElement={<Alert severity="error">Something went wrong!</Alert>}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};
