"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import LogoCarousel from '@/components/ui/logo-carousel';

export default function Skills() {
	const skills = [
		{
			text: 'React',
			Icon: SiReact,
		},
		{
			text: 'Next.js',
			Icon: SiNextdotjs,
		},
		{
			text: 'TailwindCSS',
			Icon: SiTailwindcss,
		},
		{
			text: 'React',
			Icon: SiReact,
		},
		{
			text: 'Next.js',
			Icon: SiNextdotjs,
		},
		{
			text: 'TailwindCSS',
			Icon: SiTailwindcss,
		},
		{
			text: 'TailwindCSS',
			Icon: SiTailwindcss,
		},
		{
			text: 'TailwindCSS',
			Icon: SiTailwindcss,
		},
	]
  return (
	<div className='max-w-5xl mx-auto px-8'>
		<Title text="Skills" className='flex flex-col items-center justify-center'/>
		<HoverEffect items={skills}/>
		<div>
		<LogoCarousel/>
		</div>

	</div>
  )
}