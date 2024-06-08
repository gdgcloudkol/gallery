import React from "react";

const Loader = ({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  );
};

export default Loader;
