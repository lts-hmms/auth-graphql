import { gql } from '@apollo/client';

const LoginMutation = gql`
    mutation Login($email: String, $password: String) {
        login(email: $email, password: $password) {
            id
            email
        }
    }
`;

export default LoginMutation;
