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

export default function Home() {
  return (
    <Layout>
      <Header />
      <Projects />
      {/* <Link name='test' href='#' /> */}
      <Section id='ref2' />
      <Section id='ref3' />
    </Layout>
  );
}
