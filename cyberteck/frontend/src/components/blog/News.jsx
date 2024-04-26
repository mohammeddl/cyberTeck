import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axios";

export default function News() {
    const [news, setNews] = useState([]);

    const getblogs = async () => {
        try {
            const response = await axiosClient.get("http://localhost:8000/api/blogs");
            console.log('response', response.data.blogs);
            console.log('response', response.data.blogs);
            setNews(response.data.blogs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getblogs();
    }, []);

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {news && news.map((blog) => (
                    <div
                        key={blog.id}
                        className="overflow-hidden transition-shadow duration-300 bg-white rounded"
                    >
                        <a href="/" aria-label="Article">
                            <img
                                src={
                                    "http://localhost:8000/images/" + blog.image
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
                            <p className="mb-4 text-gray-700">{blog.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
