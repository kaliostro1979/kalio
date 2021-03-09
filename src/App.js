import React from 'react'
import {Layout} from "antd";
import BlockHeader from "./components/Header";
import BlockContent from "./components/Content";
import BlockFooter from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
/*import axios from "axios";

axios.defaults.withCredentials = true*/

function App() {

    return (
        <Layout className="App">
            <Router>
                <BlockHeader />
                <BlockContent />
                <BlockFooter/>
            </Router>
        </Layout>
    );
}

export default App;
