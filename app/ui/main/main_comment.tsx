'use client';

import React, { useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import TextareaAutosize from "react-textarea-autosize"
import { Comment_Submit } from '../comment/popover';
import { supabase } from '@/lib/supabaseClient';

type Comment = {
    id: number,
    username: string,
    content: string,
    image: string | null,
    created_at: string
}

const Main_Comment = () => {
    const [userComment, setUserComment] = useState<string>('')
    const [dataComment, setDataComment] = useState<Comment[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const loadComment = async () => {
        setIsLoading(true)
        const { data: comment, error } = await supabase
            .from('comment')
            .select('*')
            .order('id', { ascending: false })

        if (error) console.error(error)
        else {
            setDataComment(comment)
            setUserComment('')
        }
        setIsLoading(false)
    }

    useEffect(() => {
        loadComment()
    }, [])

    return (
        <div className='flex flex-col items-center justify-start w-full min-h-screen max-h-[200vh] overflow-auto p-10'>
            <h2 className='text-2xl italic font-semibold'>
                What do you think? 💭
            </h2>

            <div className='flex flex-col items-center justify-center w-full mt-10 space-y-3'>
                <TextareaAutosize
                    placeholder="Share your thoughts"
                    name='comment'
                    value={userComment}
                    onChange={(e) => { setUserComment(e.target.value) }}
                    style={{ scrollbarWidth: 'none' }}
                    className="w-full px-4 py-2 text-center border-b resize-none focus:outline-0 max-h-32 h-14 rounded-2xl border-black/40 lg:w-7/12"
                />
                <Comment_Submit
                    disable={isLoading}
                    comment={userComment}
                    onSuccess={loadComment} />

                <div className='flex flex-wrap items-start justify-center w-full gap-4'>
                    {dataComment ? dataComment.map((item, index) => (
                        <Card key={index} className="w-full max-w-sm">
                            <CardHeader>
                                <CardTitle>{item.username}</CardTitle>
                                <CardDescription>
                                    {item.content}
                                </CardDescription>
                            </CardHeader>
                            {item.image && (
                                <CardContent>
                                    <div className='*:max-h-[250px]'>
                                        <Image
                                            src={'/images/ph.webp'}
                                            alt='Umm deskiption'
                                            width={300}
                                            height={150}
                                            className='object-cover object-center w-full h-full' />
                                    </div>
                                </CardContent>
                            )}
                        </Card>
                    )) : (
                        <p className='text-xl italic'>No comment yet...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main_Comment