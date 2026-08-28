
const WhotoFollow = () => {
  return (
    <div className="whotofollow border min-w-0  border-gray-700 rounded-3xl  m-3  p-6 flex gap-y-6 flex-col">
      <div className="top font-bold text-xl">Who to follow</div>
      <div className="item flex justify-between ">
        <div className="card flex gap-x-2">
          <div className="profile ">
            <img
              className="w-16 rounded-full"
              src="./src/assets/img/bjplogo.jpg"
              alt="bjp_logo"
            />
          </div>
          <div className="text ">
            <p className="font-bold text-base cursor-pointer">BJP</p>
            <p className=" text-sm text-gray-600 cursor-pointer">@Bjp4India</p>
          </div>
        </div>
        <button className="bg-white w-20 p-1 h-fit mt-1.25 rounded-full text-black font-bold">
          Follow
        </button>
      </div>
      <div className="item flex justify-between ">
        <div className="card flex gap-x-2">
          <div className="profile ">
            <img
              className="w-16 rounded-full"
              src="./src/assets/img/president.jpg"
              alt="bjp_logo"
            />
          </div>
          <div className="text">
            <p className="font-bold text-base cursor-pointer">
              President of India
            </p>
            <p className=" text-sm text-gray-600 cursor-pointer">
              @rashtrapatibhvn
            </p>
          </div>
        </div>
        <button className="bg-white w-20 p-1 h-fit mt-1.25 rounded-full text-black font-bold">
          Follow
        </button>
      </div>
      <div className="item flex justify-between ">
        <div className="card flex gap-x-2">
          <div className="profile ">
            <img
              className="w-16 rounded-full"
              src="./src/assets/img/aajtaklogo.jpg"
              alt="bjp_logo"
            />
          </div>
          <div className="text">
            <p className="font-bold text-base cursor-pointer">AajTak</p>
            <p className=" text-sm text-gray-600 cursor-pointer">@aajtak</p>
          </div>
        </div>
        <button className="bg-white w-20 p-1 h-fit mt-1.25  rounded-full text-black font-bold">
          Follow
        </button>
      </div>
      <div className="text">
        <p
          className=" text-blue-800 text-base cursor-pointer hover:underline
          "
        >
          Show more
        </p>
      </div>
    </div>
  );
}

export default WhotoFollow;
