import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './Head.css'
function Head(){
  return(
    <div className="top">
      <div className="left_top">
      <IoLocationOutline />
      <div><p>Murang'a</p></div>
      <div><a href=""><MdOutlineMailOutline /></a></div>
      <div><a href="">world food granary</a></div>
      <div><a href=""><FaPhoneAlt /></a></div>
      <div><p>+254722588571</p></div>
      </div>
      <div className="right_top">
      <div><a href=""><FaXTwitter /></a></div>
      <div><a href=""></a><FaFacebookF /></div>
      </div>
      
    </div>
  )
}
export default Head;