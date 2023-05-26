import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Watchlist } from "./components/Watchlist";
import { Watched } from "./components/Watched";
import { Add } from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";
import { Trending } from "./components/Trending";

function App() {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/movies-watchlist" element={<Trending />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </GlobalProvider>
    </>
  );
}

export default App;
