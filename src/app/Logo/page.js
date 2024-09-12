import React from 'react'
import Image from "next/image";
import Logo from "../../assets/name-logo-white.svg";

const page = () => {
  return (
    <div>
         <Image src={Logo} className="text-blue-900" alt="logo" width={50} height={50} />
    </div>
  )
}

export default page