import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
           <div className='logo'>
               <Image src="/image3.png" width={150} height={120}/>
           </div>
           <Link href="/"><a>Home</a></Link>
           <Link href="/about"><a>About</a></Link>
           <Link href="/world"><a>World Listing</a></Link>
         
        </nav>
     );
}
 
export default Navbar;