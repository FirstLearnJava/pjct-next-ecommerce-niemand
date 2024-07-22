import Link from 'next/link';

export default function ShopNowButton() {
  return (
    <div className=" w-[140px] md:mt-8 mt-4 mb-10">
      <Link
        href="/products"
        className="justify-center items-center flex flex-col group"
      >
        <button className="font-oleo text-[18px] flex uppercase justify-center items-center gap-3  transition duration-200 md:group-hover:text-[19px] md:group-hover:gap-2">
          <div className="">Shop Now</div>
          <svg
            width="24"
            height="15"
            viewBox="0 0 24 15"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-1 transition duration-100 text-secondary md:group-hover:text-orange-700  md:group-hover:scale-110 "
          >
            <path
              d="M18.7495 8.33335H5.25052C4.83055 8.33335 4.50058 7.96669 4.50058 7.50002C4.50058 7.03335 4.83055 6.66669 5.25052 6.66669H18.7495C19.1694 6.66669 19.4994 7.03335 19.4994 7.50002C19.4994 7.96669 19.1694 8.33335 18.7495 8.33335Z"
              fill="#currentColor"
            />
            <path
              d="M14.9998 14.1667C14.9014 14.168 14.8039 14.1464 14.7135 14.1034C14.6231 14.0603 14.5418 13.9967 14.4748 13.9167C14.1748 13.5833 14.1748 13.0667 14.4748 12.7333L19.1994 7.48332L14.4748 2.23332C14.1748 1.89999 14.1748 1.38332 14.4748 1.04999C14.7748 0.716654 15.2398 0.716654 15.5397 1.04999L20.7893 6.88332C21.0893 7.21666 21.0893 7.73332 20.7893 8.06666L15.5397 13.9C15.3897 14.0667 15.1948 14.15 15.0148 14.15L14.9998 14.1667Z"
              fill="#currentColor"
            />
          </svg>
        </button>
        <div className=" border-2 border-secondary mt-1 w-[140px] mr-1 transition duration-200 md:group-hover:border-orange-700"></div>
      </Link>
    </div>
  );
}
