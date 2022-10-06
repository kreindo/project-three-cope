/* This example requires Tailwind CSS v2.0+ */ import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { masjidContext } from '../pages';
import { useContext } from 'react';

const navigation: {
  name: string;
  href: string;
}[] = [
  { name: 'Home', href: '#' },
  { name: 'Kegiatan', href: '#Kegiatan' },
  { name: 'Kontak', href: '#Kontak' },
];

export default function Hero(): JSX.Element {
  const masjidData = useContext(masjidContext);

  return (
    <div className="relative overflow-hidden lg:bg-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 lg:bg-slate-800 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-slate-800 lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <a href="#">
                      <span className="sr-only">Your Company</span>
                      <div className="relative w-8 h-8 sm:h-10">
                        <Image
                          alt="Your Company"
                          src="/logo/logoFn.svg"
                          layout="fill"
                          objectFit="fill"
                        />
                      </div>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button
                        className={`inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[${masjidData.primaryColor}]`}
                      >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="font-medium text-gray-300 hover:text-gray-200"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#"
                    className={`font-medium text-[${masjidData.primaryColor}] hover:text-[${masjidData.primaryColor}]`}
                  >
                    Maps
                  </a>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <Image
                        className="h-8 w-auto saturate-0 brightness-0"
                        src="/logo/logoFn.svg"
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button
                        className={`inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[${masjidData.primaryColor}]`}
                      >
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <a
                    href="#"
                    className={`block w-full bg-gray-50 px-5 py-3 text-center font-medium text-[${masjidData.primaryColor}] hover:bg-gray-100`}
                  >
                    Maps
                  </a>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  {`Masjid ${masjidData.name}`}
                </span>{' '}
                <span
                  className={`block text-[${masjidData.primaryColor}] xl:inline`}
                >
                  Landing Page
                </span>
              </h1>
              <p className="mt-3 text-base text-white lg:text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                {`${masjidData.desc}`}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className={`flex w-full items-center justify-center rounded-md border border-transparent bg-[${masjidData.primaryColor}] px-8 py-3 text-base font-medium text-slate-800 hover:bg-[${masjidData.primaryColor}] md:py-4 md:px-10 md:text-lg`}
                  >
                    Google Maps
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-100 px-8 py-3 text-base font-medium text-orange-500 hover:bg-orange-200 md:py-4 md:px-10 md:text-lg"
                  >
                    Hubungi kami
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full brightness-50 lg:brightness-100 "
          src="https://images.unsplash.com/photo-1574182818416-608c6c9814e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="hero image"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
