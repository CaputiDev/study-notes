import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Componente do Cabeçalho
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/entendendo-algoritmos">
            Começar a Ler 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

// Página Principal
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Início`}
      description="Meus resumos e anotações de estudo">
      
      <HomepageHeader />
      
      <main>
        {/* Seção de Explicação do Conceito */}
        <div className="container padding--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              
              <h2>Sobre este projeto</h2>
              <p>
                Seja bem-vindo ao meu espaço de documentação pessoal (Digital Garden). 
                A ideia deste site é transformar meus estudos em algo tangível e consultável.
              </p>
              
              <p>
                Aqui você encontrará anotações sobre meus estudos téoricos na programação, algoritmos, estruturas de dados
                e outras tecnologias que estou explorando. Ao escrever o que estou estudando retenho melhor o conhecimento e posso compartilhar em uma ambiente aberto.
              </p>

              <h3>O que você vai encontrar:</h3>
              <ul>
                <li>Resumos de livros (como Entendendo Algoritmos).</li>
                <li>Exemplos de códigos.</li>
                <li>Anotações dos meus estudos pessoais.</li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}