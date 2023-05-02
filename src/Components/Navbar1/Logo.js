import { useRouter } from "next/navigation";
import Image from 'next/image'

const Logo = () => {
  const router = useRouter();
  return ( 
    <Image
      onClick={() => router.push('/')}
      className="cursor-pointer md:block" 
      src="/ImageH/totel.png" 
      height="100" 
      width="100" 
      alt="Logo" 
    />
   );
}
 
export default Logo;