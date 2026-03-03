import React from "react";
import { IoHomeOutline } from "react-icons/io5";   
import { GiHamburger } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import AUTUMN from "../../assets/autumn.jpg"

const Icons_Implementation =() =>{
    
    return(
        <div>
        {/*   Icons_Implementation */}
            <h1><IoHomeOutline size={70} color='red' fill='green'/></h1>
            <br />
            <h1>
                <GiHamburger size={100} color="red" />
            </h1>

            <h1><GiFullPizza size={100} color="yellow" /></h1>

            <img src={AUTUMN} alt=""  width={300}/>
        </div>
        
    )
}

export default  Icons_Implementation