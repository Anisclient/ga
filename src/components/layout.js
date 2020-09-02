import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import './layout.css';
import { useStaticQuery, graphql } from 'gatsby';

export default function Layout({ children }) {
  const QUERY_SECTIONS = graphql`
    {
      Sections: xxxSections {
        id
        section
      }
    }
  `;

  const dataOfSection = useStaticQuery(QUERY_SECTIONS);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="main__aside">
          {dataOfSection &&
            dataOfSection.Sections.map(s => (
              <Aside section={s.section} key={s.id} id={s.id} />
            ))}
        </div>
        <div className="main__products">{children}</div>
      </div>
    </div>
  );
}
