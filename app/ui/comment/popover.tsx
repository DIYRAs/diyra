'use client';

import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabaseClient';
import { PopoverClose } from '@radix-ui/react-popover';


interface Comment_SubmitProps {
    comment: string,
    onSuccess?: () => void,
    disable: boolean,
    className?: string
}

export const Comment_Submit = ({ comment, onSuccess, disable }: Comment_SubmitProps) => {
    const [username, setUsername] = useState<string>('')

    const handleSubmit = async () => {
        if (comment === '') {
            alert('Kosong')
            return
        }

        const { data, error } = await supabase
            .from('comment')
            .insert([{
                username: username,
                content: comment,
                image: null
            }])
            .select()

        if (error) {
            console.error('Error woi:', error.message)
        } else {
            onSuccess?.()
            console.log(data)
        }
    }

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    disabled={disable}
                    className='w-full px-3 py-4 transition duration-500 ease-in-out border rounded-full cursor-pointer border-black/50 max-w-4/12 hover:text-white hover:bg-black'>
                    {disable ? 'Wait holdon...' : 'Share'}
                </Button>
            </PopoverTrigger>
            <PopoverContent
                side="bottom"
                align="center"
                className="lg:w-[40rem] text-center text-white border-0 bg-zinc-800 flex flex-col place-items-center"
            >
                <p className={`${comment === '' ? 'text-red-400 font-semibold' : 'text-white'}`}>
                    &quot; {comment === '' ? 'You dont think any things? 🤔' : comment} &quot;
                </p>

                <div className="grid items-center w-full max-w-sm gap-3 mt-10">
                    <Label htmlFor="username" className='font-light'>Enter your username first</Label>
                    <Input type="text"
                        id="username"
                        name='username'
                        onChange={(e) => { setUsername(e.target.value) }}
                        placeholder="username"
                        className="border-b rounded-none focus:outline-none focus:ring-0 focus:border-none" />

                    <PopoverClose asChild>
                        <Button
                            onClick={handleSubmit}
                            className='font-semibold text-black transition cursor-pointer bg-zinc-100 hover:-translate-y-0.5'>
                            SEND
                        </Button>
                    </PopoverClose>
                </div>
            </PopoverContent>
        </Popover>
    )
}
