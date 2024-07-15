
import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js'


const CheckOutForm = ({orders}) => {
    const stripe = useStripe();
    const elements=useElements();
    const [clientSecret, setClientSecret]=useState('');
    const [cardError, setCardError]=useState('');
    const [success, setSuccess]=useState('');
    const [transactionId, setTransactionId]=useState('');
    const [processing, setProcessing]= useState(false);
    const {price, email, orderId, _id} = orders;

   useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({price})
    })
      .then(res=>res.json())
      .then(data=> setClientSecret(data.clientSecret));

   }, [price]);

    const handleSubmit =async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
          return
        }
     

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          setCardError(error?.message || '');
          setSuccess('');
          setProcessing(true);

          //payment
          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: email
                },
              },
            },
          );
          if(intentError){
            setCardError(intentError?.message);
            setProcessing(false);

          }
          else{
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess('congratulations');
            console.log(paymentIntent);
            setProcessing(false);



            //save to databse
            const payment ={
              orders: _id,
              transactionId: paymentIntent.id
            }
            fetch(`http://localhost:5000/orders/${_id}`, {
              method: 'PATCH',
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(payment)

            }).then(res=>res.json())
            .then(data=>{
              console.log(data);
            })

            

          }
        
        
        }
    
    

    return (
        <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4'
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      /><br></br><br></br>
      {processing? <CircularProgress></CircularProgress> : <button className='btn btn-success' type="submit" disabled={!stripe}>
        Pay
      </button>}

    
    </form>

    {
       cardError && <p className='text-red'>{cardError} </p>
    }
    {
       success && <div className='text-warning'>
        <p>{success}</p>
        <p>Your transaction Id; <span className='text-black'>{transactionId}</span></p>
       
        </div>
    }
        </>
    );
    };

export default CheckOutForm;
