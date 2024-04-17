export default function ListProduct() {
    return (
        <>

            <div className="flex flex-col justify-center px-8 py-6 bg-white rounded-lg shadow-md shadow-gray-200 md:col-span-2 md:row-span-2 gap-y-4 gap-x-8 ">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <h2 className="font-medium text-gray-700">The Events </h2>
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
        </>
    );
}
