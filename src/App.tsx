import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./Homepage.tsx";
import Layout from "./Layout.tsx";
import AboutUs from "./AboutUs.tsx";
import ContactUs from "./ContactUs.tsx";
import Listpage from "./Listpage.tsx";
import Test from "./test.tsx";

function App() {
  return (
    <Router>
      <Routes>

        <Route
          path="/"
          element={
            <Layout>
              <Homepage />
            </Layout>
          }
        />

      <Route path="/aboutus" element={<Layout>
              <AboutUs />
            </Layout>}/>

            <Route path="/contactus" element={<Layout>
              <ContactUs />
            </Layout>}/>

              <Route path="/listpage" element={<Layout><Listpage/></Layout>}/>

              <Route path="/test" element={<Layout><Test/></Layout>}/>
      </Routes>
    </Router>
  );
}

export default App;
