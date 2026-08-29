const sidebar = () => {
  return (
      <div className="sidebar  flex justify-start">
        <ul className="flex flex-col justify-self-start gap-y-1 ">
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full    hover:bg-white/10   hover:border-gray-700  p-2 w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M10.059 2.593c1.175-.784 2.707-.784 3.882 0l6.5 4.333C21.415 7.575 22 8.668 22 9.838V18.5c0 1.933-1.567 3.5-3.5 3.5h-4.25v-5.25c0-1.243-1.007-2.25-2.25-2.25s-2.25 1.007-2.25 2.25V22H5.5C3.567 22 2 20.433 2 18.5V9.838c0-1.17.585-2.263 1.559-2.912l6.5-4.333z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Home</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2   w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className=" w-7   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Explore</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className=" w-7   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Notifications</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 33 32"
                aria-hidden="true"
                className=" w-7   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M12.745 20.54l10.97-8.19c.539-.4 1.307-.244 1.564.38 1.349 3.288.746 7.241-1.938 9.955-2.683 2.714-6.417 3.31-9.83 1.954l-3.728 1.745c5.347 3.697 11.84 2.782 15.898-1.324 3.219-3.255 4.216-7.692 3.284-11.693l.008.009c-1.351-5.878.332-8.227 3.782-13.031L33 0l-4.54 4.59v-.014L12.743 20.544m-2.263 1.987c-3.837-3.707-3.175-9.446.1-12.755 2.42-2.449 6.388-3.448 9.852-1.979l3.72-1.737c-.67-.49-1.53-1.017-2.515-1.387-4.455-1.854-9.789-.931-13.41 2.728-3.483 3.523-4.579 8.94-2.697 13.561 1.405 3.454-.899 5.898-3.22 8.364C1.49 30.2.666 31.074 0 32l10.478-9.466"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Grok</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7    r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M10.059 2.593c1.175-.784 2.707-.784 3.882 0l6.5 4.333C21.415 7.575 22 8.668 22 9.838V18.5c0 1.933-1.567 3.5-3.5 3.5h-4.25v-5.25c0-1.243-1.007-2.25-2.25-2.25s-2.25 1.007-2.25 2.25V22H5.5C3.567 22 2 20.433 2 18.5V9.838c0-1.17.585-2.263 1.559-2.912l6.5-4.333z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Lists</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7    r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M20.7 11.7c0-4.48-3.844-8.2-8.699-8.2-4.854 0-8.698 3.72-8.698 8.2v.015l-.001.014c-.02.667.09 1.225.25 1.767.083.28.176.545.276.839.098.285.202.595.288.918.177.663.284 1.401.156 2.271-.086.582-.274 1.191-.582 1.855 1.264.375 2.55.053 4.013-.599l.455-.203.437.242c1.07.594 1.917 1.08 3.406 1.08 4.855 0 8.7-3.72 8.7-8.199zm2 0c0 5.683-4.84 10.2-10.699 10.2-1.784 0-2.96-.555-3.95-1.095-1.876.768-4.02 1.2-6.245-.075l-.885-.505.524-.875c.54-.904.77-1.581.848-2.118.078-.526.02-.98-.11-1.463-.066-.25-.15-.502-.247-.788-.095-.277-.204-.59-.301-.92-.199-.674-.36-1.449-.332-2.39C1.322 6.002 6.154 1.5 12.002 1.5c5.859 0 10.7 4.518 10.7 10.2z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Communication</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7     r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M10.059 2.593c1.175-.784 2.707-.784 3.882 0l6.5 4.333C21.415 7.575 22 8.668 22 9.838V18.5c0 1.933-1.567 3.5-3.5 3.5h-4.25v-5.25c0-1.243-1.007-2.25-2.25-2.25s-2.25 1.007-2.25 2.25V22H5.5C3.567 22 2 20.433 2 18.5V9.838c0-1.17.585-2.263 1.559-2.912l6.5-4.333z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Premium</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7    r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">Profile</span>
          </li>
          <li className="flex gap-x-4  hover:cursor-pointer hover:rounded-full  hover:bg-white/10  hover:border-gray-700 p-2  w-full hover:w-fit text-xl items-center justify-start font-semibold">
            <span>
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-7     r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
              >
                <g>
                  <path
                    fill="currentColor"
                    d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="hidden lg:inline">More</span>
          </li>
        </ul>
      </div>
    
  );
}

export default sidebar;
