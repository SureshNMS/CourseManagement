import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase-config"; // Adjust path

const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // 🔁 new
  
  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
    if (currentUser) {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: docSnap.data().name,
          });
        } else {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            name: "Guest",
          });
        }
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
    setLoading(false); // ✅ done loading
  });

  return () => unsubscribe();
}, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
