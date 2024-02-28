import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from "./features/authentication/presentation/login";
import ProductList from "./features/available_plans/presentation/availablePlans";
import MyPlans from "./features/my_plans/presentation/myPlans";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    // Check if JWT is already saved in storage
    const storedJWT = localStorage.getItem("jwtToken");

    if (storedJWT) {
      // Set authentication state to true
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  // return (
  //   <Router>
  //     <Routes>
  //       <Route path="/" element={<LoginPage />} />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/plans_available" element={<ProductList />} />
  //     </Routes>
  //   </Router>
  // );

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <Route path="/" element={<Navigate to="/plans_available" />} />
        ) : (
          <>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/plans_available" element={<ProductList />}/>
            <Route path="/my_plans" element={<MyPlans />}/>
            
          </>
        )}
        {/* Show plans_available if authenticated, else redirect to login page */}
        {isAuthenticated ? (
          <Route path="/plans_available" element={<ProductList />} />
        ) : (
          <Route path="/plans_available" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
