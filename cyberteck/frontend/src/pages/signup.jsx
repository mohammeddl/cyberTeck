import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

import { useUserContext } from "../components/context/UserContex";
import { home } from "../router";
import { axiosClient } from "../api/axios";

export default function Signup() {
    const formSchema = z.object({
        image: z.string().min(2).max(50),
        name: z.string().min(2).max(15),
        email: z.string().email().min(2).max(50),
        password: z.string().min(8).max(30),
    });

    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            image: "",
            name: "",
            email: "",
            password: "",
        },
    });

    const {
        formState: { isSubmitting },
    } = form;

    const { setUser } = useUserContext();

    const onSubmitRegister = async (values) => {
        try {
            const response = await axiosClient.post("/api/register", values, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
console.log("Attempting to register with:", values);

            if (response.status === 200) {
                window.localStorage.setItem(
                    "ACCESS_TOKEN",
                    response.data.access_token
                );
                window.localStorage.setItem(
                    "USER",
                    JSON.stringify(response.data.user)
                );

                console.log("Setting user in context...");
                setUser(response.data.user);

                console.log("Navigating to dashboard...");
                navigate(home);
            }
        } catch (error) {
            if (error.response) {
                form.setError("email", {
                    message: error.response.data.message,
                });
                console.log(error.response);
            }
        }
    };

    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmitRegister)}
                    className="space-y-8"
                >
                    <FormField
                        control={form.control}
                        name="image"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>User Image</FormLabel>
                                <FormControl>
                                    <Input
                                        className={"bg-slate-500"}
                                        type={"file"}
                                        placeholder="User Image"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>User Name</FormLabel>
                                <FormControl>
                                    <Input
                                        className={"bg-slate-500"}
                                        type={"text"}
                                        placeholder="User Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        className={"bg-slate-500"}
                                        type={"password"}
                                        placeholder="Password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isSubmitting} className="" type="submit">
                        {isSubmitting && (
                            <Loader2 className="mx-2 my-2 animate-spin" />
                        )}{" "}
                        submit
                    </Button>
                </form>
            </Form>
        </>
    );
}
