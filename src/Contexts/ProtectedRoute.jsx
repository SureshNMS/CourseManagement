import { Navigate } from "react-router-dom";
import { useUser } from "./UserContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>; // Wait until Firebase finishes

  // If not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return children;
}
