import React from 'react';
// import { graphql } from 'gatsby';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const MY_QUERY = gql`
  {
    car_model(order_by: { id: asc }, limit: 2) {
      model_description
      model_name
      id
    }
  }
`;

export default () => {
  const { loading, error, data } = useQuery(MY_QUERY);
  console.log(data);

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '50px auto' }}>XxX</h1>
      <div
        style={{
          textAlign: 'center',
          width: '600px',
          margin: '50px auto',
          backgroundColor: '#ddd',
          padding: '20px',
        }}
      >
        {loading && <p>Loading...</p>}
        {error && <p>Error: ${error.message}</p>}
        {data.car_model.map(car => (
          <div key={car.id}>
            <h2>{car.model_name}</h2>
            <p>{car.model_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
