import React from 'react'
import {
    Card,
    CardContent,
} from "@/components/ui/card"
import Image from 'next/image'

const Main_Project = () => {
    return (
        <div className='flex flex-col items-center justify-center w-full min-h-screen'>
            <div className='flex flex-wrap items-center justify-center w-full gap-4'>
                <Card className="max-w-sm">
                    <CardContent>
                        <Image
                            src={'/images/ph.webp'}
                            alt='deskipsu'
                            width={100}
                            height={100} />
                    </CardContent>
                </Card>
                <Card className="max-w-sm">
                    <CardContent>
                        <Image
                            src={'/images/ph.webp'}
                            alt='deskipsu'
                            width={100}
                            height={100} />
                    </CardContent>
                </Card>
                <Card className="max-w-sm">
                    <CardContent>
                        <Image
                            src={'/images/ph.webp'}
                            alt='deskipsu'
                            width={100}
                            height={100} />
                    </CardContent>
                </Card>
                <Card className="max-w-sm">
                    <CardContent>
                        <Image
                            src={'/images/ph.webp'}
                            alt='deskipsu'
                            width={100}
                            height={100} />
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Main_Project