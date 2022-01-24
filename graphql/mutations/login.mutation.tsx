import { gql } from '@apollo/client';

export const LoginMutation = gql`
    mutation Login($email: String!, $password: String!) {
        login(input: { identifier: $email, password: $password }) {
            jwt
            user {
                id
                username
                email
            }
        }
    }
`;

export type LoginVariableProps = {
    params: Record<keyof any, string> | undefined
}

export const LoginVariables = ({ params }: LoginVariableProps) => ({
  email: params.email,
  password: params.password,
});
