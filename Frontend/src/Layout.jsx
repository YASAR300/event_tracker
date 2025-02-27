import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Nav from "./Component/Nav";
import Profile from "./Pages/Profile";
import Events from "./Pages/Events";
import EventDetail from "./Pages/EventDetail";
import CreateEvent from "./Pages/CreateEvent";
import Login from "./Component/Login";
import Register from "./Component/Register";
import ManageEvent from "./Pages/ManageEvent";
import SearchResults from "./Pages/SearchResults";
import CategoryEvents from "./Pages/CategoryEvents";
import Footer from "./Component/Footer";

function Layout() {
  const location = useLocation();
  const hideNavFooter = ["/login", "/register"].includes(location.pathname); // Hide on login & register pages

  return (
    <>
      {!hideNavFooter && <Nav />} 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventDetail/:id" element={<EventDetail />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="/manage/:id" element={<ManageEvent />} />
        <Route path="/searchResults" element={<SearchResults />} />  
        <Route path="/category/:category" element={<CategoryEvents />} />
      </Routes>

      {!hideNavFooter && <Footer />}
    </>
  );
}

export default Layout;
