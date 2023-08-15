// pages/api/products.js
const products = [
    { id: 1, title: 'Product A', price: 50, condition: 'Good' },
    { id: 2, title: 'Product B', price: 30, condition: 'Like New' },
    { id: 3, title: 'Product C', price: 20, condition: 'Used' },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(products);
  }
  