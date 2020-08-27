import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import './layout.css';
import { useStaticQuery, graphql } from 'gatsby';

export default function Layout({ children, all, headerText }) {
  const QUERY_SECTIONS = graphql`
    {
      xxxSections {
        id
        section
      }
    }
  `;

  const dataOfSection = useStaticQuery(QUERY_SECTIONS);

  return (
    <div className="wrapper">
      <Header headerText={headerText} />
      <div className="main">
        <div className="main__aside">
          {dataOfSection &&
            dataOfSection.xxxSections.map(s => (
              <Aside section={s.section} key={s.id} id={s.id} />
            ))}
          {all && <Aside section="allproducts" />}
        </div>
        <div className="main__products">{children}</div>
      </div>
    </div>
  );
}
