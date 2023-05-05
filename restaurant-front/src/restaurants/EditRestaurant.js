import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditRestaurant() {

    let navigate = useNavigate();

    const { id } = useParams()

    const [restaurant, setRestaurant] = useState({
        restaurantName: "",
        address: "",
        email: "",
      })

      const { restaurantName, address , email } = restaurant;

      const onInputChange = (e) => {
        setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
      };

      useEffect(() => {
        loadRestaurant();
      }, []);
      const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/restaurant/${id}`, restaurant);
        navigate("/");
      };

      const loadRestaurant = async () => {
        const result = await axios.get(`http://localhost:8080/restaurant/${id}` );
        setRestaurant(result.data);
      };

      
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">Edit Restaurant</h2>
        <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
              <label htmlFor="RestaurantName" className="form-label">
                Restaurant Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Restaurant name"
                name="restaurantName"
               value={restaurantName}
               onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Address"
                name="address"
               value={address}
               onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the e-mail"
                name="email"
               value={email}
               onChange={(e) => onInputChange(e)} 
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>

            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
            </form>
            </div>
            </div>
            </div>

            
  )
}
