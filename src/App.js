import React from 'react'
import {Layout} from "antd";
import BlockHeader from "./components/Header";
import BlockContent from "./components/Content";
import BlockFooter from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";


function App() {

    return (

        <Layout className="App" style={{padding: '0 24px 24px'}}>
            <Router>
                <BlockHeader/>
                <BlockContent/>
                <BlockFooter/>
            </Router>
        </Layout>
    );
}

export default App;
