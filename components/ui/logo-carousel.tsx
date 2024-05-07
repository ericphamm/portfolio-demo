import { SiAstro, SiJavascript, SiLinux, SiNextdotjs, SiPostgresql, SiReact, SiTypescript } from "react-icons/si";

export default function LogoCarousel() {

  const logos = [
    { Icon: SiReact, alt: 'React' },
    { Icon: SiNextdotjs, alt: 'React' },
    { Icon: SiTypescript, alt: 'React' },
    { Icon: SiAstro , alt: 'React' },
    { Icon: SiPostgresql, alt: 'React' },
    { Icon: SiLinux, alt: 'React' },
    { Icon: SiJavascript , alt: 'React' },
]

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <logo.Icon className="text-5xl"/>
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo, index) => (
          <li key={index}>
            <logo.Icon className="text-5xl"/>
          </li>
        ))}
      </ul>
    </div>
  )
}