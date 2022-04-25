import styled from 'styled-components';

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  width: fit-content;

  & + & {
    margin-left: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
