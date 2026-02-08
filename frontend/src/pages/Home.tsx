import { useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";

import Login from "./Login";

type Page = "home" | "login" | "register";

const Home = () => {
  const [page, setPage] = useState<Page>("home");

  return (
    <>
      <Navbar setPage={setPage} />

      {page === "home" && <Hero />}
      {page === "login" && <Login />}

      <Footer />
    </>
  );
};

export default Home;
