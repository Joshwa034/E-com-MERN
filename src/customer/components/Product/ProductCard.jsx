import React from 'react'
import "./ProductCard.css"
import Product from './Product'
import { Filter } from '@mui/icons-material'

const ProductCard = ({product}) => {
  return (
    <div className='ProductCard w-[15rem] m-3 transition-all cursor-pointer'>
        <div className='h-[20rem] '>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt="" />
        </div>
        <div className='textPart bg-white p-3'>
            <div>
                <p className='font-bold opacity-60'>{product.brand}</p>
                <p>product.title</p>
            </div>
            <div className='flex item-center space-x-2'>
                <p className='font-semibold'>{product.discounted}</p>
                <p className='line-through opacity-50'>{product.price}</p>
                <p className='text-green-600 font-semibold'>{product.discountPersent}</p>
                                
            </div>

        </div>
    </div>
  )
}

export default ProductCard