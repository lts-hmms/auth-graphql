import { gql } from '@apollo/client';

const LogoutMutation = gql`
    mutation Logout {
        logout {
            id
            email
        }
    }
`;

export default LogoutMutation;