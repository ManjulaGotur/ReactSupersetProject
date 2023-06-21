
import React from 'react'
import { Link } from 'react-router-dom'
import './topproduct.css'

const popularProducts = [
	{
		id: '3432',
		product_name: 'Meeting with suppliers from Kuta Bali',
		Time :'14.00-15.00',
		Discript: 'at Sunset Road ,kuta,Bali',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Check operation at Giga factory 1',
		Time :'18.00-20.00',
		Discript: 'at central jakarta',
		product_stock: 24
	}
]

function PopularProducts() {
	return (
		<div className=" pp-product w-[40rem] h-[20rem] bg-white p-4 rounded-5 border border-gray-200">
			<strong className="text-gray-700 font-medium">Today's schedule</strong>
			<div className="mt-4 flex flex-col gap-3">
				{popularProducts.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline">
							<div class="d-flex" style={{height:70,width:5,backgroundColor:"green"}}>
							<div class="vr"></div>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.product_name}</p>
							<p className="text-sm text-gray-800">{product.Time}</p>
							<p className="text-sm text-gray-800">{product.Discript}</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default PopularProducts
