import { useEffect, useState } from "react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

import { axiosClient } from "../../api/axios";
import EditBlog from "./EditBlog";
import { LoaderIcon } from "lucide-react";


export default function CardBlog() {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axiosClient.get("/api/blogs");
            console.log(response.data.blogs);
            setBlogs(response.data.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const deleteProduct = async (blogId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be dalete this blog!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#fff179",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosClient.delete(
                        `/api/blog/${blogId}`
                    );
                    if (response.status === 201) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your blog has been deleted.",
                            icon: "success",
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to blog blog.",
                        icon: "error",
                    });
                }
            }
        });
    };

    const [isOpen, setIsOpen] = useState(false);
    const [indexEdit, setIndexEdit] = useState(null);
    const clickEdit = (idx) => {
        setIndexEdit(idx);
    };

    if (!blogs) {
        return (
            <div className="flex items-center m-6 justify-center w-40">
                <LoaderIcon className="h-5 w-5 animate-spin" />
                Loading...
            </div>
        );
    }

    return (
        <div className=" mx-16 flex flex-wrap gap-5 ">
            <EditBlog
                isOpen={isOpen}
                closeModel={() => {
                    fetchData();
                    setIsOpen(false);
                }}
                blog={blogs[indexEdit]}
            />
            {blogs && blogs.map((blog, index) => (
                <div className="" key={blog.id}>
                    <Card className=" max-w-[23rem] shadow-lg flex">
                        <CardHeader className="h-32" floated={false} color="blue-gray">
                            <img
                                src={
                                    "http://localhost:8000/images/" + blog.image
                                }
                                alt="img product"
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 flex items-center justify-between">
                                <Typography
                                    variant="h5"
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    {blog.title}
                                </Typography>
                            </div>
                            <Typography color="gray">
                                Enter a freshly updated and thoughtfully
                                furnished peaceful home surrounded by ancient
                                trees, stone walls, and open meadows.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-3 flex gap-4 ">
                            <Button
                                onClick={() => {
                                    setIsOpen(true);
                                    clickEdit(index);
                                }}
                                size="lg"
                                fullWidth={true}
                            >
                                Modify
                            </Button>
                            <Button onClick={() => deleteProduct(blog.id)}>
                                delete
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}
