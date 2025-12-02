import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Resumos de Livros',
    description: (
      <>
        Compilações da minha experiência como leitor, especialmente de obras técnicas,
        focando no que realmente importa.
      </>
    ),
  },
  {
    title: 'Documentação Prática',
    description: (
      <>
        Soluções práticas, algoritmos que desenvolvi e padrões de projeto que utilizo
        nos meus estudos e desenvolvimentos.
      </>
    ),
  },
  {
    title: 'Diário de Estudos',
    description: (
      <>
        Anotações sobre meu aprendizado, erros que cometi (e como resolvi)
        além de registrar minha evolução.
      </>
    ),
  },

];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md padding-vert--md">
        <div className={styles.featureCard}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Study Notes
        </Heading>
        <p className="hero__subtitle">
          Explorando códigos, algoritmos e novas tecnologias.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/livros">
            Começar a Ler
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Início`}
      description="Notas de estudo e documentação pessoal">

      <HomepageHeader />

      <main>
        <div className={styles.aboutSection}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2>O propósito deste lugar</h2>

                <p className="text--lg">
                  <p>Esse local é considerado um{" "}
                  <span
                    className={styles.digitalGarden}
                    data-text=''>
                    Digital Garden 
                  </span>
                  
                  , o espaço onde ideias e anotações são plantadas, cultivadas e crescem com o tempo, sem a pressão de ser algo sério ou "profissional".
                </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}