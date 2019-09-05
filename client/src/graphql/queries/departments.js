import { gql } from  'apollo-boost';

const GET_DEPARTMENT_QUERY = gql`
  {
    department {
      name
      description
      department_id
    }
  }
`;

export default GET_DEPARTMENT_QUERY;
