export default function Offers() {
    return (
        <div className="bg-white pt-16 lg:py-24">
            <div className="pb-16 bg-gray-900 lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                        />
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                            <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                <img
                                    className="object-cover lg:h-full lg:w-full"
                                    src="https://media.wired.com/photos/62855b1bb6cfd378a30c474a/master/w_1920,c_limit/Build-Game-Watch-It-Die-Hyper-Scape-Games.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                            <blockquote>
                                <div>
                                    
                                    <p className="mt-6 text-2xl font-medium text-white">
                                       <span className="text-3xl "> Welcome to CyberTeck!</span><br></br> Dive into
                                        the exciting world of gaming with [Your
                                        Store Name], your ultimate destination
                                        for all things gaming! Whether you're a
                                        casual gamer looking for fun and
                                        entertaining games or a hardcore gamer
                                        seeking the latest gaming gear and
                                        accessories, we've got you covered.
                                    </p>
                                </div>
                                <footer className="mt-6">
                                    <p className="text-base font-medium text-white">
                                        Daali Mohammed
                                    </p>
                                    <p className="text-base font-medium text-indigo-100">
                                        CEO at CyberTeck
                                    </p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
