import React from 'react';import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';
const Contact = (): JSX.Element => {
  return (
    <div className="p-10 max-w-screen-xl m-auto border-2 border-red-500">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full gap- ">
        <div className="p-10 flex text-2xl justify-start items-start w-full border-2 gap-1 bg-secondary border-blue-500 text-white">
          <FaWhatsapp size={32} className="w-full" />
          <div>
            <h1 className="text-white text-2xl font-bold">Foo</h1>
            <h1 className="text-white text-1xl">+62811466132</h1>
          </div>
        </div>
        <div className="p-10 flex text-2xl items-start w-full border-2 gap-1 bg-secondary border-blue-500 text-white">
          <FiMail size={32} className="w-full" />
          <div>
            <h1 className="text-white text-2xl font-bold">Foo</h1>
            <h1 className="text-white text-1xl">johndoe@gmail.com</h1>
          </div>
        </div>
        <div className="p-10 flex text-2xl items-start w-full border-2 gap-1 bg-secondary border-blue-500 text-white">
          <FiMapPin size={32} className="w-full" />
          <div>
            <h1 className="text-white text-2xl font-bold">Foo</h1>
            <h1 className="text-white text-1xl">
              {' '}
              kp gempol desa sukarahayu, tamelang, bekasi
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
