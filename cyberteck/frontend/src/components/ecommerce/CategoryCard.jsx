
const categories = [
    {
        name: "Action",
        display: "Co-Founder / CEO",
        imageUrl:
            "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
    },
    {
        name: "Action",
        display: "Co-Founder / CEO",
        imageUrl:
            "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
    },
    {
        name: "Action",
        display: "Co-Founder / CEO",
        imageUrl:
            "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
    },
    {
        name: "Action",
        display: "Co-Founder / CEO",
        imageUrl:
            "https://cdn.dribbble.com/users/975607/screenshots/15985552/media/74463943d41de4a8734913885a7cccbd.png",
    },

];

export default function CategoryCard() {
    return (
        <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {categories.map((category) => (
                <div
                    key={category.name}
                    className="relative rounded-lg border border-gray-300 bg-slate-200 px-4 py-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                    <div className="flex-shrink-0">
                        <img
                            className="h-14 w-14 rounded-full"
                            src={category.imageUrl}
                            alt=""
                        />
                    </div>
                    <div className="flex-1 min-w-0 pr-12">
                        <a href="#" className="focus:outline-none">
                            <span
                                className="absolute inset-0"
                                aria-hidden="true"
                            />
                            <p className="text-sm font-medium text-gray-900">
                                {category.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                display more +4
                            </p>
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </div>
    );
}
