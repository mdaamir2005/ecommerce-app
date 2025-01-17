import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';
import Rating from '@mui/material/Rating';

const ProductsDetails = () => {
  const { id } = useParams()
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

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '60%', display: 'flex', justifyContent: 'end' }}>

            <img src={productDetails?.images} alt="" style={{ height: "500px", width: '500px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <h3 >{productDetails?.title} </h3>
            <span style={{ display: 'flex', gap: '5px' }}>
              <Rating name="half-rating-read" defaultValue={productDetails?.rating} precision={0.5} readOnly />
              {productDetails?.reviews?.length} Reviews
            </span>



            <div style={{ fontSize: '22px' }}>{productDetails.price}$</div>
            <p style={{ fontWeight: 'bold', fontSize: '14px' }}>
              Wieght : {productDetails.weight} GM

            </p>
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '7px' }}>
              <div style={{ border: '1px solid black', width: '20%', textAlign: 'center', cursor: 'pointer', padding: '7px 0px 7px 0px' }}>Add To Cart - {productDetails.price}$ </div>
              <div style={{ border: '1px solid black', width: '20%', textAlign: 'center', cursor: 'pointer', backgroundColor: 'gold', padding: '7px 0px 7px 0px' }}>Buy It Now</div>

            </div>

            <p style={{ width: '70%', padding: '0px', margin: '0PX' }}> {productDetails?.description}</p>


            <p><span style={{ fontSize: '18px', fontWeight: 'bolder' }}>Category :</span>  {productDetails.category}</p>
            <p><span style={{ fontSize: '18px', fontWeight: 'bolder' }}>Brand :</span>{productDetails.brand}</p>
            <p><span style={{ fontSize: '18px', fontWeight: 'bolder' }}>Stocks :</span>   {productDetails?.stock}</p>
            <p><span style={{ fontSize: '18px', fontWeight: 'bolder' }}>Shipping Time :</span>  {productDetails.shippingInformation}</p>
            <p><span style={{ fontSize: '18px', fontWeight: 'bolder' }}>Warranty :</span>  {productDetails.warrantyInformation}</p>
            <p><span style={{ fontSize: '18px', fontWeight: 'bolder' }}>Return Days :</span>  {productDetails.returnPolicy}</p>

          </div>




        </div>

      </div>



      <div style={{display:'flex',flexDirection:'column',border:'1px solid blacl'}}>
        <h2>Customer Reviews</h2>
        <div style={{ border: '1px solid black',display:'flex' }}>
          <div>
            <div style={{ border: '1px solid black' }}>
              <span style={{ fontSize: '32px', fontWeight: 'bold' }}>{productDetails?.rating}</span>
              <div>
                <Rating name="half-rating-read" defaultValue={productDetails?.rating} precision={0.5} readOnly />

              </div>
              <span>{productDetails?.reviews?.length} Reviews</span>
            </div>
          </div>



          </div>



        </div>

          <div>

            <div style={{border:'1px solid black',display:'flex',justifyContent:'space-around'}}>
        {userReviews?.map((ele,index)=>{
          console.log({ele})
          return(
            <div style={{padding:'10px'}}>
            <div>
            <Rating name="half-rating-read" defaultValue={ele?.rating} precision={0.5} readOnly />
                
           </div>
            <h2>{ele?.reviewerName}</h2>
            <p>{ele?.comment }</p>
            </div>
          )


        })}

            </div>
      </div>




    </div>

  )
}

export default ProductsDetails