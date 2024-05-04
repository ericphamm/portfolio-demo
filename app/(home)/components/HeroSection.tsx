import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Oxygen gets you high. In a cata You accept your fate.  Blank faces, calm as Hindu cows`;

export default function HeroSection() {
  return (
	<div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
		<div className='space-y-10 text-center lg:text-left'>
			<h1 className='text-4xl lg:text-7xl font-bold'>
				Nice to meet you! 
				{/* <br/> <span className='underline underline-offset-8 decoration-green-500'>{"Welcome"}</span> */}
				<TextGenerateEffect words={words} />
			</h1>
			<p className='md:w-96 text-lg text-gray-300'>
				{"I am a front end developer based in Prague."}
			</p>
			<div className='bottom-5 sm:bottom-14 left-0 sm:left-10 '>
				<MovingBorderBtn href={"mailto:themail@gnail.com"} borderRadius='0.5rem' className='p-3 font-semibold'>
					<p>Available for work</p>
				</MovingBorderBtn>
			</div>
		</div>
		<div className='relative'>
			<div className='w-72 h-72 space-y-3 -rotate-[30deg]'>
				<div className='flex gap-3 translate-x-8'>
					<div className='w-32 h-32 rounded-2xl bg-green-500'></div>
					<div className='w-32 h-32 rounded-full bg-indigo-500'></div>
				</div>
				<div className='flex gap-3 -translate-x-8'>
					<div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
					<div className='w-32 h-32 rounded-full bg-green-500'></div>
				</div>
			</div>

		</div>
	</div>
  )
}
