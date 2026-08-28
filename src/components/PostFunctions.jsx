import React from 'react';

const PostFunctions = () => {
  return (
    <div class="postactions flex justify-between items-center w-full min-w-0 gap-1 py-3 lg:gap-x-3">
      <div class="comment shrink-0 hover:text-blue-400 hover:cursor-pointer h-fit w-fit  min-w-0 text-gray-500 flex items-center gap-x-1">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="w-5     r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1nao33i r-lwhw9o r-cnnz9e"
        >
          <g>
            <path
              fill="currentColor"
              d="M20.7 11.7c0-4.48-3.844-8.2-8.699-8.2-4.854 0-8.698 3.72-8.698 8.2v.015l-.001.014c-.02.667.09 1.225.25 1.767.083.28.176.545.276.839.098.285.202.595.288.918.177.663.284 1.401.156 2.271-.086.582-.274 1.191-.582 1.855 1.264.375 2.55.053 4.013-.599l.455-.203.437.242c1.07.594 1.917 1.08 3.406 1.08 4.855 0 8.7-3.72 8.7-8.199zm2 0c0 5.683-4.84 10.2-10.699 10.2-1.784 0-2.96-.555-3.95-1.095-1.876.768-4.02 1.2-6.245-.075l-.885-.505.524-.875c.54-.904.77-1.581.848-2.118.078-.526.02-.98-.11-1.463-.066-.25-.15-.502-.247-.788-.095-.277-.204-.59-.301-.92-.199-.674-.36-1.449-.332-2.39C1.322 6.002 6.154 1.5 12.002 1.5c5.859 0 10.7 4.518 10.7 10.2z"
            ></path>
          </g>
        </svg>
        <span class="text text-xs lg:text-sm whitespace-nowrap">968</span>
      </div>
      <div class="reshare shrink-0 min-w-0  text-gray-500 hover:text-green-400 hover:cursor-pointer h-fit w-fit flex items-center gap-x-1">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="w-5  r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
        >
          <g>
            <path
              fill="currentColor"
              d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"
            ></path>
          </g>
        </svg>
        <span class="text  text-xs lg:text-sm whitespace-nowrap">6.2k</span>
      </div>
      <div class="like shrink-0 min-w-0 text-gray-500 hover:text-red-400 hover:cursor-pointer h-fit w-fit flex items-center gap-x-1">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="w-5   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
        >
          <g>
            <path
              fill="currentColor"
              d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
            ></path>
          </g>
        </svg>
        <span class="text  text-xs lg:text-sm whitespace-nowrap">19k</span>
      </div>
      <div class="viewgraph min-w-0 shrink-0 text-gray-500  hover:text-blue-400 hover:cursor-pointer h-fit w-fit flex items-center gap-x-1">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          class="w-5  r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
        >
          <g>
            <path
              fill="currentColor"
              d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
            ></path>
          </g>
        </svg>
        <span class="text  text-xs lg:text-sm whitespace-nowrap">926k</span>
      </div>
      <div class="saaveandshare  flex items-center gap-x-1 shrink-0 ">
        <div class="bookmark text-gray-500 hover:text-blue-400  hover:cursor-pointer h-fit w-fit">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="w-5   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
          >
            <g>
              <path
                fill="currentColor"
                d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"
              ></path>
            </g>
          </svg>
        </div>
        <div class="share text-gray-500 hover:text-blue-400  hover:cursor-pointer h-fit w-fit">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="w-5   r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
          >
            <g>
              <path
                fill="currentColor"
                d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PostFunctions;
