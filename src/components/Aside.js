import React from 'react';
import './Aside.css';
import { Link } from 'gatsby';

function Aside({ id, section, fetchSpecificSection }) {
  return (
    <aside className="aside">
      <Link
        to="/"
        onClick={() => fetchSpecificSection({ variables: { fromxxx_id: id } })}
        className="aside__item"
      >
        {section}
      </Link>
    </aside>
  );
}

export default Aside;
