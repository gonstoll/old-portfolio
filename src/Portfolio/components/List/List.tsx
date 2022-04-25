import Text from '@southstudio/south/content/Text';

interface Props<T> {
  title: string;
  items: T[];
}

export default function List<T extends string | number>({title, items}: Props<T>) {
  return (
    <>
      <Text bold noMargin>
        {title}
      </Text>
      {items.map(item => (
        <Text key={item} noMargin>
          {item}
        </Text>
      ))}
    </>
  );
}
