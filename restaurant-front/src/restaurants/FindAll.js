import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

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
