const Lista = ({ items = [] }) => {
  if (!items.length) {
    return <p className="no-pokemon">Nenhum Pokémon cadastrado ainda.</p>;
  }

  return (
    <div className="pokemon-list">
      <h2>Pokémons Cadastrados</h2>
      <div className="pokemon-grid">
        {items.map((item, index) => (
          <div key={index} className="pokemon-card">
            <h3 className="pokemon-name">{item.name}</h3>
            <div className="pokemon-types">
              {Array.isArray(item.types) ? (
                item.types.map((type, typeIndex) => (
                  <span key={typeIndex} className="type-badge">
                    {type}
                  </span>
                ))
              ) : (
                <span className="type-badge">{item.type || item.types}</span>
              )}
            </div>
            <div className="pokemon-power">
              <strong>Poder:</strong> {item.power}
            </div>
            {item.description && (
              <p className="pokemon-description">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lista;
