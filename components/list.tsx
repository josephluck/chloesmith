export const List = ({
  title,
  items,
  className,
}: {
  title: string;
  items: any[];
  className?: string;
}) => (
  <div className={className}>
    <strong>{title}</strong>
    <ul className="mt2">
      {items.map((item) => (
        <li>
          <strong>{item.name}</strong> - {item.description}
        </li>
      ))}
    </ul>
  </div>
);
