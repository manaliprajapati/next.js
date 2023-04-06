import Navbar from "@/components/Navbar";
import Image from "next/image";
function contact() {
    return ( 
        <>
        <Navbar />
        <h2 style={{color:"green", textAlign:"center"}}>welcome to contact page</h2>
        {/* <style jsx>{`
        h1{
            background-color:pink
        }
        `}</style> */}
        <Image src="/demo.png" width="500" height="300" alt="demo"></Image>
        </>
     );
}

export default contact;