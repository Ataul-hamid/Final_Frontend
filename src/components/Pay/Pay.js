import React, { useState,useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

import { useParams } from 'react-router-dom';
import CheckOutForm from '../Dashboard/CheckOutForm';
const stripePromise = loadStripe('pk_test_51JwRP7Cb0j6dJbGPrZducANbB2cjzir3o8Rlxr1KpkXmKm5482IFT6mNKTqhYHSjiV3RtZWNiFQB9uKVOVrDynM500SnE8ZnMz');

const Pay = () => {
    const [orders , setOrders] = useState([]);
    const {orderId}=useParams();
    useEffect(() => {
        const url=`http://localhost:5000/orders/${orderId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
                
            })
    }, [orderId])
    
  
   
    return (
        <>
        <div className='m-5 p-5 bg-dark  rounded-3 text-black text-center'>
           <h2 className='text-success text-bold' >Please pay for:  {orders.name}</h2>
           <Card style={{ width: '18rem' }}>
     
      <Card.Body >
        
        <Card.Text>
          <h3 className='text-warning'>Pay through Stripe</h3>
           Please pay For : {orders.name}
        </Card.Text>
        <Card.Text>
        <Card.Title>pay ${orders.price}</Card.Title>
        </Card.Text>
        <Card.Text>
        {orders.date}
        </Card.Text>
        
        
      </Card.Body>
      <Card.Body> 
      {orders?.price && <Elements stripe={stripePromise}>
          <CheckOutForm orders={orders} />
        </Elements>}
      </Card.Body>
    </Card>
        </div>
        </>
    );
};

export default Pay;