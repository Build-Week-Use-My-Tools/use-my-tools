import React, { useState } from 'react'

import LoaningTools from './LoaningTools'
import BorrowingTools from './BorrowingTools'
import AddTool from './AddTool'


const Profile = (props) => {



    return (
        <div>
            <h1>Profile Page</h1>
            <button onClick={() => {props.history.push('/addtool')}}>Add tool available to loan</button>
            <div className='lb'>
                <LoaningTools props2={props} />
                <BorrowingTools props2={props}/>
            </div>
            
            
        </div>
    );
}

export default Profile