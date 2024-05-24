import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  const { Component } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    debugger;
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Render loading state if the state is not yet determined
  if (isLoggedIn === null || isLoggedIn === false) {
    return <div></div>;
  }

  return <div>{isLoggedIn ? <Component /> : <Navigate to="/login" />}</div>;
}
