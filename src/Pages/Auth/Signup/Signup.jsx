import React, { useState, useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../../../firebase-config";
import { useUser } from "../../../Contexts/UserContext";
import bcrypt from "bcryptjs";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [registration, setRegistration] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    role: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [success, setSuccess] = useState(false);

  const validator = {
    name: (val) => (val.trim() ? "" : "Name is Required"),
    role: (val) => (val.trim() ? "" : "Role is Required"),
    email: (val) => {
      if (!val.trim()) return "Email is Required";
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      return isValid ? "" : "Invalid Email Format";
    },
    password: (val) => (val.trim() ? "" : "Password is required"),
    confirmPassword: (val) => {
      if (!val.trim()) {
        return "Confirm Password is Required";
      } else if (val != registration.password) return "Password doesn't match";
      else return "";
    },
  };

  function handleInput(e) {
    const { name: fieldName, value } = e.target;

    const updateRegisterForm = {
      ...registration,
      [fieldName]: value,
    };

    setRegistration(updateRegisterForm);

    if (validator[fieldName]) {
      const updateErrorMsg = validator[fieldName](value, updateRegisterForm);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: updateErrorMsg,
      }));
    }
  }

  const register = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validator.name(registration.name),
      role: validator.role(registration.role),
      email: validator.email(registration.email),
      password: validator.password(registration.password),
      confirmPassword: validator.confirmPassword(
        registration.confirmPassword,
        registration
      ),
    };
    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => err);

    if (!hasErrors) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          registration.email,
          registration.password
        );
        const user = userCredential.user;
        const hashedPassword = await bcrypt.hash(registration.password, 10);

        await setDoc(doc(db, "users", user.uid), {
          name: registration.name,
          role: registration.role,
          email: registration.email,
          password: hashedPassword,
        });
        setSuccess(true);
        setRegistration({
          name: "",
          role: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        setTimeout(() => {
          navigate("/Auth/Login");
        }, 4000);
      } catch (error) {
        let firebaseErrorMessage = "";

        if (error.code === "auth/email-already-in-use") {
          firebaseErrorMessage = "Email already exists. Please try logging in.";
        } else if (error.code === "auth/invalid-email") {
          firebaseErrorMessage = "Invalid email address.";
        } else if (error.code === "auth/weak-password") {
          firebaseErrorMessage = "Password should be at least 6 characters.";
        } else {
          firebaseErrorMessage = error.message;
        }

        setErrors((prev) => ({
          ...prev,
          email: firebaseErrorMessage, // display under email field
        }));
      }
    }
  };

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [nameError, setNameError] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [confirmPasswordError, setConfirmPasswordError] = useState("");

  // const isValidName = (value) => {
  //     if(!value.trim()) {
  //         setNameError("Name is Required");
  //         return false;
  //     }
  //     setNameError("");
  //     return true;
  // }

  // const isvalidEmail = (value) => {
  //     if(!value.trim()) {
  //         setEmailError("Email id is required");
  //         return false;
  //     }
  //     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  //     setEmailError(isValid ? "" : "Invalid email format");
  //     return isValid;
  // }

  // const isValidPassword = (value) => {
  //     if(!value.trim()) {
  //         setPasswordError("Password is required");
  //         return false;
  //     }
  //     setPasswordError("");
  //     return true;
  // }

  // const isValidConfirmPassword = (value) => {
  //     if(!value.trim()) {
  //         setConfirmPasswordError("Confirm Password is required");
  //         return false;
  //     }
  //     else if(value !== password){
  //         setConfirmPasswordError("Password and Confirm Password not same");
  //         return false;
  //     }
  //     setConfirmPasswordError("");
  //     return true;
  // }

  // const handleNameChnage = (e) => {
  //     const value = e.target.value;
  //     setName(value);
  //     setNameError("");
  // }

  // const handleEmailChnage = (e) => {
  //     const value = e.target.value;
  //     setEmail(value);
  //     setEmailError("");
  // }

  // const handlepasswordChnage = (e) => {
  //     const value = e.target.value;
  //     setPassword(value);
  //     setPasswordError("");
  // }

  // const handleConfirmPasswordChnage = (e) => {
  //     const value = e.target.value;
  //     setConfirmPassword(value);
  //     setConfirmPasswordError("");
  // }

  // const handleSignup = (e) => {
  //     e.preventDefault();

  //     const nameValid = isValidName(name);
  //     const emailValid = isvalidEmail(email);
  //     const passwordValid = isValidPassword(password);
  //     const confirmPasswordValid = isValidConfirmPassword(confirmPassword);

  //     if(nameValid && emailValid && passwordValid && confirmPasswordValid) {
  //         alert("Login Successfull !");
  //     }
  // }

  return (
    // Signup form
    <div className="flex items-center justify-center mt-6">
      {!success && (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>
          <p className="text-xs mb-4 text-center">
            Create an account to get started.
          </p>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="sName">
                Name
              </label>
              <input
                type="text"
                id="sName"
                name="name"
                value={registration.name}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="role">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={registration.role}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              {errors.role && <p className="text-red-500">{errors.role}</p>}
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="sEmail"
              >
                Email
              </label>
              <input
                type="email"
                id="sEmail"
                name="email"
                value={registration.email}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="sPassword"
              >
                Password
              </label>
              <input
                type="password"
                id="sPassword"
                name="password"
                value={registration.password}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-sm font-medium mb-2"
                htmlFor="cPassword"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="cPassword"
                name="confirmPassword"
                value={registration.confirmPassword}
                onChange={handleInput}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Create a password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
            <button
              type="button"
              onClick={register}
              className="w-full bg-[#FF9500] text-white py-2 rounded-md hover:bg-[#FF9500] transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-center mt-3">
            Already have an account?{" "}
            <Link to="/auth/login" className="text-[#FF9500]">
              Login
            </Link>
          </p>
        </div>
      )}

      {success && (
        <div className="bg-white flex justify-center items-center mt-14 mb-2 p-6 rounded-lg shadow-md h-60 max-w-2xl w-full">
          <p className="text-green-600 text-center mt-4 text-sm">
            <span className="text-3xl flex flex-wrap items-baseline mb-4">
              <FaCheck className="text-amber-500 text-2xl mr-1.5" />{" "}
              Registration Completed Successfully.
            </span>{" "}
            <span className="text-black">
              Redirecting to Login Page... If not redirected,
            </span>{" "}
            <Link className="text-amber-600" to={"/Auth/Login"}>
              Click here
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default Signup;
