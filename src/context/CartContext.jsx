import { useState, createContext, useEffect } from "react";

export const CartContext = createContext(null);

const ShoppingCart = ({children}) => {
   
    //define emtpy cart, a counter of the elements inside the cart array and a counter for how much of a single item i added to the cart
    const [cart, setCart] = useState([]);
    const [cartItems , setCartItems] = useState(cart.length);
    const [cartTotal, setCartTotal] = useState(0)
    const [quantityCounter, setQuantityCounter] = useState(0);

    const sumTotal = (cart) => {
        let cartAmounts = [];
        cart.map((total)=> {
            cartAmounts.push(total.price * total.quantity)
        })
        const sumWithInitial = cartAmounts.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
        setCartTotal(sumWithInitial)
    }

    useEffect(() => {
        if (cartTotal === 0) {
            console.log('total is 0');
          } else {
            console.log('total is: ' + cartTotal);
          }      
      }, [cartTotal])

    const addItem = (item, quantity, itemId, stock) => {
        setCartTotal(0)
        //filters the cart list getting the cart item that matches the ID, and gives me it's quantity
        const cartItem = cart.filter(item => item.id === itemId);
        //if the item is not already in the cart. 
        if(!isInCart(itemId)){
            //add item provided on the parameter to the cart list
            cart.splice(0,0, {...item, quantity:quantity})
           
            //changes the number of items in the cart and uses the amount of elements on the array
            setCartItems(cart.length)
            setQuantityCounter(quantity + 1)
            sumTotal(cart)
            console.log(cart, 'Added items', 'cantidad de items en el carro: ' + cart.length + 'total: ' + cartTotal)
        }else{

            //if the filtered item's quantity less than the stock we update the quantity of the item to be the same as the quantityCounter
            if(quantityCounter <= stock){
                //we retrieve the filtered item on the cart list and add it's quantity to the overall quantity counter
                setQuantityCounter(quantityCounter + quantity)
                //if the quantity counter for this item is more less than the stock, we update the quantity of the element in the array
                console.log('cantidad counter: ' + quantityCounter)
                //get index
                const cartIndex = cart.findIndex((obj => obj.id === itemId));
                //with the index, locate the quantity parameter and change it
                cart[cartIndex].quantity = quantityCounter;
                sumTotal(cart)
                console.log(cart, 'item is alredy on the cart', 'cantidad de items en el carro: ' + cart.length + ' total: ' + cartTotal)

            }else{
                console.log('already added items in stock')
                console.log(cart, 'cantidad counter: ' + quantityCounter) 
            }
        }
        
    }

    const removeItem = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
        console.log('removed items')
        
    }

    const clear = () => {
        
    }

    const isInCart = (itemId) => {
        const newCart = cart.filter(item => item.id === itemId)
        if(newCart.length === 0){
            return false
        }
         return true
    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, isInCart, removeItem, clear, cartItems, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCart;