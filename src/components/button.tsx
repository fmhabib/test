import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

interface Props {
    text: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="w-full md:w-[143px] h-[50px] text-white max-sm:text-base text-md bg-[#00ADEE] max-md:my-6 px-4 py-2 flex justify-center items-center gap-2 rounded-full"
        >
            {text}<FaArrowRightLong className="text-lg" />
        </button>
    );
};

export default Button;