import React from "react";

function Header(props){
    return(
        <header 
            className={`custom-header ${props.variant ? `header-${props.variant}` : ''}`}>
            
        </header>
    );
}