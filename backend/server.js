import express from "express";
import dotenv from 'dotenv';
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 5000;

const app = express();

app.get('/',(req,res)=>{
    res.send('API is running...');
});
app.get('/api/products',(req,res)=>{
    res.json(products);
});
app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=>p._id===req.params.id);
    res.json(product);
});
// const {id:productId}= useParams();
//     const selctedProduct = products.find((p)=>p._id === productId);
    
app.listen(port,()=>console.log(`Server running on port ${port}`));