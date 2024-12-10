// import {BiLogoPostgresql, } from 'react-icons/bi';
import {FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass} from 'react-icons/fa';
import {
  SiC,
  SiCplusplus,
  SiExpress,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export const skillset = [
  {
    name: '',
    items: [
      {
        label: 'C++',
        icon: <SiCplusplus color="#00599C" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'C',
        icon: <SiC color="#A8B9CC" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'Java',
        icon: <SiJavascript color="#007396" className="text-[48px] sm:text-[64px]" />,
        experience: 1,
      },
      {
        label: 'Python',
        icon: <SiPython color="#3776AB" className="text-[48px] sm:text-[64px]" />,
        experience: 1,
      },
      {
        label: 'Javascipt',
        icon: <SiJavascript color="#E9D54B" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'TypeScript',
        icon: <SiTypescript color="#2F75C0" className="text-[48px] sm:text-[64px]" />,
        experience: 1,
      },
    ],
  },
  {
    name: 'Front-End',
    items: [
      {
        label: 'React',
        icon: <FaReact color="#5ED4F4" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'Next.js',
        icon: <SiNextdotjs className="text-[48px] text-white light:text-black sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'HTML5',
        icon: <FaHtml5 color="#DE4B25" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'CSS3',
        icon: <FaCss3 color="#2873BC" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'SASS/SCSS',
        icon: <FaSass color="#CE6C9C" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'Tailwind',
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
    ],
  },
  {
    name: 'Back-End',
    items: [
      {
        label: 'Node.js',
        icon: <FaNodeJs color="#86cf35" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
      {
        label: 'Express',
        icon: <SiExpress color="#818283" className="text-[48px] sm:text-[64px]" />,
        experience: 2,
      },
    ],
  }
];
