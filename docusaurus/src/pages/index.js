import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useGlobalData from '@docusaurus/useGlobalData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {

  const globalData = useGlobalData();
  const context = useDocusaurusContext();
  const firstDocPath = globalData['first-doc-path-plugin']?.default?.firstDocPath;
  const docPath = firstDocPath || 'ADRs/adr-default-2'; // Fallback

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {context.siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{context.siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to={`/docs/${docPath}`}
          >
            Explore Knowledge Area 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
