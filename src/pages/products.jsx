import React, { useEffect, useState } from 'react'


import axios from 'axios';
import { Link } from 'react-router';


const Products = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`https://dummyjson.com/products`).then((response) => {
     
      setProducts(response.data.products)
    }).catch((error) => {
      console.log(error)

    })


  }, [])





  

  return (
    <div>
      <h1 style={{textAlign:'center'}}>Products</h1>
      <div style={{display:'flex' ,flexWrap:'wrap',gap:"10px",padding:"10px 0px 10px 50px",justifyContent:'center'}}>
        {products.map((ele, index) => {

          console.log(ele.title)
          return (

        

            <Link style={{textAlign:'center',textDecoration:"none",color:'black'}} to={`/productdetails/${ele?.id}`}key={index}>
              <div style={{border:'1px solid black', width:'400px',height:'400px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:'10px',border:'none' }}>
                <h3 style={{textAlign:'center',textDecoration:"none", outline:'none',color:'black',}}>{ele?.id}: {ele?.title}</h3>
                <img src={ele?.images[0]} alt="" style={{height:'200px', width:'250px'}} />
                <p style={{fontSize:'20px'}}>{ele?.price}$</p>



              </div>



            </Link>

          

          )
       
          })}
      </div>
    </div>





  )
}

export default Products