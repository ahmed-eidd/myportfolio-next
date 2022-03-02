import DotCursor from '../component/DotCursor/DotCursor';
import Header from '../component/Header/Header';
import styles from '../styles/Home.module.css';
import Particles from '../component/Particles/Particles';
import Link from '../component/Link/Link';
import Section from '../component/Section/Section';
import Layout from '../component/Layout/Layout';
import Project from '../component/Project/Project';
import { motion } from 'framer-motion';
import Projects from '../component/Projects/Projects';
import AboutMe from '../component/AboutMe/AboutMe';
import Tabs from '../component/Tabs/Tabs';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Projects />
      <AboutMe />
      <Tabs>
        <p> hello world </p>
      </Tabs>
    </Layout>
  );
}
