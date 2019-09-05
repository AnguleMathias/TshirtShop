import { gql } from 'apollo-boost';

const getProductsQuery = gql`
    {
        product{
            product_id
            name
            price
            discounted_price
            description
            image
            image_2
            thumbnail
            display
        }
    }
`;

const getOneProduct = gql`
  query getOneProduct ($product_id: ID!){
      getSingleProduct(product_id: $product_id){
          product_id
          name
          price
          discounted_price
          description
          image
          image_2
          thumbnail
          display
        }
    }
`;

export { getProductsQuery, getOneProduct };
