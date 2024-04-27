import Offers from "../components/ecommerce/Offers";
import Faq from "../components/faq";
import Hero from "../components/index/Hero";

const HomeComponent = () => {
    return (
        <>
            <Offers />
            <section className="relative block pt-10 overflow-hidden leading-6 text-left text-indigo-900 bg-white">
                <div className="w-full max-w-3xl px-16 mx-auto leading-6 text-left sm:px-12 md:px-8 xl:px-12">
                    <div className="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
                        <div className="box-border text-sm font-semibold text-[#BA9672] uppercase">
                            Featured Products Explore our handpicked selection
                        </div>
                        <h2 className="box-border mx-0 mt-6 mb-0 font-sans text-4xl font-bold leading-tight text-[#100D3F] sm:text-5xl md:text-6xl">
                            Of featured gaming products:
                        </h2>
                    </div>
                </div>
            </section>
            <Hero />

            <section className="box-border relative w-full font-sans leading-6 text-gray-700 bg-white border-0 border-gray-200 border-solid">
                <div className="box-border flex flex-col items-center px-8  mx-auto leading-6 border-solid max-w-7xl xl:px-16 md:items-stretch md:justify-center ">
                    <div className="relative pb-10">
                        <h2 className="w-full m-0 font-sans text-4xl font-black leading-loose tracking-wide text-center text-gray-700 border-0 border-gray-200 sm:text-5xl">
                            Exciting Features for Gamers
                        </h2>
                        <p className="w-full max-w-xl mx-0 mx-auto mt-4 mb-0 font-sans text-sm font-medium leading-relaxed text-center text-gray-400 border-0 border-gray-200 lg:text-lg md:text-base">
                            Explore our range of powerful features tailored for
                            gamers. Trusted by gaming enthusiasts worldwide, we
                            offer cutting-edge tools to enhance your gaming
                            experience. Let's level up together!
                        </p>
                    </div>

                    <div className="z-10 grid gap-5 md:grid-cols-6 lg:grid-cols-9">
                        {/* Feature 1 */}
                        <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            stroke="none"
                                        ></path>
                                        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3M12 12l8-4.5M12 12v9M12 12L4 7.5M16 5.25l-8 4.5"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                                        Exclusive Titles
                                    </h6>
                                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                        Discover our vast library of exclusive
                                        gaming titles to fuel your passion for
                                        gaming.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 2 */}
                        <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            stroke="none"
                                        ></path>
                                        <path d="M7 12l5 5L22 7M2 12l5 5m5-5l5-5"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                                        Virtual Reality
                                    </h6>
                                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                        Immerse yourself in the world of virtual
                                        reality with our cutting-edge VR gaming
                                        experiences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 3 */}
                        <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            stroke="none"
                                        ></path>
                                        <path d="M9 4.55a8 8 0 016 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                                        Community
                                    </h6>
                                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                        Join our vibrant gaming community and
                                        connect with fellow gamers worldwide.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 4 */}
                        <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            stroke="none"
                                        ></path>
                                        <path d="M3 12h3M12 3v3M7.8 7.8L5.6 5.6M16.2 7.8l2.2-2.2M7.8 16.2l-2.2 2.2M12 12l9 3-4 2-2 4-3-9"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                                        Customization
                                    </h6>
                                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                        Personalize your gaming experience with
                                        customizable features tailored to your
                                        preferences.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 5 */}
                        <div className="col-span-3 font-sans text-gray-700 bg-gray-50 rounded-3xl">
                            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            stroke="none"
                                        ></path>
                                        <path d="M13 3v7h6l-8 11v-7H5l8-11"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                                        Fast Delivery
                                    </h6>
                                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                        Enjoy fast and reliable delivery
                                        services to get your gaming gear in no
                                        time.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Feature 6 */}
                        <div className="col-span-3 font-sans text-gray-700 border-0 bg-gray-50 rounded-3xl">
                            <div className="box-border flex flex-col items-start h-full px-2 py-8 mx-4 leading-6 text-center border-solid sm:flex-row sm:items-start sm:text-left">
                                <div className="flex-shrink-0 p-3 font-sans text-gray-700 border border-gray-200 rounded-full">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="leading-6 text-center text-gray-700 align-middle stroke-current w-7 h-7"
                                        width="44"
                                        height="44"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#2c3e50"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path
                                            d="M0 0h24v24H0z"
                                            stroke="none"
                                        ></path>
                                        <rect
                                            x="3"
                                            y="4"
                                            width="18"
                                            height="8"
                                            rx="3"
                                        ></rect>
                                        <rect
                                            x="3"
                                            y="12"
                                            width="18"
                                            height="8"
                                            rx="3"
                                        ></rect>
                                        <path d="M7 8v.01M7 16v.01"></path>
                                    </svg>
                                </div>
                                <div className="mt-4 font-sans text-left text-gray-700 border-0 border-gray-200 sm:mt-2 sm:ml-4">
                                    <h6 className="box-border text-2xl font-bold leading-none tracking-wide text-left border-solid">
                                        Customer Support
                                    </h6>
                                    <p className="box-border mx-0 mt-1 mb-0 font-medium leading-loose text-gray-400 border-solid sm:mt-4">
                                        Benefit from our dedicated customer
                                        support team, available 24/7 to assist
                                        you with any queries.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Faq/>
        </>
    );
};

export default HomeComponent;
