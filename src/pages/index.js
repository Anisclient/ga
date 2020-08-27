import React from 'react';
import Layout from '../components/layout';
import { gql, useQuery } from '@apollo/client';
import Product from '../components/Product';

const QUERY_ALL_PRODUCTS = gql`
  {
    xxxProducts {
      id
      image
      price
      rating
      title
      sections_id
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(QUERY_ALL_PRODUCTS);

  return (
    <Layout headerText="All products">
      {loading && <p>Loading main...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data &&
        data.xxxProducts.map(product => (
          <Product
            section={product.sections_id}
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
            sections_id={product.sections_id}
          />
        ))}
    </Layout>
  );
};
