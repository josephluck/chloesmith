export function List({
  title,
  items,
  className,
}: {
  title: string;
  items: any[];
  className?: string;
}) {
  return (
    <div className={className}>
      <strong>{title}</strong>
      <ul className="mt2">
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
