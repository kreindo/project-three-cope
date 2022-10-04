import React from 'react';import { GetServerSideProps, GetStaticProps } from 'next';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';

export interface Final {
  final: string;
}

const Contact = ({ final }: Final): JSX.Element => {
  return (
    <div className="p-10 flex flex-col gap-5 max-w-screen-xl m-auto border-2 border-red-500">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full ">
        <div className="p-10 flex text-2xl justify-start items-start w-full border-2 gap-5 bg-secondary border-blue-500 text-white">
          <FaWhatsapp size={47} className="w-fit border-2 border-green-500" />
          <div className="border-2 border-yellow-500">
            <h1 className="text-white text-2xl font-bold">No.Telp</h1>
            <h1 className="text-white brightness-90 text-lg font-medium">
              +62811466132
            </h1>
          </div>
        </div>
        <div className="p-10 flex text-2xl justify-start items-start w-full border-2 gap-5 bg-secondary border-blue-500 text-white">
          <FiMail size={47} className="w-fit border-2 border-green-500" />
          <div className="border-2 border-yellow-500">
            <h1 className="text-white text-2xl font-bold">Email</h1>
            <h1 className="text-white brightness-90 text-lg font-medium">
              johndoe@gmail.com
            </h1>
          </div>
        </div>
        <div className="p-10 flex text-2xl justify-start items-start w-full border-2 gap-5 bg-secondary border-blue-500 text-white">
          <FiMapPin size={47} className="w-14 border-2 border-green-500" />
          <div className="border-2 border-yellow-500">
            <h1 className="text-white text-2xl font-bold">Alamat</h1>
            <h1 className="text-white brightness-90 text-lg font-medium">
              {' '}
              kp gempol desa sukarahayu, tamelang, bekasi
            </h1>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-gray-700 text-3xl font-bold">hello world</h1>
        <div className="border-2 border-red-500">{final}</div>
        <div>
          <h1 className="text-2xl text-gray-700 font-bold">Maps</h1>
          <iframe src="" frameBorder="0"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  const final = JSON.stringify(data);
  console.log(final);
  return {
    props: { final },
  };
}
