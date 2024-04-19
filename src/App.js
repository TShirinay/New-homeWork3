import React from 'react';
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import TodosPage from "./pages/TodosPage";

const App = () => {
    return (
        <div>
          <MainPage/>
            <AboutPage/>
            <TodosPage/>
        </div>
    );
};

export default App;