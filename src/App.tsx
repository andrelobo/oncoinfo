import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { TabPage } from "./pages/TabPage";
import { tabs } from "./content/tabs";

export default function App() {
  const first = tabs[0].slug;

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to={`/${first}`} replace />} />
          {tabs.map((tab) => (
            <Route key={tab.slug} path={`/${tab.slug}`} element={<TabPage />} />
          ))}
          <Route path="*" element={<Navigate to={`/${first}`} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
