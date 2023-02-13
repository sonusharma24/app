import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import MovieDetails from "./pages/MovieDetails/index";
import PageNotFound from "./pages/PageNotFound/index";
import AllSeries from "./pages/AllSeries/index";
import AllMovies from "./pages/AllMovies/index";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/allmovies" element={<AllMovies />} />
          <Route path="/allseries" element={<AllSeries />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
