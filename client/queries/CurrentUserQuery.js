import { gql } from '@apollo/client';

const GetCurrentUserQuery = gql`
    query GetCurrentUser {
        currentUser {
            id
            email
        }
    }
`;

export default GetCurrentUserQuery;