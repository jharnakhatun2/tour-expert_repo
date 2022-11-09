import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import img from '../../Assets/login/profile.png';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [review, setReview] = useState([]);
  console.log(review);

  useEffect(() => {
    fetch(`http://localhost:5000/review?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [user?.email]);

  const handleDelete = _id =>{
    const proceed = window.confirm('Are you sure you want to delete?');
    if(proceed){
        fetch(`http://localhost:5000/review/${_id}`,{
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if(data.deletedCount > 0){
                alert('Deleted successfully');
                const remaining = review.filter(revw =>revw._id !== _id);
                setReview(remaining);
            }
        });
    }
  }

  return (
    <div className="bg-cyan-100 p-8 ">
      <h1 className="text-4xl text-center pt-10 text-slate-700 font-bold"> You have <span className="text-orange-600">{review.length}</span> Reviews</h1>
      <hr className="w-8 h-1 bg-orange-400 mx-auto mb-20" />
      <div className="overflow-x-auto w-full">
        <table className="table w-full mx-auto">
          <tbody>
            {review.map((rev) => {
              const { _id, service, username, email, message, service_name } =
                rev;
              return (
                <div key={_id} className="m-5 ">
                  <tr>
                    <th>
                      <label>
                        <button onClick={()=>handleDelete(_id)} className="btn text-orange-600">X</button>
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={img}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{username}</div>
                          <div className="text-sm opacity-50">{email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {service_name}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {service}
                      </span>
                    </td>
                    <td>
                      <span className="text-cyan-400">{message}</span> <br />
                      <span className="badge badge-ghost badge-sm">
                        Complements
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-ghost text-orange-600 badge-lg">update</span>
                    </td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Review;
