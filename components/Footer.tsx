import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="h-32 flex items-center w-full absolute bottom-0 border-8 border-red-500 bg-slate-300">
      <div className="flex w-full max-w-7xl mx-auto justify-between items-center">
        <div className="bg-green-200 flex flex-col items-start">
          <div>
            <Image src="/logo/logoFn.svg" alt="logo" width={24} height={24} />
            <h1 className="text-gray-500 text-1xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </h1>
          </div>
          <div> &#169; Pondok Informatika, All rights reserved</div>
        </div>
        <div className="flex space-between items-center">
          <FaFacebook size={24} />
          <FaWhatsapp size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
    </footer>
  );
}
