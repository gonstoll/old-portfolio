import styled from 'styled-components';
import {Theme} from '../../entities';
import {themes} from '../../theme';

interface Props {
  themeColor: Theme;
  align: 'left' | 'right' | 'center';
}

export const StyledToggle = styled.button<Props>`
  position: relative;
  display: flex;
  ${({align}) => {
    switch (align) {
      case 'right':
        return 'margin-left: auto;';
      case 'center':
        return 'margin: 0 auto;';
      default:
        return '';
    }
  }}
  width: 36px;
  height: 18px;
  border: 1px solid ${({themeColor}) => themes.get(themeColor)?.color};
  border-radius: 10px;
  cursor: pointer;
  appearance: none;
  background-color: transparent;
  color: inherit;

  &::before {
    position: absolute;
    content: '';
    height: 15px;
    width: 15px;
    left: 1px;
    top: 50%;
    border-radius: 50%;
    transition: 0.4s;
    background-color: ${({themeColor}) => themes.get(themeColor)?.color};
    transform: ${({themeColor}) =>
      themeColor === 'light' ? 'translateY(-50%)' : 'translate(17px, -50%)'};
  }

  &::after {
    content: "${({themeColor}) => (themeColor === 'light' ? '☾' : '☼')}";
    position: absolute;
    right: ${({themeColor}) => (themeColor === 'light' ? '4px' : null)};
    left: ${({themeColor}) => (themeColor === 'dark' ? '4px' : null)};
    top: 50%;
    transform: translateY(-50%);
  }
`;
