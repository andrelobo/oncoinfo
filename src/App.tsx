import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Compare } from "./pages/Compare";
import { CompareAxis } from "./pages/CompareAxis";
import { Elections2026 } from "./pages/Elections2026";
import { Faq } from "./pages/Faq";
import { Government } from "./pages/Government";
import { Home } from "./pages/Home";
import { Methodology } from "./pages/Methodology";
import { RealImpact } from "./pages/RealImpact";
import { Sources } from "./pages/Sources";
import { State } from "./pages/State";
import { States } from "./pages/States";
import { Timeline } from "./pages/Timeline";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/comparar" element={<Compare />} />
          <Route path="/comparar/:axis" element={<CompareAxis />} />
          <Route path="/governo/:slug" element={<Government />} />
          <Route path="/linha-do-tempo" element={<Timeline />} />
          <Route path="/impacto-real" element={<RealImpact />} />
          <Route path="/eleicoes-2026" element={<Elections2026 />} />
          <Route path="/estados" element={<States />} />
          <Route path="/estados/:slug" element={<State />} />
          <Route path="/metodologia" element={<Methodology />} />
          <Route path="/fontes" element={<Sources />} />
          <Route path="/perguntas-frequentes" element={<Faq />} />
          <Route path="/sobre" element={<About />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
