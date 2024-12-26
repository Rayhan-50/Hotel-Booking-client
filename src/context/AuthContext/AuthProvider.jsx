/* eslint-disable react/prop-types */


import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import AuthContext from "./AuthContext";
import axios from "axios";
import { toast } from "react-toastify";

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth)
      .then(() => {
        toast.success("Successfully signed out!");
        setUser(null); // Clear user state on sign-out
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Failed to sign out. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser?.email) {
        const userPayload = { email: currentUser.email };

        axios
          .post(
            "https://job-portal-server-for-recruiter-part3.vercel.app/jwt",
            userPayload,
            { withCredentials: true }
          )
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            toast.error("Failed to authenticate user.");
            console.error("JWT Authentication Error:", error);
            setLoading(false);
          });
      } else {
        axios
          .post(
            "https://job-portal-server-for-recruiter-part3.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then(() => {
            setLoading(false);
          })
          .catch((error) => {
            console.error("Logout Error:", error);
            setLoading(false);
          });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
