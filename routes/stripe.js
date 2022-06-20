const express = require('express')
const router = express.Router()
const cors = require('cors')
const app = express();
const stripe = require('stripe')('sk_test_51KtCf1LVDYVdzLHCA31MSSlOKhe7VQtXqJJiPnJK90sRLsmYU3R5MlTljmTe5AGZTNaKzKF0Fr8BC2fNOsTBgDP100TiYqCU9k')

//initialize cors options and white list
const whitelist = ['http://localhost:3000', 'https://amorebooks.io']

const corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
  }

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


// app route to /secret for Stripe.JS to get the client secret 
router.get('/secret', async (req, res) => {

    console.log('Making requests!')
    const intent = await stripe.paymentIntents.create({
     currency: 'usd',
     amount: 4500,
     metadata: {integration_check: 'accept_a_payment'}
   });
 
 
   res.json(intent);
 })

 

 // app route to /updatePaymentIntent 

 router.post('/updatePaymentIntent', async (req, res) => {

    var amount = req.body.price;
    var receipt_email = req.body.receipt_email;
      console.log('Making update - for price!')
    
     res.json(intent);
    })



module.exports = router