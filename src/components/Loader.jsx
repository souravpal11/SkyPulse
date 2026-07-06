import Lottie from "lottie-react";
import location from "../assets/lottie/location.json";

const Loader = () => {

return(

<div className="text-center mt-5">

<Lottie

animationData={location}

style={{

width:220,

height:220,

margin:"auto"

}}

/>

<h3>Finding your location...</h3>

<p>Please wait...</p>

</div>

)

}

export default Loader;