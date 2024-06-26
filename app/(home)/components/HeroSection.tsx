import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'
import Title from './Title'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Oxygen gets you high. In a cata You accept your fate.  Blank faces, calm as Hindu cows`;

export default function HeroSection() {
  return (
	<div className='min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between animate-move-up'>
		<div className='space-y-10 text-center lg:text-left '>
			<h1 className='text-4xl lg:text-7xl font-bold'>
				Nice to meet you! 
				{/* <br/> <span className='underline underline-offset-8 decoration-green-500'>{"Welcome"}</span> */}
				<TextGenerateEffect words={words} />
			</h1>
			<p className='md:w-96 text-lg text-gray-300'>
				{"I am a front end developer based in Prague."}
			</p>
			<div className='bottom-5 sm:bottom-14 left-0 '>
				<MovingBorderBtn href={"mailto:themail@gnail.com"} borderRadius='0.5rem' className='p-3 font-semibold hover:bg-slate-800/[0.8] hover:border-[#3c82b5] backdrop-blur-xl text-white'>
					<p className='px-5 text-1xl'>Get in touch!</p>
				</MovingBorderBtn>
			</div>
		</div>
		<div className=''>
			<div className='w-96 h-96'>
				<img src="heroimg.png" alt="" />
			</div>

		</div>
	</div>
  )
}
