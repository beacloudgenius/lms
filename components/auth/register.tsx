'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
// import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
// import { cn } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { signUpWithEmailAndPassword } from './actions'

const FormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1, {
      message: 'Password is required.'
    }),
    confirm: z.string().min(1, {
      message: 'Password is required.'
    })
  })
  .refine(data => data.confirm === data.password, {
    message: 'Password did not match',
    path: ['confirm']
  })
export default function RegisterForm() {
  let [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirm: ''
    }
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      const result = await signUpWithEmailAndPassword(data)
      const { error } = JSON.parse(result)
      if (error?.message) {
        toast({
          variant: 'destructive',
          title: 'You submitted the following values:',
          description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
              <code className='text-white'>{error.message}</code>
            </pre>
          )
        })
      } else {
        toast({
          title: 'You successfully registered.',
          description: (
            <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
              <code className='text-white'>Registration complete</code>
            </pre>
          )
        })
      }
    })
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Registration is FREE</CardTitle>
          <CardDescription>
            Please set up your account here and look for an email from us that would confirm your
            address.
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-2'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-6'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='your@email.address'
                        {...field}
                        type='email'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Password'
                        {...field}
                        type='password'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirm'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder='Confirm Password'
                        {...field}
                        type='password'
                        onChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter>
                <Button type='submit'>Register</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  )
}
