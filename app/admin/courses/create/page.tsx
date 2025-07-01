"use client"

import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowLeft, SparkleIcon,Plus } from 'lucide-react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
//   CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { CourseCategories, courseLevel, CourseSchema, CourseSchemaType, CourseStatus } from '@/lib/ZodShema'
import { zodResolver } from "@hookform/resolvers/zod"
import slugify from "slugify"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function CreatePage() {

     const form = useForm<CourseSchemaType>({
    resolver: zodResolver(CourseSchema),
    defaultValues: {
    title:"",
    descrepton:"",
    filekey:"",
    price:0,
    smallDescription:"",
    level:"Beginner",
    status:"Draft",
    duration:0,
    category:"E-commerce",
    slug:""

    },
  })

    function onSubmit(values:CourseSchemaType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <main className='mx-5'>
    <div className='flex items-center gap-4'>
        <Link href='/admin/courses' className={buttonVariants()}>
         <ArrowLeft className='size-4' />
        </Link>
        <h1 className="text-4xl font-semibold">Create a Course</h1>
    </div>

      <Card className="w-full max-w-7xl m-6 ">
      <CardHeader>
        <CardTitle>Create your course</CardTitle>
        <CardDescription>
          Enter the information for your course
        </CardDescription>
      </CardHeader>
      <CardContent>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
         <div className='flex gap-4'>
         <FormField
            control={form.control}
            name="title"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Title </FormLabel>
                <FormControl>
                 <Input placeholder="title" {...field} />
                 </FormControl>
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>

            <div className='flex gap-4 items-end'>
         <FormField
            control={form.control}
            name="slug"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Slug </FormLabel>
                <FormControl>
                 <Input placeholder="slug" {...field} />
                 </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
             <Button type="button" onClick={() =>{
                const titlevalue = form.getValues('title')
                const slug = slugify(titlevalue)
                form.setValue('slug',slug,{shouldValidate:true})
             }}>
               Generate slug <SparkleIcon className='ml-1' size={16} />
            </Button>
            </div>

              <FormField
            control={form.control}
            name="smallDescription"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Small Descreption </FormLabel>
                <FormControl>
                 <Textarea placeholder="small descreption" {...field} />
                 </FormControl>
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

          <FormField
            control={form.control}
            name="descrepton"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Descreption </FormLabel>
                <FormControl>
                 <Textarea placeholder="descreption" {...field} />
                 </FormControl>
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
            control={form.control}
            name="filekey"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Thumbail image </FormLabel>
                <FormControl>
                 <Input placeholder="thumbail url" {...field} />
                 </FormControl>
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex justify-center items-center gap-6'>
             <FormField
            control={form.control}
            name="category"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Category </FormLabel>
                
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-full">
                             <SelectValue placeholder="Select a category" />
                            </SelectTrigger>   
                        </FormControl>
                        <SelectContent>
                            {CourseCategories.map((category) =>(
                                <SelectItem key={category} 
                                value={category}>{category}</SelectItem>
                            ))}
                        </SelectContent>
                        
                    </Select>
                 {/* <Input placeholder="category" {...field} /> */}
                 
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

           <FormField
            control={form.control}
            name="level"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Level </FormLabel>
                
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-full">
                             <SelectValue placeholder="Select a category" />
                            </SelectTrigger>   
                        </FormControl>
                        <SelectContent>
                            {courseLevel.map((level) =>(
                                <SelectItem key={level} 
                                value={level}>{level}</SelectItem>
                            ))}
                        </SelectContent>
                        
                    </Select>
                
                 
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

           <FormField
            control={form.control}
            name="status"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Status </FormLabel>
                
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                            <SelectTrigger className="w-full">
                             <SelectValue placeholder="Select a category" />
                            </SelectTrigger>   
                        </FormControl>
                        <SelectContent>
                            {CourseStatus.map((status) =>(
                                <SelectItem key={status} 
                                value={status}>{status}</SelectItem>
                            ))}
                        </SelectContent>
                        
                    </Select>
                
                 
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        </div>

        <div className='flex justify-center items-center gap-4'>
            <FormField
            control={form.control}
            name="duration"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Duration (hour) </FormLabel>
                <FormControl>
                 <Input type='number' placeholder="" {...field} />
                 </FormControl>
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> 

          <FormField
            control={form.control}
            name="price"
              render={({ field }) => (
                <FormItem>
                <FormLabel>Price ($) </FormLabel>
                <FormControl>
                 <Input type='number' placeholder="" {...field} />
                 </FormControl>
                <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> 
        </div>

       <Button>
        Create Course <Plus />
       </Button>
         
        </form>

       </Form>
      </CardContent>
      {/* <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter> */}
    </Card>
    </main>
  )
}

