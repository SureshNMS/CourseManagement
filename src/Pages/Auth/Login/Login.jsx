import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../Contexts/UserContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../firebase-config";
import { getDoc, doc } from "firebase/firestore";

function Login() {
  const navigate = useNavigate();
  const {user} = useUser();

  useEffect(() => {
    if(user) {
      navigate("/");
    }
  }, [user, navigate]);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  function handleInput(e) {
    const value = e.target.value;
    const fieldName = e.target.name;
    setLoginForm({
      ...loginForm,
      [fieldName]: value,
    });
    setErrors("");
    setSuccessMessage("");
  }
  
  const userLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );
      setSuccessMessage(`Welcome, ${user?.name}! Login successful! Redirecting...`);
      setErrors("");

      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        navigate("/");
      }, 2500);

    } 
    catch (error) {
      console.log("Login Error:", error);
      let message = "";
      switch (error.code) {
        case "auth/user-not-found":
          message = "No account found with this email.";
          break;
        case "auth/wrong-password":
          message = "Incorrect password. Please try again.";
          break;
        case "auth/invalid-email":
          message = "Invalid email format.";
          break;
        case "auth/missing-password":
          message = "Password is required.";
          break;
        case "auth/too-many-requests":
          message = "Too many failed login attempts. Please try again later.";
          break;
        case "auth/invalid-credential":
          message = "Invalid email or password.";
          break;
        default:
          message = error.message || "Login failed. Please try again.";
      }
      setErrors(message);
      setSuccessMessage("");
    }
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [pswdError, setPswdError] = useState("");
  // const [apiError, setApiError] = useState("");
  // const [success, setSuccess] = useState();

  // const isvalidEmail = (value) => {
  //     if(!value.trim()) {
  //         setEmailError("Email is required");
  //         return false;
  //     }
  //     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  //     setEmailError(isValid ? "" : "Invalid email format");
  //     return isValid;
  // }

  // const isValidPswd = (value) => {
  //     if(!value.trim()) {
  //         setPswdError("Password is required");
  //         return false;
  //     }
  //     if(value.length < 6) {
  //         setPswdError("Password must be at least 6 characters long.");
  //         return false;
  //     }
  //     else if (!/[A-Z]/.test(value)) {
  //         setPswdError("Password must include at least one uppercase letter.");
  //         return false;
  //     }
  //     else if (!/\d/.test(value)) {
  //         setPswdError("Password must include at least one number.");
  //         return false;
  //     }
  //     else {
  //         setPswdError("");
  //         return true;
  //     }
  // }

  // const handleEmailChange = (e) => {
  //   const value = e.target.value;
  //   setEmail(value);
  //   setEmailError("");
  // };

  // const handlePswdChange = (e) => {
  //   const value = e.target.value;
  //   setPassword(value);
  //   setPswdError("");
  // };

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   //reset prev errors
  //   setEmailError("");
  //   setPswdError("");
  //   setApiError("");
  //   setSuccess("");

  //   //Basic Client Validation
  //   let isValid = true;

  //   if(!email.trim()) {
  //       setEmailError("Email is required");
  //       isValid = false;
  //   }

  //   if(!password.trim()) {
  //       setPswdError("Password is required");
  //       isValid = false;
  //   }

  //   if(!isValid) return; // no need to call API

  //   // Mock API connection
  //   try {
  //     const response = await fetch("https://reqres.in/api/login", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json", },
  //       body: JSON.stringify({
  //           email: "eve.holt@reqres.in",
  //           password: "cityslicka",
  //        }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setSuccess("✅ Login successful!");
  //       console.log("Token", data.token);
  //     } else {
  //       setApiError("❌ Login failed: " + data.error);
  //     }
  //   } catch (err) {
  //     setApiError("❌ Network error. Please try again.");
  //   }
  // };

  return (
    // Login form
    <div className="flex items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <p className="text-xs mb-6 text-center">
          Welcome back! Please use your credentials to access your account.
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginForm.email}
              onChange={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginForm.password}
              onChange={handleInput}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {errors && <p className="text-red-500 text-sm mt-2">{errors}</p>}
          </div>
          <button
            type="button"
            onClick={userLogin}
            className="w-full bg-[#FF9500] text-white py-2 rounded-md hover:bg-[#FF9500] transition duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-xs text-center mt-3">
          Don’t have an account?{" "}
          <Link to="/auth/signup" className="text-[#FF9500]">
            Sign Up
          </Link>
        </p>
        {successMessage && (
          <p className="text-green-500 text-sm text-center mb-2 mt-2">
            {successMessage}
          </p>
        )}
      </div>
    </div>
  );
}

export default Login;
