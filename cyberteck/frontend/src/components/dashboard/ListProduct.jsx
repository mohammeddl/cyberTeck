export default function ListProduct() {
    return (
        <>
            <div className=" flex  justify-around  md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 m-16">

            <div className=" px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 w-2/3 ">
                <div className="sm:flex sm:items-center pb-4 sm:justify-between">
                    <h2 className="font-medium text-gray-700">The Porducts </h2>
                    <div className="flex items-center mt-4 -mx-2 sm:mt-0"></div>
                </div>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full object-cover"
                            src=""
                        ></img>
                        <span className="mx-3 text-gray-600">spdier man</span>
                        <span className="mx-3 text-gray-600">test</span>
                        <span className="mx-3 text-gray-600">price</span>
                    </div>
                    <form>
                        <input
                            type="hidden"
                            value="{{$event->id}}"
                            name="id"
                        ></input>
                        <button className=" transition-colors duration-300 rounded-lg group hover:bg-gray-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="20"
                                width="17.5"
                                viewBox="0 0 448 512"
                            >
                                <path
                                    fill="#19d29a"
                                    d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
                <canvas
                    className="max-w-3xl max-h-96"
                    id="secondChart"
                ></canvas>
            </div>
            <div className="row-span-3 bg-white rounded-lg   shadow-md shadow-gray-200 w-2/3">
                <div className="px-6 py-5 border-b border-gray-100 sm:flex sm:items-center sm:justify-between">
                    <h2 className="font-medium text-gray-700">Deleted Users</h2>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 overflow-hidden bg-gray-100 rounded-full object-cover"
                                src=""
                            ></img>
                            <span className="mx-3 text-gray-600">daali</span>
                        </div>
                        <form>
                            <button className=" transition-colors duration-300 rounded-lg group hover:bg-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="12"
                                    width="12"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
