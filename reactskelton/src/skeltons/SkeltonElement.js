import React from 'react';
import './skelton.css'
const SkeltonElement=({type })=>{
   const classes=`skeleton ${type}` ;

    return(
        <div className={classes}>

        </div>
    );
}
export default SkeltonElement;