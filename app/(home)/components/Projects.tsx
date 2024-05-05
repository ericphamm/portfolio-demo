import React from 'react'
import Title from './Title'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';

export default function Projects() {
	const projects = [
		{
			title: 'Personal Portfolio Website',
			tech: [SiNextdotjs, SiReact, SiTailwindcss],
			link: 'http://localhost:3000/',
			cover: '/project-1.png',
			background : 'bg-indigo-500',
		},
		{
			title: 'Nail Salon Website',
			tech: [SiNextdotjs, SiReact, SiTailwindcss],
			link: 'http://localhost:3000/',
			cover: '/project-2.png',
			background : 'bg-indigo-500',
		},
		{
			title: 'Todo List',
			tech: [SiNextdotjs, SiReact, SiTailwindcss],
			link: 'http://localhost:3000/',
			cover: '/project-3.png',
			background : 'bg-indigo-500',
		},
		{
			title: 'Calculator',
			tech: [SiNextdotjs, SiReact, SiTailwindcss],
			link: 'http://localhost:3000/',
			cover: '/project-4.png',
			background : 'bg-indigo-500',
		},
	]
  return (
	<div className='py-10 p-5 sm:p-0'>
		<Title text="Projects" className='flex flex-col items-center justify-center'/>
		<div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
			{projects.map((project,index)=> {
				return <Link href={project.link} key={index}>
					<div className={cn("p-2 rounded-md",project.background)}>
						<DirectionAwareHover imageUrl={project.cover} className='w-full space-y-5 cursor-pointer'>
							<div className='space-y-5'>
							<h1 className='text-3xl font-bold'>{project.title}</h1>
							<div className='flex items-center gap-5'>
								{project.tech.map((Icon, index) => {
									return <Icon className='w-8 h-8' key={index} />;
								})}
							</div>
							</div>
						</DirectionAwareHover>
					</div>
				</Link>;
			})}

		</div>
	</div>
  )
}
