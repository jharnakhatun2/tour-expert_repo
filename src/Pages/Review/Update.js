import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';

const Update = () => {
    useTitle('Update');
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);

    const handleUpdateReview = event =>{
        event.preventDefault();
        
        fetch(`https://tour-expert-server.vercel.app/review/${storedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount >0){
                alert('Update Successfully Completed')
            }
            console.log(data);
        });

    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser);
    }

    

    return (
        <div>
            <h1>Hi {storedUser.username}, Please update your opinion -</h1>
            <div>
            <form onSubmit={handleUpdateReview}>
                  <input onChange={handleInputChange}
                    className="my-2 p-2 rounded"
                    defaultValue={storedUser.username} type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <br />
                  <input onChange={handleInputChange}
                    className="my-2 p-2 rounded"
                    type="email"
                    defaultValue={storedUser.email}
                    name="email"
                    placeholder="Your email"
                    readOnly
                    required
                  />
                  <br />
                  <textarea onChange={handleInputChange}
                    className="my-2 p-2 rounded"
                    defaultValue={storedUser.message} name="message"
                    placeholder="write your opinion"
                    rows="4"
                    cols="50"
                    required
                  />
                  <br />
                  <button 
                    className="bg-cyan-600 text-white p-3 w-full rounded"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </form>
            </div>
        </div>
    );
};

export default Update;