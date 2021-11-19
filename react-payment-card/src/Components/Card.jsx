import CardComponent from "./CardComponent";

const Card = () =>{
return <>
    <CardComponent date = "28/10/2020" logo="https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg" className="firstCard" name="Amazon Gift" Coupon = "Pay" desktop="Desktop - Mobile" c2="bigFont"/>
    <CardComponent date = "17 Sep 2020" logo="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" className="secCard" name="Apple Gift" Coupon = "Payment" desktop="MacOS - Mobile"c2="bigFont"/>
</>
}

export default Card;