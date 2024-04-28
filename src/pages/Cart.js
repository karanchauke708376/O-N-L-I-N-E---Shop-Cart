import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart} = useSelector((state) => state);
    console.log("Printing Cart . . .");
    console.log(cart);
    const [totalAmount , setTotalAmount] = useState(0);

    useEffect( () => {
        setTotalAmount( cart.reduce( (acc , curr) => acc + curr.price , 0 ));
        
    } , [cart])

    return ( 
        <div className="overflow-hidden">
            {
                cart.length > 0 ? 

                (<div className="flex items-start">
                    <div>
                        {
                            cart.map( (item , index) => {
                                return <CartItem key = {item.id} item = {item} itemIndex = {index} />
                            })
                        }
                    </div>
                    

                    <div className="flex flex-col py-9 px-14 ">
                        <div className="text-green-600 font-semibold  text-[25px] "> Your Cart </div>
                        <div className="text-green-600 font-semibold text-[40px] "> Summary </div>
                        <p className="flex">
                            <span className="font-semibold text-[20px]"> Total Items : {cart.length}  </span>
                        </p>
                    </div>

                    <div className="">
                        <p className="font-semibold text-[20px] py-56 pr-73"> Total Amount : ${totalAmount} </p>
                        <button className="text-white font-bold bg-green-900 rounded-md h-[40px] w-[300px] ">
                            Checkout Now
                        </button>
                    </div>

                </div>) : 

                ( <div>
                    <p> Your Cart Is Empty! </p> 
                    <Link to = {"/"} > <button> Shop Now </button> </Link>

                </div> ) 
            }



        </div>
    )
}

export default Cart