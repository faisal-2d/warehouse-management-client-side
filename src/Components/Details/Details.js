import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(() => {        
        axios.get(`http://localhost:5000/item/${id}`)
        .then((data) => setItem(data.data));
      }, []);


      console.log(item);
      const deleverOne = id => {
          console.log(id, "is being delivered");
         const currentQuantity = Number(item.quantity) -1;
         console.log(currentQuantity);
         
      }
    return (
        <div>
            <h2>Update Information</h2>
            <div>
                <div>
<img src={item.img} alt="" />
                </div>
                <div>
                <p>Details info {id}</p>
                <h4>{item.name}</h4>
                <p>Current Quantity: {item.quantity}</p>
            <button onClick={()=>deleverOne(id)}>Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Details;