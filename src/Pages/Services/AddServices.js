import React from 'react';

    // name,

    // image,

    // des,

    // price,

    // short_des

const AddServices = () => {
    return (
        <div className="py-20 px-96 bg-slate-300">
                <h1 className="text-3xl uppercase mb-4 text-cyan-500 font-bold">Add Your Tour Services:</h1>
                <form >
                  <input className="my-2 p-2 rounded w-full" type="text" name="servicename" placeholder="Service Title" required/>
                  <br />
                  <input className="my-2 p-2 rounded w-full" type="text" name="imageurl" placeholder="Image url" required/>
                  <br />
                  <textarea className="my-2 p-2 rounded w-full" name="description" placeholder="Description" rows="4" cols="50" required />
                  <br />
                  <input className="my-2 p-2 rounded w-full" type="text" name="shortdes" placeholder="Short Description" required/>
                  <br />
                  <button className="bg-cyan-600 text-white p-3 w-full rounded" type="submit">
                    SUBMIT
                  </button>
                </form>
              </div>
    );
};

export default AddServices;