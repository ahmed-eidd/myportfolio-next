import React, { useRef, useEffect } from 'react';
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
import SplashScreen from '../component/SplashScreen/SplashScreen';
import LoadingScreen from '../component/LoadingScreen/LoadingScreen';

export default function Home() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <Layout>
      <Header aboutRef={aboutRef} projectsRef={projectsRef} />
      <Section ref={projectsRef}>
        <Projects />
      </Section>
      <Section ref={aboutRef}>
        <AboutMe />
      </Section>
    </Layout>
  );
}
