import { gql } from '@apollo/client';

// notice: a query that fetches a singular piece of data like this one, the instant we refreh it, whichever component is using it will instantly rerender
const GetCurrentUserQuery = gql`
    query GetCurrentUser {
        currentUser {
            id
            email
        }
    }
`;

export default GetCurrentUserQuery;