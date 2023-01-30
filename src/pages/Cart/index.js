import { useSelector } from "react-redux";
export default function Cart(){
    let noOfCakes=useSelector((state)=>state.cake.noOfOrderedcakes);
    let noOfIcecreams=useSelector((state)=>state.icecream.noOfOrderedicecreams);
    let noOfGifts=useSelector((state)=>state.gift.noOfOrderedgifts);
    let noOfFlowers=useSelector((state)=>state.flower.noOfOrderedflowers); 
    return (
        <>
        <h2>ORDERS MADE</h2>
        <h5>ORDER CAKES={noOfCakes}</h5>
        <h5>ORDER ICECREAMS={noOfIcecreams}</h5>
        <h5>ORDER GIFTS={noOfGifts}</h5>
        <h5>ORDER FLOWERS={noOfFlowers}</h5>
        </>
    )
}