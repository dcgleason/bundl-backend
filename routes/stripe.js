const express = require('express')
const app = express();
const router = express.Router()


app.use(cors({
    origin: "*",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    exposedHeaders: '*'
  }))

// app route to /secret for Stripe.JS to get the client secret 
router.get('/stripe', async (req, res) => {

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