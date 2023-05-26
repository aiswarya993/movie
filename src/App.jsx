import "./components/style.css";
import { Header } from "./components/Header";
import axios from "axios";
import { Home } from "./components/Home";

import { Layout } from "./pages/Layout";
import { useState } from "react";
import { Favorites } from "./pages/Favorites";
import { MovieInfo } from "./pages/MovieInfo";
import { Route, Routes } from "react-router-dom";
function App() {
  // const [nove, setnove] = useState([]);
  // const [loading, setload] = useState(false);
  // const [errr, seterr] = useState(null);

  // const getMovies = async () => {
  //   try {
  //     await axios({
  //       method: "get",
  //       url: "https://api.themoviedb.org/3/movie/popular",
  //       params: { api_key: "e3ef60114f3455d412ea55db83f798b2", page },
  //     }).then(({ data }) => {
  //       setnove(data.results);
  //       settot(data.total_pages);
  //       setload(true);

  //       console.log(data);
  //     });
  //   } catch (err) {
  //     console.log(err.message);
  //     seterr(err.message);
  //     setload(false);
  //   }
  // };
  // useEffect(() => {
  //   getMovies();
  // }, [page]);
  return (
    <>
      {/* {" "} <Slider/> */}

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fav" element={<Favorites />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
