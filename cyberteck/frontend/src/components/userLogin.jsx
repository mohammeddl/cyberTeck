
"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { axiosClient } from "../api/axios";
import { useNavigate } from "react-router-dom";

import {Loader2} from "lucide-react";
import { home } from "../router";

export default function UserLogin() {
    const formSchema = z.object({
      email: z.string().email().min(2).max(50),
      password: z.string().min(8).max(30),
    })

    const navigate = useNavigate()

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "daali@gmail.com",
          password: "123456789",
        },
      })

      const { setError , formState:{isSubmitting} } = form

      const onSubmit = async values => {
            await axiosClient.get('/sanctum/csrf-cookie');
            const data = await axiosClient.post('/api/login', values).then(
                (value)=>{
                  console.log(value)
                    if(value.status === 200){
                        navigate(home)
                    }
                }
            ).catch(({response})=>{
            console.log(response.data.message)
            form.setError('email',{
                message: response.data.message
            })

            })

    };
    return (
    <>
 <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Input className={'bg-slate-500'} type={'password'} placeholder="Passwprd" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isSubmitting} type="submit">{isSubmitting && <Loader2 className="mx-2 my-2 animate-spin"/>} {''}submit</Button>
      </form>
    </Form>
    </>
    )
  }
