import React from "react";
import {useHistory} from 'react-router-dom'
export const AboutPage: React.FC = ()=>{
    const history = useHistory();
return(
    <>
        <h1>info page</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet architecto, beatae consequatur
            deserunt dolores, eius eligendi
            esse inventore magnam minus natus nostrum odit, officia placeat quam reiciendis reprehenderit tempora.</p>
        <button className='btn' onClick={()=> history.push('/')}>back to todos</button>
    </>

)
};