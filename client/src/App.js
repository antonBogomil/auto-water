import React from 'react';
import Menu from "./components/Menu";
import Routing from "./components/Routing";
const App = () => {
    return (
        <>
            <header>
                <Menu/>
            </header>
            <main>
                <Routing/>
            </main>
            <footer>

            </footer>
        </>
    );
};

export default App;