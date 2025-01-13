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
      
      <div style={{display:'flex'}}>
        <div style={{display:'flex',}}>
<div style={{width:'80%',display:'flex',alignItems:'center',justifyContent:'center'}}>
  
  <img src={productDetails?.images} alt="" style={{height:"500px",width:'500px'}}/>
  </div>
<div style={{padding:'20px 50px 20px 50px',borderLeft:'1px solid black' ,display:'flex', flexDirection:'column',gap:'30px',alignItems:'center',}}>
  <h3 >{productDetails?.title} - {productDetails.weight} GM</h3>
  
<Rating name="half-rating-read" defaultValue={productDetails.rating} precision={0.5} readOnly />

  
  
<div>{productDetails.price}$</div>
<p><span style={{fontSize:'18px',fontWeight:'bolder'}}>Brand :</span>{productDetails.brand}</p>
<p><span style={{fontSize:'18px',fontWeight:'bolder'}}>Category :</span>  {productDetails.category}</p>
<p> {productDetails?.description}</p> 
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Stocks :</span>   {productDetails?.stock}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Shipping Time :</span>  {productDetails.shippingInformation}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Warranty :</span>  {productDetails.warrantyInformation}</p>
<p><span style={{fontSize:'15px',fontWeight:'bolder'}}>Return Days :</span>  {productDetails.returnPolicy}</p>

<div style={{border:'1px solid black',width:'20%',textAlign:'center',cursor:'pointer'}}>Add To Cart - {productDetails.price}$ </div>
<div style={{border:'1px solid black',width:'20%',textAlign:'center',cursor:'pointer', backgroundColor:'gold'}}>Buy It Now</div>
</div>




</div>

</div>



<div>
  <h2>Review</h2>

<div>

{userReviews.map((ele,i)=>{
return(
  <div style={{border:'1px solid black'}}>
<span>{ele.reviewerName}</span>
<div>
<Rating name="half-rating-read" defaultValue={ele.rating} precision={0.5} readOnly />

</div>

<p>{ele.comment}</p>
  </div>

)


})



}
</div>


</div>



</div>
    
  )
}

export default ProductsDetails