

import React from 'react';

type TitleProps = {
    name: string;
    bgClass?: string; // Optional prop for background image class
    height?: string; // Optional prop for height
    width?: string; // Optional prop for width
};

export default function LargeButton({ name, bgClass = 'bg-red-600', height = 'h-14', width = 'w-48' }: TitleProps) {
    return (
        <button 
            type="submit" 
            className={`${bgClass} ${height} ${width} rounded-md text-white text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
        >
            {name}
        </button>
    );
}


// usage....................

// <LargeButton name="Submit" bgClass="bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }} />


// or you ca use direct style prop 

// import React from 'react';

// type TitleProps = {
//     name: string;
//     style?: React.CSSProperties; // Optional prop for inline styles
//     height?: string; // Optional prop for height
//     width?: string; // Optional prop for width
// };

// export default function LargeButton({ name, style, height = 'h-14', width = 'w-48' }: TitleProps) {
//     return (
//         <button 
//             type="submit" 
//             className={`${height} ${width} rounded-md text-white text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
//             style={style} // Apply the style prop here
//         >
//             {name}
//         </button>
//     );
// }
// 
// usage with inline style
{/* <LargeButton 
    name="Submit" 
    style={{ backgroundImage: "url('/path/to/your/image.jpg')", backgroundSize: 'cover' }} 
    height="h-16" 
    width="w-56" 
/> */}


