import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/layout';
import Product from '../components/Product';

const QUERY_FROM_XXXPRODUCTS = gql`
  query($sectionId: Int!) {
    xxxProducts(where: { sections_id: { _eq: $sectionId } }) {
      id
      image
      price
      rating
      title
      sections_id
    }
  }
`;

export default function TempPage({ pageContext }) {
  const { page, all, headerText } = pageContext;

  const {
    loading: loadingQueryFromxxxProducts,
    error: errorQueryFromxxxProducts,
    data: dataQueryFromxxxProducts,
  } = useQuery(QUERY_FROM_XXXPRODUCTS, { variables: { sectionId: page.id } });

  return (
    <Layout all={all} headerText={headerText}>
      {loadingQueryFromxxxProducts && <p>Loading Specmain...</p>}
      {errorQueryFromxxxProducts && (
        <p>Error: ${errorQueryFromxxxProducts.message}</p>
      )}
      {dataQueryFromxxxProducts &&
        dataQueryFromxxxProducts.xxxProducts.map(product => (
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