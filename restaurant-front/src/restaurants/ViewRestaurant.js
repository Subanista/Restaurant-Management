import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ViewRestaurant() {

    const [restaurant, setRestaurant] = useState({
        restaurantName: "",
        address: "",
        email: "",
      });

      const { id } = useParams();

      useEffect(() => {
        loadRestaurant();

      }, []);

      const loadRestaurant = async () => {
        const result = await axios.get(`http://localhost:8080/restaurant/${id}`);
        setRestaurant(result.data);
      };
    

  return (
    
<div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4"> Restaurant Destails</h2>
        <div className="card">
            <div className="card-header">
              Details of Restaurant id : {restaurant.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b> Restaurant Name: </b>
                  {restaurant.restaurantName}
                </li>
                <li className="list-group-item">
                  <b>Address: </b>
                  {restaurant.address}
                </li>
                <li className="list-group-item">
                  <b>Email: </b>
                  {restaurant.email}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/FindAll"}>
            All Restaurants
          </Link>
</div>
</div>
    </div>
  );
}
