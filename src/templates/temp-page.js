import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/layout';
import Product from '../components/Product';

const QUERY_PRODUCTS = gql`
  query($sectionId: Int!) {
    Products: xxxProducts(where: { sections_id: { _eq: $sectionId } }) {
      id
      image
      price
      rating
      title
      sections_id
    }
  }
`;

export default function TempPage({ data, pageContext }) {
  console.log('data: ', data);
  const [state, setState] = useState([]);

  const { page } = pageContext;

  const {
    loading: loadingSpecificTypeOfProducts,
    error: errorSpecificTypeOfProducts,
    data: dataSpecificTypeOfProducts,
  } = useQuery(QUERY_PRODUCTS, { variables: { sectionId: page.id } });

  useEffect(() => {
    if (!loadingSpecificTypeOfProducts) {
      setState(dataSpecificTypeOfProducts.Products);
    }
  }, [loadingSpecificTypeOfProducts]);
  console.log('state: ', state);
  console.log('loadingSpecificTypeOfProducts: ', loadingSpecificTypeOfProducts);

  return (
    <Layout>
      {loadingSpecificTypeOfProducts && <p>Loading Specmain...</p>}
      {errorSpecificTypeOfProducts && (
        <p>Error: ${errorSpecificTypeOfProducts.message}</p>
      )}
      {state &&
        state.map(product => (
          <Product
            sections_id={product.sections_id}
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
          />
        ))}
    </Layout>
  );
}
