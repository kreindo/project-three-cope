import { GetServerSideProps } from 'next';
import Image from 'next/image';
import SantriCard from '../../components/Admin/SantriCard/Index';
import { useState } from 'react';
import { prisma } from '../../lib/prisma';
import { useRouter } from 'next/router';

interface SantriType {
  santri: {
    id: string;
    name: string;
    motto: string;
    emoji: string;
  }[];
}

interface FormData {
  name: string;
  motto: string;
  id: string;
  emoji: string;
}

const Index = ({ santri }: SantriType) => {
  const [form, setForm] = useState<FormData>({
    name: '',
    motto: '',
    id: '',
    emoji: '',
  });
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };
  const dummyData = [
    {
      name: 'ahmadsan',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '1',
      emoji: '💻',
    },
    {
      name: 'nasdamha',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '2',
      emoji: '💾',
    },
    {
      name: 'kreindo',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '3',
      emoji: '😎',
    },
    {
      name: 'krnd',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '4',
      emoji: '🐱‍👓',
    },
    {
      name: 'asdww',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '5',
      emoji: '😴',
    },
    {
      name: 'dsaaaa',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '6',
      emoji: '🤯',
    },
    {
      name: 'lokkki',
      motto:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, soluta.',
      id: '7',
      emoji: '👨‍💻',
    },
  ];

  async function create(data: FormData) {
    try {
      fetch('http://localhost:3000/api/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then(() => {
        setForm({ name: '', motto: '', id: '', emoji: '' });
        refreshData();
      });
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (data: FormData) => {
    try {
      create(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10 flex justify-center items-start gap-5 p-10 mx-auto">
      <div className="flex justify-center items-center flex-col max-w-4xl min-w-max bg-gray-900 border border-gray-800 p-10 rounded-md">
        <div className="relative flex justify-center items-center rounded-full w-[104px] h-[104px] bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 ">
          <div className="relative rounded-full w-24 h-24">
            <Image
              className="rounded-full"
              src={'https://github.com/kreindo.png'}
              layout={'fill'}
              objectFit={'contain'}
              alt="profile"
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold my-5">Data input</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(form);
          }}
          className="w-auto min-w-[25%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="nama santri"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <textarea
            placeholder="motto"
            value={form.motto}
            onChange={(e) => setForm({ ...form, motto: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <input
            type="text"
            placeholder="emoji"
            value={form.emoji}
            onChange={(e) => setForm({ ...form, emoji: e.target.value })}
            className="border-2 rounded border-gray-600 p-1"
          />
          <button
            type="submit"
            className="bg-gradient-to-tl from-red-500 to-yellow-500 text-white rounded p-1"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center items-center flex-col max-w-screen min-w-[1000px] bg-gray-900 border border-gray-800 p-10 rounded-md">
          <h1 className="text-2xl font-bold text-white">Database</h1>
        </div>
        {santri.map(({ name, motto, id, emoji }, index) => {
          return (
            <SantriCard
              name={name}
              motto={motto}
              key={Number(id)}
              randomImageKey={Number(index)}
              emoji={emoji}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const santri = await prisma.santri.findMany({
    select: {
      name: true,
      motto: true,
      id: true,
      emoji: true,
    },
  });

  return {
    props: {
      santri,
    },
  };
};
