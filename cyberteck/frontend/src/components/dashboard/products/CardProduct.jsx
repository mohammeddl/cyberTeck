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
import { axiosClient } from "../../../api/axios";
import EditProductModel from "./EditProductModel";

export default function CardProduct() {
    const [productes, setProduct] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axiosClient.get("/api/products");
            console.log(response.data.products);
            setProduct(response.data.products);
        } catch (error) {
            console.error("Error fetching productes:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const deleteProduct = async (productId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be dalete this Product!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#fff179",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axiosClient.delete(
                        `/api/products/${productId}`
                    );
                    if (response.status === 201) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your product has been deleted.",
                            icon: "success",
                        });
                    }
                } catch (error) {
                    Swal.fire({
                        title: "Error!",
                        text: "Failed to delete product.",
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
    return (
        <div className=" mx-16 flex flex-wrap gap-5 ">
            <EditProductModel
                isOpen={isOpen}
                closeModel={() => {
                    fetchData();
                    setIsOpen(false);
                }}
                product={productes[indexEdit]}
            />
            {productes.map((product, index) => (
                <div className="" key={product.id}>
                    <Card className=" max-w-[20rem] shadow-lg flex">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={
                                    "http://localhost:8000/images/" +
                                    product.image
                                }
                                alt="img product"
                                className="h-40 w-full object-cover"
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
                                    {product.name}
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    {product.categories.category_name}
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
                            <Button onClick={() => deleteProduct(product.id)}>
                                delete
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}
