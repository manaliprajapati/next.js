import Link from "next/link";
// import { useEffect } from "react";
// import { useRouter } from "next/router";
function error () {
    // const router = useRouter();
// useEffect(() =>{
//     router.push("/")
// } , [])
    return ( 
        <>
         <nav>
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
         <div className="not found">
            <div className='not found'>
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>We are sorry,page not found!</h2>
                <p>The page you are looking for might have been
                    removed has its name change or is temporarily unavailable.
                </p>
                <Link href="/">Back to Homepage</Link>
            {/* <a onClick={() =>router.push("/")
            }>Back to Homepage</a> */}
            </div>
         </div>
        </>
     );
}

export default error ;