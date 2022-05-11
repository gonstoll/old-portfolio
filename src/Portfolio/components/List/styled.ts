import styled from 'styled-components';

interface ListProps {
  inline?: boolean;
}

export const StyledList = styled.ul<ListProps>`
  margin: 0;
  padding: 0;
  display: ${props => props.inline ? 'flex' : null};
  align-items: center;
  flex-wrap: wrap;

  li {
    list-style-type: none;
    & + li {
      margin-left: ${props => (props.inline ? '1rem' : null)};
    }
  }
`;
