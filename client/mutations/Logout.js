import { gql } from '@apollo/client';

const LOGOUT = gql`
    mutation Logout {
        logout {
            id
            email
        }
    }
`;

export default LOGOUT;