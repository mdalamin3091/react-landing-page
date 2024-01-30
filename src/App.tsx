import OverviewSection from "./components/OverviewSection";
import HeroArea from "./components/HeroArea";

//--- Swiper styles ---//
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//--- Global Css ---//
import "./App.css";

function App() {
    return (
        <>
            {/* <h2>In the name of Allah</h2> */}
            <HeroArea />
            <OverviewSection />
        </>
    );
}

export default App;
