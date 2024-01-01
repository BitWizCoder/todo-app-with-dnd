import { Toaster } from "react-hot-toast";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Register from "./components/Register";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthConotext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>

        <Toaster />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
