import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useUser } from "../../Contexts/UserContext";

const LoginButton = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const {user, loading} = useUser();
  if(loading) {
    return <p>Loading user data...</p>;
  }
  // Inline reusable NavItem component
  function AuthButton({ to, children, defaultBg = false }) {
    const currentPath = location.pathname;    
    const isAnyAuthLinkActive =
      currentPath === "/auth/signup" || currentPath === "/auth/login";
    return (
      <NavLink
        to={to}
        className={({ isActive }) => {
          let base = "px-3 py-1 text-black rounded";
          let active = "bg-[#FF9500] font-semibold text-white";
          let hover = "hover:bg-[#E0E0E0]";

          if (defaultBg) {
            if (!isAnyAuthLinkActive) {
              return `${base} ${active}`;
            }
            return `${base} ${isActive ? active : hover}`;
          }

          return `${base} ${isActive ? active : hover}`;
        }}
      >
        {children}
      </NavLink>
    );
  }

  function logout(e) {
    e.preventDefault();
    setTimeout(() => {
      window.location.href="/auth/login";
      localStorage.removeItem("isLoggedIn");
    })
  }

  return (
    <nav className="flex items-center space-x-4 ml-auto text-sm">
      {!isLoggedIn ? (
        <>
          <AuthButton to="auth/signup">Sign Up</AuthButton>
          <AuthButton to="auth/login" defaultBg>
            Login
          </AuthButton>
        </>
      ) : (
        <>

          <span>Welcome, {user?.name || "Guest"}</span>
          <button
            onClick={logout}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
};

export default LoginButton;
