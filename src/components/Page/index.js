import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Content from '../Content';
import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Page({ currentPage }) {

  const renderPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage.name)}</h2>
      <Content>{renderPage()}</Content>
    </section>
  );
}
export default Page;
