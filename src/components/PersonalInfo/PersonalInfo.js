import React from 'react';
import './PersonalInfo.css'
const PersonalInfo = () => {
    return (
        <div>
            <div className='person-info-container'>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                <h3 className='name'>PREAN SAHA</h3>
                <div className='info-container'>
                    <div className='weight'>
                        <p>48KG</p>
                        <small>Weight</small>
                    </div>
                    <div className='height'>
                        <p>5.3</p>
                        <small>Height</small>
                    </div>
                    <div className='age'>
                        <p>30+yrs</p>
                        <small>Age</small>
                    </div>
                </div>

                <h4></h4>

            </div>
        </div>
    );
};

export default PersonalInfo;