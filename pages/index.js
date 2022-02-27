import DotCursor from '../component/DotCursor/DotCursor';
import Header from '../component/Header/Header';
import styles from '../styles/Home.module.css';
import Particles from '../component/Particles/Particles';
import Link from '../component/Link/Link';
import Section from '../component/Section/Section';
import Layout from '../component/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Header />
      {/* <Link name='test' href='#' /> */}
      <Section id='ref1' />
      <Section id='ref2' />
      <Section id='ref3' />
    </Layout>
  );
}
