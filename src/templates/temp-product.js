import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Layout from '../components/layout';
import Product from '../components/Product';

const QUERY_ONE_PRODUCT = gql`
  query($productId: Int!) {
    Product: xxxProducts(where: { id: { _eq: $productId } }) {
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
  const { product } = pageContext;

  const {
    loading: loadingProduct,
    error: errorProduct,
    data: dataProduct,
  } = useQuery(QUERY_ONE_PRODUCT, { variables: { productId: product.id } });

  return (
    <Layout>
      {loadingProduct && <p>Loading Product...</p>}
      {errorProduct && <p>Error: ${errorProduct.message}</p>}
      {dataProduct &&
        dataProduct.Product.map(product => (
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
