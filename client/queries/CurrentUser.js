import { gql } from '@apollo/client';

const GET_CURRENTUSER = gql`
    query GetCurrentUser {
        currentUser {
            id
            email
        }
    }
`;

export default GET_CURRENTUSER;