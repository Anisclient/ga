import React, { useState, useEffect } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import Product from '../components/Product';
import Header from '../components/Header';
import Aside from '../components/Aside';
import './index.css';

const MY_QUERY_XXX_X = gql`
  {
    xxx_x {
      id
      image
      price
      rating
      title
      xxx_id
    }
  }
`;

const MY_QUERY_XXX = gql`
  {
    xxx {
      id
      section
    }
  }
`;

const SPEC_QUERY_XXX_X = gql`
  query ZaprosSpec($fromxxx_id: Int!) {
    xxx_x(where: { xxx_id: { _eq: $fromxxx_id } }) {
      id
      image
      price
      rating
      title
      xxx_id
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(MY_QUERY_XXX_X);
  const { data: dataX, error: errorX, loading: loadingX } = useQuery(
    MY_QUERY_XXX
  );

  const [section, setSection] = useState(null);
  console.log('section: ', section);

  const [
    fetchSpecificSection,
    { loading: loadingSpec, error: errorSpec, data: dataSpec },
  ] = useLazyQuery(SPEC_QUERY_XXX_X);

  useEffect(() => {
    if (dataSpec && dataSpec.xxx_x) {
      setSection(dataSpec.xxx_x);
    }
  }, [dataSpec]);

  return (
    <div className="wrapper">
      <Header />
      <div className="main">
        <div className="main__aside">
          {loadingX && <p>Loading aside...</p>}
          {errorX && <p>Error: ${errorX.message}</p>}
          {dataX &&
            dataX.xxx.map(xx => (
              <Aside
                fetchSpecificSection={fetchSpecificSection}
                section={xx.section}
                key={xx.id}
                id={xx.id}
              />
            ))}
        </div>
        <div className="main__products">
          {section
            ? (loadingSpec && <p>Loading Specmain...</p>,
              errorSpec && <p>Error: ${errorSpec.message}</p>,
              section.map(x => (
                <Product
                  key={x.id}
                  title={x.title}
                  price={x.price}
                  rating={x.rating}
                  image={x.image}
                />
              )))
            : (console.log('section false'),
              loading && <p>Loading main...</p>,
              error && <p>Error: ${error.message}</p>,
              data &&
                data.xxx_x.map(x => (
                  <Product
                    key={x.id}
                    title={x.title}
                    price={x.price}
                    rating={x.rating}
                    image={x.image}
                  />
                )))}
        </div>
      </div>
      <button>Load more</button>
    </div>
  );
};
