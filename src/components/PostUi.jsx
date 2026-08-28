import MenuAction from "./MenuAction";
import PostFunctions from "./PostFunctions";

const PostUi = ({
  avatar,
  name,
  username,
  time,
  text,
  link,
  via,
  image,
  showMore,
  video,
}) => {
  return (
    <div className="postone p-2 lg:p-3 flex gap-x-2 lg:gap-x-3 min-w-0 w-full">
      <img
        src={avatar}
        alt=""
        className="w-10 h-10 shrink-0 object-cover rounded-full"
      />

      <div className="content min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2 min-w-0">
          <div className="textcontent  flex items-center gap-x-2 min-w-0 flex-1 ">
            <p className="text-gray-200 h-fit text-sm font-bold truncate ">
              {name}
            </p>
            <p className="text-gray-500 h-fit text-sm truncate">
              {username} · {time}
            </p>
          </div>
          <MenuAction />
        </div>
        <div className="heading flex flex-col min-w-0 max-w-full">
          <p>{text}</p>
          {link && (
            <a className="text-blue-500  break-all w-fit h-fit" href="#">
              {link}
            </a>
          )}
          {via && <p className="pt-2">{via}</p>}
        </div>
        {image && (
          <div className="imgpost pt-3">
            <img
              className="w-full max-w-full h-auto rounded-lg object-cover"
              src={image}
              alt=""
            />
          </div>
        )}
        <PostFunctions />
      </div>
    </div>
  );
};

export default PostUi;
