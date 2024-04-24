import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import HistoryProfile from "./HistoryProfile";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axiosClient } from "../../api/axios";

export default function FormProfile() {
    const [user, setUser] = useState({});

    const getUser = localStorage.getItem("USER");

    useEffect(() => {
        setUser(JSON.parse(getUser));
    }, [getUser]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmitUpdate = async (data) => {
        const formData = new FormData();
        formData.append("_method", "PUT");
        formData.append("name", data.name);
        formData.append("image", data.image[0]);
        formData.append("email", data.email);

       
        console.log("Form Data:", formData);

        try {
            const response = await axiosClient.post(
                `/api/user/${user.id}`,
                formData
            );
            if (response.status === 200) {
                console.log("Data saved successfully!"); 
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    return (
        <main className="profile-page">
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
            />
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
            />

            <section className="relative block h-80">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://assetsio.gnwcdn.com/Best-VR-Games-vg247.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp')",
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-56-px"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>

            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words h-[60vh] bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src={
                                                "http://localhost:8000/images/" +
                                                user.image
                                            }
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center lg:pt-4 pt-8">
                                        <div className=" text-center"></div>
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handleSubmit(onSubmitUpdate)}>
                                <div className="text-center ">
                                    <Avatar className="w-16 h-16">
                                        <AvatarImage
                                            alt="Avatar"
                                            src="/placeholder-user.jpg"
                                        />
                                        <AvatarFallback initials="JD" />
                                    </Avatar>
                                    <div className="grid gap-1.5">
                                        <h1 className="text-2xl font-bold">
                                            {user.name}
                                        </h1>
                                        <Button size="sm">
                                            Change profile picture
                                            <input
                                                id="dropzone-file"
                                                type="file"
                                                
                                                className="hidden"
                                                {...register("image", {
                                                    required: true,
                                                })}
                                            />
                                        </Button>
                                    </div>
                                </div>
                                <div className="grid gap-4 md:gap-8">
                                    <div className="grid gap-2">
                                        <Label
                                            className="text-base"
                                            htmlFor="name"
                                        >
                                            User Name
                                        </Label>
                                        <Input
                                            
                                            id="name"
                                            {...register("name", {
                                                required: true,
                                            })}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label
                                            className="text-base"
                                            htmlFor="username"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            {...register("email", {
                                                required: true,
                                            })}
                                            id="email"
                                            placeholder="Enter your email"
                                            
                                        />
                                    </div>
                                    <Button size="sm">Save</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <HistoryProfile />
        </main>
    );
}
