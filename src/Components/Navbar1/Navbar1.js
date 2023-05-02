import Logo from "../Navbar1/Logo"
import Search from "./Search";
import styles from './Navbar.module.css'

export default function Navbar1(){

    return(
      //    <Logo> 
      
<div className={`w-full bg-white ${styles.search}`}>
<div className="py-4"> 
    <div className="flex flex-row items-center justify-between gap-2 md:gap-0 ">
      <Logo/>
      <Search/>  
    </div>  
</div>
</div>

    );
}

