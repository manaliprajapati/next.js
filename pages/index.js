// import Link from 'next/link'
import Header from "@/components/Header";
import Navbar from "../components/Navbar";
import Head from "next/head";
function index() {
  return ( 
    <>
   <div>
    <Head>
      <title>Home page</title>
    </Head>
<Navbar />
<Header />
    </div>
     
      </>
   );
}

export default index;