import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Pages/Home.jsx";
import CardDetails from "./components/Home/Product/CardDetails.jsx";
import RegisterView from "./components/Pages/RegisterView.jsx";
import CreateView from "./components/Pages/CreateView";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/details/:id" element={<CardDetails />} />
            <Route path="/register" element={<RegisterView />} />
            <Route path="/create" element={<CreateView />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
