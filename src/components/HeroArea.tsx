import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { useContext, useEffect, useRef } from "react";
import { GlobalContext } from "@/context/Provider";
import { fetchAllData } from "@/context/actions";

const HeroArea = () => {
    const sliderRef = useRef(null);
    const { getAllData, dispatch }: any = useContext(GlobalContext);

    useEffect(() => {
        fetchAllData()(dispatch);
    }, [dispatch]);

    const handleSlidePrev = () => {
        sliderRef.current?.swiper.slidePrev();
    };
    const handleSlideNext = () => {
        sliderRef.current?.swiper.slideNext();
    };

    return (
        <section className="bg-white pt-52 hero-section relative after:absolute after:h-[400px] after:bg-[#212158] after:left-0 after:w-full after:bottom-0 -z-1">
            <div className="grid grid-cols-12">
                <div className="col-span-4 ml-32 h-[700px] relative">
                    <h2 className="text-[40px] uppercase leading-10 mb-10">
                        INDULGE IN
                        <br />
                        DECADENCE
                    </h2>
                    <h4 className="text-lg leading-5 mb-2">Sheltech Felicia</h4>
                    <p className="font-bold text-lg">
                        Residential{" "}
                        <span className="gap-4 w-1 h-1 rounded-full bg-black inline-block mb-1 mr-2"></span>
                        Dhaka
                    </p>
                    <div className="absolute bottom-12 flex gap-4 z-10 cursor-pointer">
                        <button onClick={handleSlidePrev} className="cursor-pointer w-8 h-8 border border-white rounded-full flex items-center justify-center text-white">
                            <FaArrowLeftLong />
                        </button>
                        <button onClick={handleSlideNext} className="cursor-pointer w-8 h-8 border border-white rounded-full flex items-center justify-center text-white">
                            <FaArrowRightLong />
                        </button>
                    </div>
                </div>
                <div className="col-span-8">
                    <Swiper
                        spaceBetween={40}
                        slidesPerView={3}
                        loop
                        ref={sliderRef}
                        autoplay={{
                            disableOnInteraction: false,
                        }}
                        pagination={false}
                        navigation={false}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {getAllData?.data?.featured_project && getAllData?.data?.featured_project.map((item: any) => {
                            return (
                                <SwiperSlide key={item?.data.images?.list[0]?.id}>
                                    <img className="w-full object-cover h-full" src={item?.data.images?.list[0].full_path} alt="abc" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default HeroArea