import Image from 'next/image';
interface propType {
  name: string;
  motto: string;
  key: number;
  randomImageKey: number;
  emoji: string;
}
const SantriCard = ({ name, motto, key, randomImageKey, emoji }: propType) => {
  const picsum: string = `https://picsum.photos/300/300?random=${randomImageKey}`;
  return (
    <div
      key={key}
      className="flex justify-center items-start flex-col max-w-screen min-w-[1000px] bg-gray-900 border border-gray-800 p-10 rounded-md"
    >
      <div className="flex gap-60 justify-between items-center">
        <div className="flex gap-5 justify-center items-center">
          <div className="relative w-20 h-20 rounded-full">
            <Image
              className="rounded-full"
              src={picsum}
              alt="potrait"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-2xl font-semibold">{name || 'Foo Bar'}</h1>
            </div>
            <div>
              <p>
                {motto ||
                  'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, dicta! '}
              </p>
            </div>
          </div>
        </div>
        <div className="text-2xl">{emoji || '🟢'}</div>
      </div>
    </div>
  );
};

export default SantriCard;
