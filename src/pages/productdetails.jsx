import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import Rating from '@mui/material/Rating';

const ProductsDetails = () => {
const {id}= useParams()
const [userReviews, setUserReviews] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
      console.log(response.data)
      setProductDetails(response?.data)
      setUserReviews(response?.data?.reviews)

    }).catch((error) => {
      console.log(error)

    })


  }, [])




  return (
    <div>
      
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
<div style={{width:'70%',display:'flex',justifyContent:'end'}}>
  
  <img src={productDetails?.images} alt="" style={{height:"500px",width:'500px'}}/>
  </div>
<div style={{display:'flex', flexDirection:'column',alignItems:'flex-start'}}>
  <h3 >{productDetails?.title} </h3>
  <span style={{display:'flex',gap:'5px'}}>
<Rating name="half-rating-read" defaultValue={productDetails?.rating} precision={0.5} readOnly />
{productDetails?.reviews?.length} Reviews
  </span>
  

  
  <div style={{fontSize:'22px'}}>{productDetails.price}$</div>
  <p style={{fontWeight:'bold',fontSize:'14px'}}>
    Wieght : {productDetails.weight} GM

  </p>
<div style={{border:'1px solid black',width:'20%',textAlign:'center',cursor:'pointer'}}>Add To Cart - {productDetails.price}$ </div>
<div style={{border:'1px solid black',width:'20%',textAlign:'center',cursor:'pointer', backgroundColor:'gold'}}>Buy It Now</div>

<p style={{width:'70%'}}> {productDetails?.description}</p> 


<p><span style={{fontSize:'18px',fontWeight:'bolder'}}>Category :</span>  {productDetails.category}</p>
<p><span style={{fontSize:'18px',fontWeight:'bolder'}}>Brand :</span>{productDetails.brand}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Stocks :</span>   {productDetails?.stock}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Shipping Time :</span>  {productDetails.shippingInformation}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Warranty :</span>  {productDetails.warrantyInformation}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Return Days :</span>  {productDetails.returnPolicy}</p>

</div>




</div>

</div>



<div>
  <h2>Customer Reviews</h2>
<div>
<div>
<div style={{border:'1px solid black'}}>
<span style={{fontSize:'32px',fontWeight:'bold'}}>{productDetails?.rating}</span>
<div>
<Rating name="half-rating-read" defaultValue={productDetails?.rating} precision={0.5} readOnly />

</div>
<span>{productDetails?.reviews?.length} Reviews</span>
</div>
</div>






</div>


</div>



</div>
    
  )
}

export default ProductsDetails