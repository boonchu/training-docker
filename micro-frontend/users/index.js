const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;
const orderServiceURL = 'http://localhost:4000';


app.get('/users', async(req, res) => {
  try {
    const response = await axios.get(`${orderServiceURL}/orders`);
    const orders = response.data;
    const users = [
      { id: 1, name: 'John Doe', orders: orders.slice(0, 2) },
      { id: 2, name: 'Jame Smith', orders: orders.slice(1, 3) },
      { id: 3, name: 'Bob Delan', orders: orders.slice(0, 1) },
    ];
    res.json(users);
  } catch(error) {
    res.status(500).json({error: 'Internal Server Error.'});
  }
});

app.listen(port, () =>{
  console.log('User service is running on port ' + port);
});
