import React,{useState,useEffect} from 'react'

function Products() {

    const[productList,setProductList]=useState([])


    useEffect(()=>{
        const fetchProducts=async()=>{
            const res =await fetch('https://fakestoreapi.com/products')

            const data:any=await res.json()
            console.log(data);
            
        }

    },[]);
  return (
    <div>Products</div>
  )
}

export default Products