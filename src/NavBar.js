  import IMAGES from "./Images";
import images from "./Images";
import "./Nav.css";
  
  const Navbar=()=>{



 return(
    <div className="Navbar">
      <img src={IMAGES.fingo}  className="logo"/>
      <img src={IMAGES.aboutus}   /><div className="Nav-heading">About us</div>
      <img src={images.contactus}/><div className="Nav-heading">Blog</div>
      <img src={IMAGES.blog}/><div className="Nav-heading">Contact us</div>
      <img src={IMAGES.blog}/><div className="Nav-heading">Refferals</div>
    </div>
 )
}







export default Navbar;