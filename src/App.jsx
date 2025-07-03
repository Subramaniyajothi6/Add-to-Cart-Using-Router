import { createBrowserRouter, RouterProvider } from "react-router"
import Home from "./pages/Home"
import Cart from "./components/Cart"
import { useState } from "react";
import Swal from "sweetalert2";





const App = () => {


  const [cart, setCart] = useState([]);
  const addProductToCart = (item) => {



    // Check if the item is already in the cart
    if ((cart.find(i => i.id === item.id))) {
      Swal.fire({
        title: "Product already in cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Add Product Again?"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Product added!",
            icon: "success"
          });
      setCart(cart.map(i => i.id == item.id ? { ...i, 'quantity': i.quantity + 1 } : i));
        }
      });

      


      return;
    }

    setCart(cart => [...cart, { ...item, quantity: 1 }]);
    Swal.fire({
      title: "Item added to cart!",
      icon: "success",
      draggable: false,
    });




  }

  const routes = [
    {
      path: '/',
      element: <Home cart={cart} setCart={setCart} addProductToCart={addProductToCart} />,
    },
    {
      path: '/cart',
      element: <Cart cart={cart} setCart={setCart} />
    }
  ]
  const router = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    }

  })

  return (
    <RouterProvider router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  )
}

export default App