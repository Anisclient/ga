import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/layout';
import Product from '../components/Product';

const QUERY_ONE_PRODUCT = gql`
  query($productId: Int!) {
    xxxProducts(where: { id: { _eq: $productId } }) {
      id
      sections_id
      title
      rating
      price
      image
    }
  }
`;

export default function TempProduct({ pageContext }) {
  const { product, all, headerText } = pageContext;

  const {
    loading: loadingProduct,
    error: errorProduct,
    data: dataProduct,
  } = useQuery(QUERY_ONE_PRODUCT, { variables: { productId: product.id } });

  return (
    <Layout all={all} headerText={headerText}>
      {loadingProduct && <p>Loading Specmain...</p>}
      {errorProduct && <p>Error: ${errorProduct.message}</p>}
      {dataProduct &&
        dataProduct.xxxProducts.map(product => (
          <Product
            sections_id={product.sections_id}
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            rating={product.rating}
            image={product.image}
            oneProductInPage
          />
        ))}
    </Layout>
  );
}
