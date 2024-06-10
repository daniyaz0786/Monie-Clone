import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Cpmponents/Header/Header";
import SimpleBottomNavigation from "./Cpmponents/MainNav";
import Container from "@mui/material/Container";
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Movies from "./Pages/Movies/Movies";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <div className="app">
          <Container>
            {/* <h1>asbah</h1> */}
            <Routes>
              <Route path="/" element={<Trending />} exact />
              <Route path="/movies" element={<Movies />} exact />
              <Route path="/series" element={<Series />} exact />
              <Route path="/search" element={<Search />} exact />
            </Routes>
          </Container>
        </div>

        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;
