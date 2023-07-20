// import link
import { Link } from "react-router-dom";
// import icons
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
// import cart context
import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

export default function CartItem({item}) {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    // destructyre item
    const { id, title, image, price, amount } = item;
    return (
        <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${id}`}>
                    <img className="max-w-[80px]" src={image} alt="" />
                </Link>
                <div className="w-full flex flex-col">
                    {/* title & remove icon */}
                    <div className="flex justify-between mb-2">
                        {/* title & */}
                        <div>
                            <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-gray-800 hover:underline">{title}</Link>
                        </div>
                            {/* remove icon */}
                        <div onClick={() => removeFromCart(id)}  className="text-xl cursor-pointer">
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition"/>
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* qty */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-gray-800 font-medium">
                            <div onClick={() => decreaseAmount(id)}  className="flex-1 flex justify-center items-center cursor-pointer h-full">
                                <IoMdRemove />
                            </div>
                            <div className="h-full flex justify-center items-center px-2">
                                {amount}
                            </div>
                            <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex justify-center items-center cursor-pointer">
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex-1 flex items-center justify-around">
                            {`$ ${price}`}
                        </div>
                        {/* final price */}
                        <div className="flex-1 flex justify-end items-center text-gray-800 font-medium">
                            {`$ ${parseFloat(item.price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}