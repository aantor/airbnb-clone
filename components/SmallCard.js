import Image from 'next/image';
const SmallCard = ({ img, distance, location }) => {
  return (
    <div className='flex items-center gap-4 rounded-xl mt-5 cursor-pointer hover:bg-gray-100 hover:scale-105 transition duration-200 ease-out w-[calc(100%-3rem)]'>
      <div className='relative h-16 w-16'>
        <Image className='rounded-lg' src={img} layout='fill' />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className='text-gray-500'>{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
