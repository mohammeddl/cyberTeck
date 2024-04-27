"use client";
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
import { axiosClient } from "../api/axios";
import { useNavigate } from "react-router-dom";

import { Loader2 } from "lucide-react";
import { home } from "../router";
import { useUserContext } from "./context/UserContext";

export default function UserLogin() {
    const { login } = useUserContext();

    const formSchema = z.object({
        email: z.string().email().min(2).max(50),
        password: z.string().min(8).max(30),
    });

    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "daali@gmail.com",
            password: "123456789",
        },
    });

    const {
        setError,
        formState: { isSubmitting },
    } = form;

    const onSubmit = async (values) => {
        const response = await login(values.email, values.password);
        console.log(response);
        if (response.data.user) {
            navigate(home);
        } else {
            setError("email", {
                message: response.data.message,
            });
        }
    };
    return (
        <>
            <div className="flex flex-col w-80 max-w-md p-6 rounded-md sm:p-10   text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-gray-600">
                        Sign in to access your account
                    </p>
                </div>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
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
                                            className={""}
                                            type={"password"}
                                            placeholder="Passwprd"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            disabled={isSubmitting}
                            type="submit"
                            className="bg-blue-950 rounded-lg text-gray-200 hover:text-gray-800"
                        >
                            {isSubmitting && (
                                <Loader2 className="mx-2 my-2 animate-spin " />
                            )}{" "}
                            {""}submit
                        </Button>
                    </form>
                </Form>
            </div>
        </>
    );
}
