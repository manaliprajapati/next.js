import Link from "next/link";
function Navbar() {
    return ( 
        <>
         <nav style={{textAlign:"center"}}>
      <ul className='menu-bar'>
        <Link href='/'>
          Home
          </Link>
        <Link href='/about'>About</Link>
        <Link href='/contact'>Contact</Link>
        <Link href='/blog'>Blog</Link>
        <Link href='/product'>Product</Link>

      </ul>
      </nav>
        </>
     );
}

export default Navbar;