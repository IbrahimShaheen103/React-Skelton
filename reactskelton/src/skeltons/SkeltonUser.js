import React from 'react';
import SkeltonElement from './SkeltonElement';


const SkeletonUser = ({theme}) => {
    const themeClass=theme||'light';
    return (
        <div className= {`skeleton-wrapper ${themeClass}`}>
            <div className='skeleton-profile'>
                <div>
                    <SkeltonElement type='avatar' />
                </div>
                <div>
                    <SkeltonElement type='title' />
                    <SkeltonElement type='text' />
                    <SkeltonElement type='text' />
                </div>
            </div>
        </div>
    )
}
export default SkeletonUser;