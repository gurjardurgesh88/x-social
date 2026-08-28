
const Topsection = () => {
  return (
    <div className="top sticky top-0 z-10 bg-black/80 backdrop-blur-md">
      <div className="heading relative border-b border-gray-800">
        <div className="flex w-full">
          <div className="foryou hover:cursor-pointer relative w-1/2 py-4 text-center font-bold text-base transition duration-150 hover:bg-white/5 rounded-lg">
            For you
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full"></div>
          </div>
          <div className="following hover:cursor-pointer w-1/2 py-4 text-center font-bold  text-gray-500 text-base  transition duration-150 hover:bg-white/5 hover:text-white rounded-lg">
            Following
          </div>
        </div>
        <div className="addlogo hidden sm:block absolute right-4 top-5 ">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className=" text-gray-500 hover:text-red-600 hover:cursor-pointer w-4 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1bwzh9t r-10ptun7 r-1janqcz"
          >
            <g>
              <path
                fill="currentColor"
                d="M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Topsection;
