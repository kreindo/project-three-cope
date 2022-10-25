import {  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaGithub,
} from 'react-icons/fa';
import Image from 'next/image';
import { IconContext } from 'react-icons/lib';
import { useContext } from 'react';
import { masjidContext } from '../pages';
const socialData = [];

export default function Footer() {
  const masjidData = useContext(masjidContext);
  return (
    <footer className="h-32 flex items-center px-10 mx-auto w-full absolute bottom-0 bg-white">
      <div className="flex flex-col sm:flex-row gap-0 sm:gap-10 w-full max-w-screen-xl mx-auto justify-between items-center">
        <div className="flex flex-col items-center sm:items-start">
          <div>
            <Image
              src={
                masjidData.logo === true
                  ? '/logo/logoFn.svg'
                  : '/logo/logoPlaceholder.svg'
              }
              alt="logo"
              width={24}
              height={24}
              className="saturate-0 brightness-0"
            />
            <h1 className="text-gray-500 text-1xl">{`Masjid ${masjidData.name}`}</h1>
          </div>
          <div>
            <h1 className="text-gray-300 ">
              &#169;
              <span className="hover:text-gray-400 transition-all cursor-pointer">
                <a href="https://pondokinformatika.id">Pondok Informatika</a>
              </span>
              , All rights reserved
            </h1>
          </div>
        </div>
        <IconContext.Provider value={{ color: '#9CA3AF', size: '24' }}>
          <div className="flex gap-5 items-center">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaGithub />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </footer>
  );
}
