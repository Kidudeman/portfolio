import {FaNodeJs} from 'react-icons/fa';
import {SiPython} from 'react-icons/si';

import {
  SiVercel,
  SiJavascript,
  SiExpress,
  SiTypescript,
  SiUnrealengine
} from 'react-icons/si';

import btfLofo from 'assets/images/btf-logo.png';
import cfLofo from 'assets/images/cfLogo.png';
import s2eLofo from 'assets/images/s2e-logo.webp';


export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const customProjects: Project[] = [
  {
    name: 'Unreal Engine Game',
    description: `Team size: 5. Labyrinth is an interactive game application where you, the player, 
    awaken in an abandoned maze-like structure and the goal is to find a way out. However, this maze is not a typical maze. 
    This maze combines vertical and horizontal level design, and you are given a gravity gun to solve the puzzles and progress through all the levels. 
    The deeper you venture through the maze, the more surreal the journey becomes. The final level is the boss level and after beating the boss, the game ends.`,
    img: cfLofo,
    stack: [
      <SiUnrealengine key="UE 5.4" color="#2F75C0" className="text-[28px]" />,
    ],
    url: 'https://drive.google.com/file/d/1cMaQHp9XyY3dOFdfivtV2brhTIDqrI9j/view?usp=drive_link'
  },
  {
    name: 'Kahoot Quiz Web App (Backend)',
    description: `Team size: 5. Platform that supports athletes in their development on and off the field by giving them the tools to understand who they are and share
    the context to their performance and their growth as a human being with the people most important to them on their journey.`,
    img: btfLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <SiJavascript key="js" color="#E9D54B" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiExpress key="express" color="#86cf35" className="text-[28px]" />,
      <SiVercel key="vercel" color="#DA224C" className="text-[28px]" />,
    ],
    url: 'https://github.com/Kidudeman/toohak-back'
  },
  {
    name: 'Peer-to-Peer Torrenting system ',
    description: `Team size: 1. A permissioned, peer-to-peer file sharing system with a centralised indexing server. The applications are based on both
    client-server and peer-to-peer models, consisting of one server and multiple clients. All client-server communication is over UDP. All peer-to-peer 
    communication is over TCP.
    `,
    img: s2eLofo,
    stack: [
      <SiPython key="python" color="#2F75C0" className="text-[28px]" />,
    ],
    url: 'https://github.com/Kidudeman/P2P-torrent/tree/main'
  },

];