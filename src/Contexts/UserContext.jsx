import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: docSnap.exists() ? docSnap.data()?.name || "Guest" : "Guest",
          });
        } catch (err) {
          console.error("Error fetching user doc:", err);
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: "Guest",
          });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Show loader while fetching auth state
  if (loading) return <p>Loading...</p>;

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);