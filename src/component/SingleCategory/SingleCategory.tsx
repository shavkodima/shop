import React from 'react';
import { useParams } from 'react-router-dom';
import Poster from '../Poster/Poster';

const SingleCategory = () => {
  const { id } = useParams();

  return (
    <>
      <Poster />

      <section>Single product {id}</section>
    </>
  );
};

export default SingleCategory;
