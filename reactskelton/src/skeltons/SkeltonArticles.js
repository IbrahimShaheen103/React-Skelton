import React from 'react';
import Shimmer from './Shimmer';
import SkeltonElement from './SkeltonElement';

const SkeltonArticles =({theme})=>{

    const themeClass=theme||'light';
    return(
        <div className={`skeleton-wrapper ${themeClass}`}>
          <div className='skeleton-article'>
              <SkeltonElement type='title' />
              <SkeltonElement type='text' />
              <SkeltonElement type='text' />
              <SkeltonElement type='text' />

          </div>
          <Shimmer/> 
        </div>
    )

}
export default SkeltonArticles;