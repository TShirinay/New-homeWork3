import React from 'react';
import style from './description.module.css'

const Desription = ({title, descripton}) => {
    return (
        <div>
            <h2 className={style.title}>{title}</h2>
            <p>{descripton}</p>
        </div>
    );
};

export default Desription;