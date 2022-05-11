import Text from '@southstudio/south/content/Text';
import {AnchorHTMLAttributes} from 'react';
import Link from '../UI/Link';
import {StyledList} from './styled';

export type ItemText = {label: string; type: 'text'};
export type ItemLink = {
  label: string;
  type: 'link';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type Item = ItemText | ItemLink;

interface Props {
  inline?: boolean;
  title?: string;
  items: Item[];
}

export default function List({title, items, inline}: Props) {
  return (
    <>
      {title && (
        <Text id={title} bold={true} noMargin element="h3">
          {title}
        </Text>
      )}

      <StyledList inline={inline} aria-labelledby={title}>
        {items.map((item, i) => {
          if (item.type === 'link') {
            const {label, type, ...linkProps} = item;
            return (
              <li>
                <Link
                  key={`${linkProps.href} - ${i} - ${label}`}
                  {...linkProps}
                >
                  {label}
                </Link>
              </li>
            );
          } else {
            return (
              <li>
                <Text key={`${title} - ${i} - ${item.label}`} noMargin>
                  {item.label}
                </Text>
              </li>
            );
          }
        })}
      </StyledList>
    </>
  );
}
