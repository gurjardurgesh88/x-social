import PostUi from "./PostUi";
import modiji from "../assets/img/modiji.jpg"
import elonmusk from "../assets/img/elonmusk.jpg";
import nagaland from "../assets/img/nagaland.jpg";
import chatgptcompare from "../assets/img/chatgptcompare.jpg";
import braintestavatar from "../assets/img/braintestavatar.jpg";
import braintest from "../assets/img/braintest.jpg";
import moneycontrol from "../assets/img/moneycontrol.jpg";

const posts = [
  {
    id: 1,
    avatar: modiji,
    name: "PMO India",
    username: "@PMOIndia",
    time: "3h",
    text: "Digital infrastructure transforming governance, driving economic growth in India",
    link: "aninews.in/news/national/...",
    via: "via NaMo App",
    image: modiji,
  },

  {
    id: 2,
    avatar: modiji,
    name: "PMO India",
    username: "@PMOIndia",
    time: "3h",
    text: "Today we mark \n #PartitionRemembranceDay. We recall the courage of all those who were impacted by Partition. It was a moment in history that tore apart several lives... families were uprooted, loved ones were lost and immense suffering was endured.\n At the same time, ",
    showMore: true,
  },

  {
    id: 3,
    avatar: elonmusk,
    name: "PatrikTheBatman",
    username: "@PatrikTheBatman",
    time: "21h",
    text: "Hey @Grok, can you do better than gemini and ChatGPT?",
    image: chatgptcompare,
  },

  {
    id: 4,
    avatar: modiji,
    name: "PMO India",
    username: "@PMOIndia",
    time: "18h",
    text: "Nagaland gets its first natural gas supply via National Gas Grid",
    link: "economictimes.indiatimes.com/industry/energ...",
    via: "via NaMo App",
    image: nagaland,
  },
  {
    id: 5,
    avatar: braintestavatar,
    name: "WORLD VIEW",
    username: "@beauti_animals",
    time: "22h",
    text: "IQ Test: Expert Level 🧠",
    via: "Only geniuses pass this on the first try",
    image: braintest,
  },

  {
    id: 6,
    avatar: modiji,
    name: "PMO India",
    username: "@PMOIndia",
    time: "4h",
    text: "India has managed economy well through multiple shocks: ADB Chief Economist Park",
    link: "moneycontrol.com/news/business/...",
    via: "via NaMo App",
    image: moneycontrol,
  },
];
const Posts = () => {
  return (
    <div className="posts flex flex-col w-full min-w-0 pb-14 sm:pb-0">
      {posts.map((post) => (
        <PostUi key={post.id} {...post} />
        
      ))}
    </div>
    
  );
};

export default Posts;
