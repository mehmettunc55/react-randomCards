import React, { useState, useEffect } from "react";
import axios from "axios";
import email from "./assets/email.svg";
import phone from "./assets/phone.svg";
import location from "./assets/location.svg";
import './Card.css';


function Card() {
  const [itemList, setItemList] = useState([]);


const AllList= ()=>{
    axios
      .get("https://randomuser.me/api/")
      .then((res)=> setItemList(res.data.results));
  }
  useEffect(() => {
    AllList()
  }, []);

  return (
    <div className="card-container" >
      {itemList?.map((user, index) => (
        <div key={index} className="card-box" onClick={AllList}>
          <img src={user.picture.large} alt="pic" className="picture" />
          <p className='name'>
            {user.name.title} {user.name.first} {user.name.last} <br />{user.dob.age}{' years old'}   
          </p>
          <img src={email} alt="logo" className="icons" />
          <p className="info-text">{user.email}</p>
          <img src={phone} alt="logo" className="icons" />
          <p className="info-text">{user.cell}</p>
          <img src={location} alt="logo" className="icons" />
          <p className="info-text">
            {user.location.city} {user.location.country}
          </p>
          <div className="info-text">

            <p>
              {"Register Date:"} <br/>
              {user.registered.date}
            </p>
          </div>
       
        </div>
      ))}
    </div>
  );
}

export default Card;
