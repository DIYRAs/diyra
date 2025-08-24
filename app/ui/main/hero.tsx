import React from 'react'

const Hero = () => {
    const lightEffect: React.ReactNode[] = []

    for (let i = 0; i < 4; i++) {
        lightEffect.push(
            <div key={i}
                style={{
                    top: `${i * 18 + 10}%`, right: `${i * 8 + 20}%`,
                    width: `${i * 2 + 7}rem`, height: `${i * 2 + 7}rem`,
                    animationDelay: `${(Math.random() * 2) * i}s`
                }}
                className={`absolute lightRayAnimation bg-black/10 rounded-full pointer-events-none blur-sm`} />
        )
    }

    return (
        <div className='flex flex-col relative w-full overflow-hidden h-[100dvh] bg-zinc-200 gap-y-3 items-center justify-center'>
            <h1 className='text-5xl font-bold select-none'>
                [ DIYRA ]
            </h1>

            <p className='text-center'>
                Halo, saya DIYRA — seorang web developer yang suka bikin website simpel tapi keren. <br />
                Yuk, kenalan dan lihat apa saja yang sudah saya buat!
            </p>

            {lightEffect.map((item) => (item))}
        </div>
    )
}

export default Hero