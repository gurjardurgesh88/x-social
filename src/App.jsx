import Postmenu from "./components/Postmenu"
import Posts from "./components/Posts";
import TopSection from "./components/Topsection"
import Search from "./components/Search"
import TodayNews from "./components/TodayNews"
import WhatsHappening from "./components/WhatsHappening"
import WhotoFollow from "./components/WhotoFollow"
import Footer from "./components/Footer"
import FirstSection from "./components/FirstSection"

function App() {
  return (
    <>
      <div className="container flex mx-auto w-full max-w-7xl h-screen overflow-hidden min-w-0">
        <FirstSection />
        <div className="two flex-1 min-w-0 h-screen overflow-y-auto scrollbar-none border-x border-gray-800">
          <TopSection />
          <Postmenu />
          <Posts />
        </div>
        <div className="three hidden lg:block w-101.5 shrink-0 h-screen overflow-y-auto scrollbar-none p-3">
          <Search />
          <TodayNews />
          <WhatsHappening />
          <WhotoFollow />
          <div className="line bg-gray-800 h-0.5 my-2 w-full"></div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
