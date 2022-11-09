import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";


const SingleService = () => {
  const {user} = useContext(AuthContext);
  const { _id, image, name, price, short_des, des } = useLoaderData();

  const handleReview=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || 'unregistered';
    const message = form.message.value;

    const review = {
      service: _id,
      name,
      email,
      message
    }

    fetch('http://localhost:5000/reviews',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));

  }

  return (
    <div className="bg-zinc-100">
      <div>
        <img className=" w-full mx-auto h-auto" src={image} alt="" />
      </div>
      <div className="p-20">
        <div className="p-10 flex items-center">
          <h1 className="text-3xl font-bold text-zinc-900 uppercase">{name}</h1>
          <h1 className=" p-2 ml-9 bg-cyan-200 text-xl text-orange-600 font-bold">
            ${price} / Per Person
          </h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center p-10">
          <div>
            <div className="pb-4">{short_des}</div>
            <div className="text-justify">
              <span className="text-xl font-bold text-cyan-600 uppercase ">
                Details :
              </span>
              <br /> {des}
            </div>
          </div>

          <div>
            <div>
              <span className="text-xl font-bold text-cyan-600 uppercase">
                User Review about This Services :
              </span>
            </div>
            <div>
              <div>
                <h1 className="text-lg mb-2">Please Add your Review :</h1>
                <form  onSubmit={handleReview}>
                  <input className="my-2 p-2 rounded" type="text" name="name" placeholder="Your name" required/>
                  <br />
                  <input className="my-2 p-2 rounded" type="emil" defaultValue={user?.email} name="emil" placeholder="Your emil" readOnly  required/> 
                  <br />
                  <textarea className="my-2 p-2 rounded" name="message" placeholder="write your opinion" rows="4" cols="50" required/>
                  <br />
                  <button className="bg-cyan-600 text-white p-3 w-full rounded" type="submit"> SUBMIT </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
