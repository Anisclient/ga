import React from 'react';
import './Aside.css';
import { Link } from 'gatsby';

function Aside({ section }) {
  return (
    <aside className="aside">
      <Link
        to={section === 'allproducts' ? `/` : `/${section}`}
        className="aside__item"
      >
        {section}
      </Link>
    </aside>
  );
}

export default Aside;
