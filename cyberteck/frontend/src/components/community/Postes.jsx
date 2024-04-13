export default function Postes() {
    return (
        <>
        <div className="flex justify-center">
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex space-x-4">
                    <img
                        alt=""
                        src="https://source.unsplash.com/100x100/?portrait"
                        className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
                    />
                    <div className="flex flex-col space-y-1">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            className="text-sm font-semibold"
                        >
                            Leroy Jenkins
                        </a>
                        <span className="text-xs dark:text-gray-600">
                            4 hours ago
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        src="https://source.unsplash.com/random/100x100/?5"
                        alt=""
                        className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
                    />
                    <h2 className="mb-1 text-xl font-semibold">
                        Nam cu platonem posidonium sanctus debitis te
                    </h2>
                    <p className="text-sm dark:text-gray-600">
                        Eu qualisque aliquando mel, id lorem detraxit nec, ad
                        elit minimum pri. Illum ipsum detracto ne cum. Mundi
                        nemore te ius, vim ad illud atqui apeirian...
                    </p>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="space-x-2">
                        ........
                    </div>
                    <div className="flex space-x-2 text-sm dark:text-gray-600">
                        <button
                            type="button"
                            className="flex items-center p-1 space-x-1.5"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                aria-label="Number of likes"
                                className="w-4 h-4 fill-current dark:text-violet-600"
                            >
                                <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                                <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
                            </svg>
                            <span>283</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
