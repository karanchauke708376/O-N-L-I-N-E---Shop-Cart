import React from "react";
import { toast } from 'react-hot-toast'
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";



const CartItem = ({item , itemIndex}) => {
    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.success("Item Removed!");
        
    }

    return (
        <div className="flex">

            <div className="flex items-center gap-4 p-7 mt-10 ml-5 w-[600px] rounded-md border outline  ">

                <div className="h-[150px] w-[250px]">
                    <img src= {item.image} alt="img" className="h-full w-full" />
                </div>

               
                
                <div>
                    <h1> {item.title} </h1>
                    <h1 className=" text-gray-400 font-normal text-[13px] text-left"> {item.description.split(" ").slice(0, 25).join(" ") + " . . ."} </h1>
                    <div className="flex items-end justify-between">
                        <p className="text-green-600 font-semibold px-2 p-3 ">${item.price}</p>
                        <div onClick={removeFromCart} className="">
                             <MdDelete className="bg-red-400 rounded-full w-7 h-7   " />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default CartItem;