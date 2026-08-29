import ProfileDp from "../assets/img/dp.png";
const Profile = () => {
  return (
    <div className="profile flex items-center  transition duration-150 hover:bg-white/10 lg:p-2 rounded-full">
      <div className="dp w-10 h-10 lg:w-10 lg:h-10 shrink-0">
        <img
          src={ProfileDp}
          alt="Dp"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="text pl-2 hidden lg:flex flex-col">
        <span className="font-bold">Durgesh Patel</span>
        <span className="text-gray-500 hover:cursor-pointer">
          @gurjardurgesh99
        </span>
      </div>
      <div className="more hidden lg:flex flex-col ">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="w-6 invert hover:cursor-pointer  r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-lrsllp r-1nao33i r-16y2uox r-8kz0gk"
        >
          <g>
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            ></path>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Profile;
