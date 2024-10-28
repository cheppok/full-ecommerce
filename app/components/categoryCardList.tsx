import React from 'react';
import Image from 'next/image';
import Link from 'next/link'



type CategoryCardProps = {
    imageSrc: string;
    title: string;
};


const categories = [
    { imageSrc: '/images/Category-CellPhone.png', title: 'Phones' },
    { imageSrc: '/images/Category-Computer.png', title: 'Computer' },
    { imageSrc: '/images/Category-SmartWatch.png', title: 'Smartwatch' },
    { imageSrc: '/images/Category-Camera.png', title: 'Camera' },
    { imageSrc: '/images/Category-Gamepad.png', title: 'Gaming' },
    { imageSrc: '/images/Category-Headphone.png', title: 'Headphone' },
];

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title }) => {
    return (
        <div className="flex flex-col justify-center items-center h-40 w-44 border-2 rounded-md border-gray-200 transition duration-300 ease-in-out hover:bg-red-500 hover">
           <Link href={'#'}>
                <Image src={imageSrc} width={50} height={50} alt={title} />
                <h3 className="mt-2 text-center">{title}</h3>
           </Link>
        
           
          
        </div>
    );
};


const CategoryCardList = () => {
    return (
        <div className='flex space-x-6 border-b-2 border-gray-200 pb-16 w-11/12 overflow-hidden'>
            {categories.map((category, index) => (
                <CategoryCard key={index} imageSrc={category.imageSrc} title={category.title} />
            ))}
        </div>
    );
};

export default CategoryCardList;
