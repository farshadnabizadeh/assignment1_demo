import React from 'react'
import { useState, useEffect } from 'react'
import { SpinnerCircularFixed } from 'spinners-react';
const Users = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUser(data));
    }, [])
    return (
        <>
            <div className='container'>

                {(user.length > 0) ?
                    user.map((item, index) => {
                        return (
                            <div key={index} className='row'>
                                <div className='user'>
                                    <div style={{ display: 'flex', justifyContent: 'center', alingItems: 'center' }}>
                                        <img style={{ display: 'flex', width: '100%', height: '100%', }} src={`https://avatars.dicebear.com/v2/avataaars/${item.username}.svg?options[mood][]=happy`} />
                                    </div>
                                    <div style={{ margin: '.5vw .5vw' }}>
                                        <ul style={{ listStyle: 'none' }}>
                                            <li className='title'>{item.name}</li>
                                            <li className='info-title'><span style={{ fontWeight: '600' }}>Email</span>: {item.email}</li>
                                            <li className='info-title'><span style={{ fontWeight: '600' }}>Phone</span>: {item.phone}</li>
                                            <li className='info-title'><span style={{ fontWeight: '600' }}>Company</span>: {item.company.name}</li>
                                            <li className='info-title'><span style={{ fontWeight: '600' }}>Website</span>: {item.website}</li>
                                            <li className='info-title'><span style={{ fontWeight: '600' }}>Address</span>: {item.address.street} {item.address.suite} {item.address.city} {item.address.zipcode}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )

                    }) :
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center'
                        , alignItems: 'center',
                        height: '90vh'
                    }}>
                        <SpinnerCircularFixed size={100} thickness={40} speed={100} color="#36ad47" secondaryColor="rgba(0, 0, 0, 0.44)" />
                    </div>
                }

            </div>
        </>


    )
}

export default Users
