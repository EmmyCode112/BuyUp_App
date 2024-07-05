import React from 'react'
import { products } from '../../../assets/assets'
import ProductDisplay from './ProductDisplay'
import './Products.css'

const Products = () => {
  return (
    <section id='products'>
      <h5 className='text-[tomato] my-5 text-[15px] '>Products</h5>
        <div className="grid-con grid grid-cols gap-[40px]">
            {products.map((items, index) =>(
                <ProductDisplay
                key={index}
                price={items.price}
                imgURL={items.imgURL}
                id={items.id}
                btn1={items.btn1}
                btn2={items.btn2}
                details={items.details}
                />
            ))}
        </div>
        <div className='text-center mt-[50px]'>
        <button className="text-[20px] hover hover:bg-[#a31d05] border-2 border-[#a31d05]  bg-transparent  p-3 px-5 mt-1">View more</button>
        </div>
    </section>
  )
}

export default Products
