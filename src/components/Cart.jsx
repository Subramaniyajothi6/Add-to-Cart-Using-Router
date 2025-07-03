import { useNavigate } from "react-router";

const Cart = (props) => {

  const { cart, setCart } = props;
  const navigate = useNavigate();

  const removeItem = (item) => {
    const newCart = cart.filter(i => i.id !== item.id);
    setCart(newCart);
  }



  return (
    <div className="bg-[#4300FF] py-4 px-4  min-h-screen">
      <div id="cart-container" className=' container mx-auto bg-[#00CAFF] pb-5  rounded-md   ' onClick={(e) => e.stopPropagation()}>

        <h2 className="text-2xl font-bold text-center py-4">Shopping Cart</h2>

        {cart.map((i) => {
          // console.log(i);

          return (


            <div key={i.id} className="  flex  items-center  justify-between p-3  transition-shadow duration-300">

              <div className="flex items-center flex-col sm:flex-row  bg-[#00FFDE] gap-4 w-full hover:shadow-lg shadow-md justify-between p-2 rounded-md ">
                <div className="flex items-center flex-col sm:flex-row justify-center">
                  <img className="w-20 h-25 object-cover mr-4" src={i.image} alt={i.title} />
                  <div className="flex flex-col items-center sm:items-start">
                    <h3 className="text-lg font-semibold text-center sm:text-left">{i.title}</h3>
                    <p className="text-gray-600">${i.price}</p>
                  </div>


                </div>

                <div className="flex items-center  gap-5 sm:gap-2 ">
                  <div className="flex  gap-2 flex-col">

                    <div>
                      <p className="text-black text-md font-medium">Quantity : <span className="font-normal">{i.quantity}</span> </p>
                    </div>
                    <div>
                      <p className="text-black text-md font-medium">amount: $ <span className="font-normal">{(i.price * i.quantity).toFixed(2)}</span></p>
                    </div>

                  </div>


                  <div className="flex flex-col  sm:flex-row items-center gap-2">
                    <button className=" bg-[#4300FF] text-white px-2 py-0.5  text-xl rounded-full hover:bg-[#4400ff7e] button"
                      onClick={() => (setCart(cart.map(item => item.id == i.id ? { ...i, "quantity": i.quantity + 1 } : item)))}>+</button>
                    <button className=" bg-[#4300FF] text-white px-2.5   text-2xl rounded-full hover:bg-[#4400ff7e] button"
                      onClick={() => {
                        if (i.quantity > 1) { (setCart(cart.map(item => item.id == i.id ? { ...i, "quantity": i.quantity - 1 } : item))) }
                        else {
                          removeItem(i)

                        }
                      }
                      } >-</button>
                  </div>


                  <button className=" bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 button " onClick={() => removeItem(i)}>
                    Remove
                  </button>

                </div>


              </div>

            </div>


          )
        })}
        <div className=" container mx-auto flex items-end pr-4 flex-col">
          <div>
             <p className="text-lg font-semibold"> Price : ${cart.reduce((acc, i) => acc + i.price * i.quantity, 0).toFixed(2)}</p>
          <p className="text-lg font-semibold">Discount : ${ (cart.reduce((acc, i) => acc + i.price * i.quantity, 0)*0.1).toFixed(2)}</p>
          <p className="text-lg font-semibold">total price : ${(cart.reduce((acc, i) => acc + i.price * i.quantity, 0)*0.9).toFixed(2)}</p>
        
          </div>
         </div>
      </div>
      <div> 

        <div className=" container mx-auto flex justify-end px-2 gap-10">
          <button className="bg-[#00FFDE] text-lg font-semibold mt-4 p-2 rounded-md hover:bg-[#00CAFF] transition-colors duration-300">
            Checkout
          </button>
          <button className="bg-[#00FFDE] text-lg font-semibold mt-4 p-2 rounded-md hover:bg-[#00CAFF] transition-colors duration-300" onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>

      </div>

    </div>
  )
}

export default Cart