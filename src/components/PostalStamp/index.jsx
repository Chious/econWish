import "./index.css"
import postalStamp from "./stamps.jsx"

/* 
const stampl = {
    left: "-10px",
    bottom: "-50px",
    transform: "rotate(-45deg)"
}
<PostalStamp variant = {2} stampleLocation = {stampl}/>

*/
export default function PostalStamp(){
    
    return (
        <div className="seal">

            <div className="seal-icon"><img class="seal-color" src={postalStamp[2]} /></div>
          </div>
    )
}