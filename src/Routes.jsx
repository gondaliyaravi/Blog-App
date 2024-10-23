import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import PageNotFound from "./PageNotFound";
import BlogPage from "./Components/BlogPage";
import Users from "./Components/Users/Users";
import UserDetail from "./Components/Users/UserDetail";
import Invoice from "./Invoice/Invoice";



const AppRoutes = () => {
    return ( 
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} ></Route>
                    <Route path="/blogs" element={<BlogPage />} ></Route>
                    <Route path="/users" element={<Users />} ></Route>
                    <Route path="/users/:user_id" element={<UserDetail />} ></Route>
                    <Route path="/invoice" element={<Invoice />} ></Route>
                    <Route path="*" element={<PageNotFound />} ></Route>
                </Routes>
            </Router>
        </>
     );
}
 
export default AppRoutes;