import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import JobDetailsPage from "./pages/JobDetailsPage/JobDetailsPage";
import JobPostPage from "./pages/JobPostPage/JobPostPage";
import HomePage from "./pages/HomePage/HomePage";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={ <RegisterPage /> } />
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/job-details/:id" element={ <JobDetailsPage /> } />
        <Route 
          path="/job-post" 
          element={ <ProtectedRoute Component={JobPostPage}  /> } />
        <Route path="/" element={ <HomePage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 