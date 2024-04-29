import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
  return (
	<div>
		<div>
			<h1>
				Nice to meet you! 
				<br/> <span>{"Welcome"}</span>
			</h1>
			<p>
				{"I am a front end developer based in Prague."}
			</p>
			<Link href={"mailto:themail@gnail.com"}>
				<div>
					<h1>Get in touch!</h1>
				</div>
			</Link>
		</div>
		<div>
			<div className='w-72 h-72'>
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
