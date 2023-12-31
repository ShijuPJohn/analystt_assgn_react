import Layout from "./layout/layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                </Routes>

            </Layout>

        </BrowserRouter>
    );
}

export default App;
