/* This example requires Tailwind CSS v2.0+ */ import { masjidContext } from '../pages';import { useContext } from 'react';

export default function Features() {
  const masjidData = useContext(masjidContext);
  return (
    <div id="Kegiatan" className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-lg font-semibold text-[${masjidData.secondaryColor}]`}
          >
            Daftar
          </h2>
          <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Kegiatan Masjid
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
            {masjidData.kegiatan.map((item, index) => (
              <div key={index} className="relative">
                <dt>
                  <div
                    className={`absolute flex h-12 w-12 items-center justify-center rounded-md bg-[${masjidData.secondaryColor}] text-white`}
                  >
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {item.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
