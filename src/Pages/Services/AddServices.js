import React, { useContext } from 'react';
import useTitle from '../../Hook/useTitle';
import {AuthContext} from '../Authentication/AuthProvider';


const AddServices = () => {
  const {user} = useContext(AuthContext);

  const handleAddService = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.servicename.value;
    const image = form.imageurl.value;
    const des = form.description.value;
    const price = form.price.value;
    const short_des = form.shortdes.value;

    const addservice = {
      name,
      image,
      des,
      price,
      short_des
    };

    fetch('https://tour-expert-server.vercel.app/service',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(addservice)
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data);
      if(data.acknowledged){
        alert('Add Services successfully');
        form.reset();
      }
    })
    .catch(err => console.error(err));
  }

  useTitle('Add Services');

    return (
        <div className="py-20 px-96 bg-slate-300">
                <h1 className="text-3xl uppercase mb-4 text-cyan-500 font-bold">Add Your Tour Services:</h1>
                <form onSubmit={handleAddService} >
                  <input className="my-2 p-2 rounded w-full" type="text" name="servicename" placeholder="Service Title" required/>
                  <br />
                  <input className="my-2 p-2 rounded w-full" type="text" name="imageurl" placeholder="Image url" required/>
                  <br />
                  <textarea className="my-2 p-2 rounded w-full" name="description" placeholder="Description" rows="4" cols="50" required />
                  <br />
                  <input className="my-2 p-2 rounded w-full" type="number" name="price" placeholder="Price" required/>
                  <br />
                  <input className="my-2 p-2 rounded w-full" type="text" name="shortdes" placeholder="Short Description" required/>
                  <br />
                  <button className="bg-cyan-600 text-white p-3 w-full rounded" type="submit">
                    ADD SERVICE
                  </button>
                </form>
              </div>
    );
};

export default AddServices;