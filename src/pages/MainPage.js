import React from 'react';
import Desription from "../conmponents/Desription";
import style from './mainpage.module.css'

const MainPage = () => {
    const props =  {title: "Title", description: "description"}
    return (
        <div>
            <h1 className={style.title}>Main Page</h1>
            <Desription {...props}/>
        </div>
    );
};

export default MainPage;