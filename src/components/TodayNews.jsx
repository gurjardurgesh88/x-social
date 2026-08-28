
const TodayNews = () => {
  return (
    <div className="todaynews min-w-0 border  border-gray-700 rounded-3xl  m-3 p-6">
      <div className="top flex justify-between">
        <div className="text font-bold text-xl ">Today's News</div>
        <div className="crossx">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="cursor-pointer r-4qtqp9 w-5 invert r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1hjwoze r-12ym1je"
            style={{ color: "rgb(239, 243, 244)" }}
          >
            <g>
              <path
                fill="currentColor"
                d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="newsbox min-w-0 flex flex-col py-9 gap-y-5">
        <div className="item hover:cursor-pointer  rounded-lg flex flex-col gap-y-1 transition duration-150 hover:bg-white/5">
          <p className="heading">
            NDA MPs Protest Outside Parliament Demanding Rahul Gandhi Debate
            Jharkhan...
          </p>
          <p className="detail hover:cursor-pointer text-gray-500 text-sm">
            Trending now. News . 6983 Posts
          </p>
        </div>
        <div className="item hover:cursor-pointer rounded-lg flex flex-col gap-y-1 transition duration-150 hover:bg-white/5">
          <p className="heading">
            Police Clash with Jharkhand Students Protesting Exam Irregularities
            Journalist...
          </p>
          <p className="detail hover:cursor-pointer text-gray-500 text-sm">
            1 day ago . News . 409.4k Posts
          </p>
        </div>
        <div className="item hover:cursor-pointer rounded-lg flex flex-col gap-y-1 transition duration-150 hover:bg-white/5">
          <p className="heading">
            Young Rajasthan Students Protest Unsafe School Conditions ...
          </p>
          <p className="detail hover:cursor-pointer text-gray-500 text-sm">
            5 hours ago . News . 241.9k Posts
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodayNews;
