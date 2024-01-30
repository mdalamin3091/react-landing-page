import { useContext, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { fetchAllData } from "@/context/actions";
import { GlobalContext } from "@/context/Provider";

const OverviewSection = () => {
    const sliderRef = useRef(null);

    const { getAllData, dispatch }: any = useContext(GlobalContext);

    useEffect(() => {
        fetchAllData()(dispatch);
    }, [dispatch]);

    return (
        <section className="bg-[#212158] min-h-[80vh] py-24">
            <div className="container">
                <h2 className="text-white text-4xl text-center">Overview</h2>
                <p className="text-center text-white mt-5 px-20 leading-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur quas ipsa accusantium aspernatur, amet, iusto architecto sequi voluptatum dicta tempore quis dolore temporibus similique deleniti repellendus porro, enim magnam distinctio facilis aperiam ea nam eligendi beatae? Deserunt beatae eum ipsam similique quisquam tenetur soluta? Numquam, error sed? Harum reprehenderit mollitia temporibus in asperiores. In minus ipsam deserunt vel, voluptatum repellat vitae numquam et accusamus iste cumque, quibusdam ea consequuntur libero consequatur atque dolorem blanditiis nisi aut quasi illo eos quia? Ab, obcaecati. Alias qui accusamus sit quo at error recusandae</p>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={4}
                loop
                ref={sliderRef}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}

                pagination={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="py-24"
            >
                {getAllData?.data?.featured_project && getAllData?.data?.featured_project.map((item: any) => {
                    return (
                        <SwiperSlide key={item?.data.images?.list[0]?.id}>
                            <div className="relative">
                                <img className="w-full object-cover h-full" src={item?.data.images?.list[0].full_path} alt="abc" />
                                <div className="text-white absolute w-full h-[100px] bg-black/70 bottom-6 p-5">
                                    <h4 className="text-lg leading-5 mb-2">Sheltech Felicia</h4>
                                    <p className="font-bold text-lg">
                                        Residential{" "}
                                        <span className="gap-4 w-1 h-1 rounded-full bg-white inline-block mb-1 mr-2"></span>
                                        Dhaka
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </section>
    )
}

export default OverviewSection