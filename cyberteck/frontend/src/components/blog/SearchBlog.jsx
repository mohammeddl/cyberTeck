import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";

export default function SearchBlog() {
    const [title, setTitle] = useState("");
    const [news, setNews] = useState([]);
    const [error, setError] = useState('');

    const getblogs = async () => {
        try {
            const response = await axiosClient.get("/api/blog/searche?title=", {
                params: { title: title },
            });
            console.log("response", response.data.blogs);
            setNews(response.data.blogs);
            if(response.data.blogs.length === 0) setError("No blogs found."); // Set error message
            
        } catch (error) {
            console.log(error);
            // setError("An error occurred while fetching blogs."); // Set error message
        }
    };

    useEffect(() => {
        getblogs();
    }, [title]);

    return (
        <>
            <div className="pt-10">
                <form
                    id="searchForm"
                    className="mx-auto  flex flex-col md:flex-row items-center justify-center gap-2"
                >
                    <input
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                        type="text"
                        placeholder="Title"
                        className="px-4 py-2 w-full md:w-auto rounded-md outline-none bg-white border border-gray-300 focus:border-gray-500"
                    />
                    <button
                        type="submit"
                        id="searchBtn"
                        className="px-6 py-2 bg-black text-white rounded-xl transition-all hover:bg-gray-800 focus:outline-none focus:bg-gray-800"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                {error && <h1 className="text-red-500">{error}</h1>}
                {news &&
                    news.map((blog) => (
                        <div
                            key={blog.id}
                            className="overflow-hidden transition-shadow duration-300 bg-white rounded"
                        >
                            <a href="/" aria-label="Article">
                                <img
                                    src={
                                        "http://localhost:8000/images/" +
                                        blog.image
                                    }
                                    className="object-cover w-full h-64 rounded"
                                    alt={blog.title}
                                />
                            </a>
                            <div className="py-5">
                                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                                    {blog.created_at}
                                </p>
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-5">
                                        {blog.title}
                                    </p>
                                </a>
                                <p className="mb-4 text-gray-700">
                                    {blog.content}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
}
