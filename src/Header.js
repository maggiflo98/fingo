import IMAGES from "./Images";
import "./header.css";

const Header=()=>{
 return(
    
    <div className="screens">
     <h3 className="screen-heading">Youth focused <span className="banking">banking</span> powered by<img src={IMAGES.bank} className="header-image"/>powered by</h3>
     <h2 className="header-scanner">download fingo app<img src={IMAGES.scann}/></h2>
     <img src={IMAGES.Screen}/>
    
    </div>
 )

}

export default Header;




