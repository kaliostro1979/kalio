import React from 'react'
import {Layout} from "antd";
import BlockHeader from "./components/Header";
import BlockContent from "./components/Content";
import BlockFooter from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import ContextProvider from "./context/context";


function App() {


    return (
        <ContextProvider>
            <Layout className="App">
                <Router>
                    <BlockHeader/>
                    <BlockContent/>
                    <BlockFooter/>
                </Router>
            </Layout>
        </ContextProvider>
    );
}

export default App;
