import { FaFacebook, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
const socialData = [];
export default function Footer() {
  return (
    <footer className="h-32 flex items-center w-full absolute bottom-0 bg-white">
      <div className="flex w-full max-w-7xl mx-auto justify-between items-center">
        <div className="flex flex-col items-start">
          <div>
            <Image src="/logo/logoFn.svg" alt="logo" width={24} height={24} />
            <h1 className="text-gray-500 text-1xl">
              Masjid Ar-Rohmah boyolali.
            </h1>
          </div>
          <div>
            <h1 className="text-gray-300">
              &#169; Pondok Informatika, All rights reserved
            </h1>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <FaFacebook size={24} color={'#9CA3AF'} />
          <FaWhatsapp size={24} color={'#9CA3AF'} />
          <FaInstagram size={24} color={'#9CA3AF'} />
          <FaFacebook size={24} color={'#9CA3AF'} />
          <FaWhatsapp size={24} color={'#9CA3AF'} />
          <FaInstagram size={24} color={'#9CA3AF'} />
        </div>
      </div>
    </footer>
  );
}
