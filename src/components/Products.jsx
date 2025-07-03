import React, { useEffect, useState } from 'react'
import getUrl from '../utils/getUrl';
import { FiShoppingCart } from 'react-icons/fi';

const Products = ({addProductToCart}) => {
        const [product, setProduct] = useState([]);
        useEffect(() => {
            getUrl().then(data => {
                setProduct(data)
            }
            )
        }, []);

    return (
        <div>
            <div className=' bg-[#0065F8] container mx-auto  transition-shadow duration-300 flex flex-wrap justify-center items-center gap-4 p-4 sm:p-8  shadow-lg hover:shadow-xl  ease-in-out'>
                {product.map((item) => (



                    <div
                        className="w-80 bg-[#00CAFF]  shadow-md rounded-md sm:w-98 flex flex-col sm:flex-row items-center sm:h-72  sm:justify-center gap-4" key={item.id} >



                        <div className="sm:h-72 bg-white sm:flex-shrink-0 border border-gray-200  rounded-md w-50  " >

                            <img src={`${item.image}`} alt=""
                                className="h-full w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200 " />
                        </div>


                        <div className='sm:block flex flex-col justify-between items-center  w-full sm:w-72 h-full'>

                            <h3 className="text-xl font-semibold hover:text-[#4300FF] mb-3">
                                {item?.title.length > 20 ? `${item.title.slice(0, 20)}...` : item?.title}
                            </h3>

                            <p className="text-gray-600 mb-5 text-center sm:text-left">{item?.description.length > 55 ? `${item.description.slice(0, 55)}...` : item?.description}</p>
                            <p className="font-medium mb-5">
                                ${item?.price}
                            </p>
                            <button
                                onClick={() => addProductToCart(item)}
                                className=" bg-[#00FFDE] flex items-center px-2 py-1 rounded-md gap-5 cursor-pointer hover:scale-105 transition-all duration-200">
                                <FiShoppingCart className=" size-5 btn-cart" />
                                <p className="">Add to Cart</p>
                            </button>
                        </div>

                    </div>


                ))
                }


            </div>
        </div>
    )
}

export default Products