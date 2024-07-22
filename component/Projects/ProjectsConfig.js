import WarshatnaImg from '../../public/Projects/warshatna.png';
import MovieBoxImg from '../../public/Projects/moviebox.png';
import VisitksaImg from '../../public/Projects/visitksa.png';
import ElSupplierImg from '../../public/Projects/elsupplier.png';
import UpstageImg from '../../public/Projects/upstage-project.jpg';
import HemaImg from '../../public/Projects/ibrahim-porfolio.jpg';

export const projectsConfing = [
  {
    name: 'Visitksa',
    description: `VisitSA.com is an advanced online platform designed to enhance the travel and tourism experience in Saudi Arabia and worldwide
It simplifies finding your next destination by offering a wide range of tourism packages and activities in its e-marketplace,
`,
    link: 'https://visitksa.com/',
    tech: [
      'React',
      'Next.js',
      'Typescript',
      'Redux',
      'Tanstack-Query (React-Query)',
    ],
    img: VisitksaImg,
  },
  {
    name: 'ElSupplier',
    description: `ElSupplier is a platform that connects suppliers with buyers and helps them find the best deals and discounts. It also provides a secure payment system for buyers to pay their suppliers.`,
    tech: [
      'React',
      'Next.js',
      'Typescript',
      'Redux',
      'Tanstack-Query (React-Query)',
    ],
    link: 'https://www.elsupplier.com/',
    img: ElSupplierImg,
  },
  {
    name: 'Warshatna',
    description:
      'Warshanta is the global marketplace for unique and creative goods. It’s home to a universe of special, extraordinary items, from unique handcrafted pieces to vintage treasures.',
    tech: ['React', 'React Router', 'Redux', 'Redux-Saga'],
    link: 'https://warshatna.com/',
    github: null,
    img: WarshatnaImg,
  },
  // {
  //   name: 'Movie Box',
  //   description:
  //     'MoveBox is a movie project based on an online database of information related to films, television series, including cast, production crew and personal biographies, ratings.',
  //   tech: ['React', 'React Router', 'Redux', 'Redux-Thunk', 'Sass'],
  //   link: 'https://movieboxx.netlify.app/',
  //   github: 'https://github.com/ahmed-eidd/movie-app',
  //   img: MovieBoxImg,
  // },
  //
  // {
  //   name: 'Upstage',
  //   description:
  //     'Upstage is a theater platform that all theatre professionals will use to manage their careers, performances, actors, production teams and help market performances to the public.',
  //   tech: ['React', 'Redux', 'React Router', 'Chakra UI'],
  //   link: 'https://upstage-site.netlify.app/',
  //   github: 'https://github.com/ahmed-eidd/upstage',
  //   img: UpstageImg,
  // },
  // {
  //   name: 'Photographer Portfolio',
  //   description:
  //     'Photographer Portfolio for a Photographer called ibrahim showcasing some of his work, built with Html Sass Js',
  //   tech: ['Html', 'Sass', 'Javascript'],
  //   link: 'https://ibrahimmaddy.netlify.app/',
  //   github: 'https://github.com/ahmed-eidd/Ibrahim-Portfolio',
  //   img: HemaImg,
  // },
];
