import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { useColorMode } from '@docusaurus/theme-common'

const FeatureList = [
  {
    title: 'Comprehensive Architecture Insights',
    scale: 1.0,
    fill: '#000000',
    id: 'insights',
    Svg: require('@site/static/img/insights.svg').default,
    description: (
      <>
        Explore detailed Architecture Golden Paths that document key 
        technical choices, providing clarity and context for your applications.
      </>
    ),
  },
  {
    title: 'Reusable Design Patterns and Frameworks',
    scale: 1.0,
    fill: '#000000',
    id: 'design',
    Svg: require('@site/static/img/design.svg').default,
    description: (
      <>
        Utilize documented design patterns and frameworks to build consistent, scalable, and 
        efficient solutions for your engineering projects.
      </>
    ),
  },
  {
    title: 'Centralized Knowledge Hub',
    scale: 1.0,
    fill: '#000000',
    id: 'hub',
    Svg: require('@site/static/img/hub.svg').default,
    description: (
      <>
        Access all technical documentation in one place, empowering teams with a unified resource 
        for best practices and guidelines in the Engineering Portal.
      </>
    ),
  },
];

function Feature({scale, fill, id, Svg, title, description}) {
  // Custom code to change the fill color of the Cloud Arrow Up SVG
  // depending on if user is in dark/light mode
  const {colorMode} = useColorMode()
  if ( (id === 'insights' || id ==='design' || id ==='hub' ) && colorMode === 'light' ) {
    fill = 'black' // Battleship Gray
  } else if ( (id === 'insights' || id ==='design' || id ==='hub' ) && colorMode === 'dark') {
    fill = 'white' 
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg transform={"scale(" + scale + ")"} fill={fill} id={id} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
