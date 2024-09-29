import React from 'react'
interface ProductDetail {
    
        id:number;
        title: string;
        price:number;
        category:string;
        description:string;
        image:string;
    }
interface Props {
    id:number;
}
const ProductCard = async (props:Props) => {
 const result:ProductDetail = await   fetch('https://fakestoreapi.com/products/' + props.id)
            .then(res=>res.json());


  return (
    <div>
        <h1>ProductCard</h1>
        <p>{result.title}</p>
        <img srcSet={result.image} className='productImage'></img>
    </div>
  )
}

export default ProductCard