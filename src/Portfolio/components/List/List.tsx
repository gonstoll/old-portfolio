import Text from '@southstudio/south/content/Text';
import Link from '../UI/Link';
import {StyledList} from './styled';

type Item =
  | {label: string; type: 'text'}
  | {
      label: string;
      type: 'link';
      link: string;
      download: boolean | undefined;
    };

interface Props {
  inline?: boolean;
  title?: string;
  items: Item[];
}

export default function List({title, items, inline}: Props) {
  return (
    <StyledList inline={inline}>
      {title && (
        <Text bold noMargin>
          {title}
        </Text>
      )}
      {items.map((item, i) => {
        if (item.type === 'link') {
          return (
            <Link href={item.link} download={item.download}>
              {item.label}
            </Link>
          );
        } else {
          return (
            <Text key={`${title} - ${i}`} noMargin>
              {item.label}
            </Text>
          );
        }
      })}
    </StyledList>
  );
}
