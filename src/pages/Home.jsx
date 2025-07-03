import { FiShoppingCart } from 'react-icons/fi';
import Products from '../components/Products';
import { useNavigate } from 'react-router';
// import Swal from 'sweetalert2';

const Home = (props) => {

  const { cart } = props;
  // const { setCart } = props;

  const { addProductToCart } = props;


    // const addProductToCart = (item) => {
    //   setCart([...cart, item]);
    // };




  
  const navigate = useNavigate();

    const toggleCartVisibility = () => {
      
      navigate('/cart');

    

  }



    return (

            <div className="bg-[#4300FF] min-h-screen">
      <div className='container mx-auto flex justify-between items-center p-4 bg-[#00CAFF] shadow-md'>
        <h1 className="text-3xl font-bold text-center my-8">Product List</h1>
        <button className='flex items-center gap-2 bg-[#00FFDE] py-1 px-2 rounded' onClick={toggleCartVisibility}>  <FiShoppingCart className=" size-5 btn-cart " /> {cart.length} </button>

      </div>

      <Products addProductToCart={addProductToCart} />
    </div>
        
        
        
    )
}

export default Home