import { Route, Routes } from "react-router-dom";

// Styles
import './pages-style/multi-steps.scss'

// Layouts
import Layout from "./layouts/Layout";

// Pages
import MultiStep from "./pages/multi-steps";

function App() {
   return (
      <>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<MultiStep />} />
            </Route>
         </Routes>
      </>
   );
}

export default App;
