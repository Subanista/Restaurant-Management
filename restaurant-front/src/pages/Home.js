import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import StarRating from '../StarRating';


export default function Home() {

    const [restaurants, setRestaurants]=useState([]);

    const { id } = useParams();

    useEffect(()=>{
    loadRestaurant();
    },[] );
    const loadRestaurant=async()=>{
        const result=await axios.get("http://localhost:8080/restaurants")
          setRestaurants(result.data);
    }

    const DeleteRestaurant = async (id) => {
        await axios.delete(`http://localhost:8080/restaurant/${id}`);
        loadRestaurant();
      };
    

  return (
    <div className='container'>
    <div className="py-4">
    <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Restaurant Name</th>
      <th scope="col">Address</th>
      <th scope="col">Email</th>
<<<<<<< HEAD
      
=======
      <th scope="col">Ratings</th>
>>>>>>> 352a5f782f352976475aa3850006bf1dfe5d5021
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
        restaurants.map((restaurant, index) =>(

            <tr>
                <th scope="row" key={index}>
                    {index + 1}
                </th>
                <td>{restaurant.restaurantName}</td>
                <td>{restaurant.address}</td>
                <td>{restaurant.email}</td>
<<<<<<< HEAD
                
=======
                <td><StarRating/></td>
>>>>>>> 352a5f782f352976475aa3850006bf1dfe5d5021
                <td>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/ViewRestaurant/${restaurant.id}`}
                  >
                    View
                  </Link>

                    <Link className="btn btn-outline-primary mx-2"
                     to={`/EditRestaurant/${restaurant.id}`}
                    >Edit</Link>

                    <button className="btn btn-danger mx-2"
                    onClick={()=>DeleteRestaurant(restaurant.id)}
                    >Delete</button>

                </td>
            </tr>
        )
            )
        }
    
    
  </tbody>
</table>
</div>
    </div>
  )
}
