import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
	<div className='min-h-[60vh] flex items-center justify-between'>
		<div className=''>
			<h1 className='text-4xl lg:text-7xl font-bold'>
				Nice to meet you! 
				<br/> <span className='underline underline-offset-8 decoration-green-500'>{"Welcome"}</span>
			</h1>
			<p className='md:w-96 text-lg text-gray-300'>
				{"I am a front end developer based in Prague."}
			</p>
			<Link href={"mailto:themail@gnail.com"} className=' inline-block group'>
				<div>
					<h1 className='text-3xl font-bold group-hover:text-green-400 transition-all '>Get in touch!</h1>
					<div className='w-40 h-2 bg-green-500 rounded-full'></div>
					<div className='w-40 h-2 bg-indigo-500 rounded-full translate-x-2'></div>
				</div>
			</Link>
		</div>
		<div>
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
