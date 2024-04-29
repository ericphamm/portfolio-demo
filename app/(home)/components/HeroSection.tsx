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

	</div>
  )
}
