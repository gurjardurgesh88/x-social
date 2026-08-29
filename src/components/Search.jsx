const Search = () => {
  return (
    <div className=" search hover:text-gray-200 text-gray-500 cursor-text flex gap-x-1 justify-start items-center bg-black rounded-full w-88 border hover:border-gray-400 border-gray-800  p-3 m-4 mt-0">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className=" pointer-events-none   w-6 pl-1   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
      >
        <g>
          <path
            fill="currentColor"
            d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
          ></path>
        </g>
      </svg>
      <input
        className="search pl-1  bg-black hover:placeholder-gray-200 focus:outline-none text-sm  w-full border-none border-gray-800 placeholder-gray-500 text-gray-400 "
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default Search;
