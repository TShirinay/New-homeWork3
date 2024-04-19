import React from 'react';
import Desription from "../conmponents/Desription";
import style from './aboutpage.module.css'

const AboutPage = () => {
    const props = {title: "Title 2", description: "description 2"}
    return (
        <div>
            <h1 className={style.title}>About Page</h1>
            <Desription {...props}/>
        </div>
    );
};

export default AboutPage;