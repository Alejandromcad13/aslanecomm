import { useState, createContext } from "react";

export const CartContext = createContext(null);

const ShoppingCart = ({children}) => {
   
    //define empty cart, a counter of the elements inside the cart array and a counter for how much of a single item i added to the cart
    const [cart, setCart] = useState([]);
    const [cartItems , setCartItems] = useState(0);
    const [cartTotal, setCartTotal] = useState(0)
    const [quantityCounter, setQuantityCounter] = useState(0);


    //function to sum the total of the order by mapping through the array then creating a 
    //new array with the amounts and then reducing it to get a single value
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
    //function to sum the total of the order by mapping through the array then creating a 
    //new array with the amounts and then reducing it to get a single value
    const sumQuantity = (cart) => {
        let cartQuantity = [];
        cart.map((total)=> {
            cartQuantity.push(total.quantity)
        })
        const sumWithInitial = cartQuantity.reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          );
        setCartItems(sumWithInitial)
    }

    //Function to add the item to the cart. 
    const addItem = (item, quantity, itemId, stock) => {
        setCartTotal(0)
        //if the item is not already in the cart. 
        if(!isInCart(itemId)){
            //add item provided on the parameter to the cart list
            cart.splice(0,0, {...item, quantity:quantity})
           
            //changes the number of items in the cart and uses the amount of elements on the array
            setCartItems(cart.length)
            setQuantityCounter(quantity + quantity)
            sumTotal(cart)
            sumQuantity(cart)
            
        }else{

            //if the filtered item's quantity less than the stock we update the quantity of the item to be the same as the quantityCounter
            if(quantityCounter <= stock){
                setCartTotal(0)
                //we retrieve the filtered item on the cart list and add it's quantity to the overall quantity counter
                setQuantityCounter(quantityCounter + quantity)
                //if the quantity counter for this item is more less than the stock, we update the quantity of the element in the array
                //get index
                const cartIndex = cart.findIndex((obj => obj.id === itemId));
                //with the index, locate the quantity parameter and change it
                cart[cartIndex].quantity = quantityCounter;
                sumTotal(cart)
                sumQuantity(cart)
                
            }else{
                alert('You already added the max items in stock!')
                sumTotal(cart)
                sumQuantity(cart)
            }
        }
        
    }

    //Function to remove items from the cart it filters the array by items no having the same if and returns a new array with the contents
    const removeItem = (itemId) => {
        setCartTotal(0)
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
        sumTotal(newCart)
        sumQuantity(newCart)
        
    }
     //function to reset the cart
    const clear = () => {
        setCart([])
        setCartTotal(0)
        sumQuantity(0)
    }

    //check if the cart has the item we are trying to add
    const isInCart = (itemId) => {

        const newCart = cart.filter(item => item.id === itemId)
        if(newCart.length === 0){
            return false
        }
         return true
    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, isInCart, removeItem, cartItems, cartTotal, setCartTotal, clear, sumQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCart;