const Lista = ({ items = [] }) => {
  if (!items.length) {
    return <p>Nenhum Pokémon cadastrado ainda.</p>;
  }

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <strong>{item.name}</strong> — {item.type} (Poder: {item.power})
          {item.description && <p>{item.description}</p>}
        </li>
      ))}
    </ul>
  );
}

export default Lista;