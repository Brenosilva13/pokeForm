import { useState } from 'react';
import './Forms.css'; 

const Forms = ({ adicionarPokemon }) => {
    const [name, setName] = useState("");
    const [types, setTypes] = useState([]);
    const [description, setDescription] = useState("");
    const [power, setPower] = useState(0);

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleTypeChange = (selectedType) => {
        if (types.includes(selectedType)) {
            setTypes(types.filter(type => type !== selectedType));
        } else if (types.length < 2) {
            setTypes([...types, selectedType]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || types.length === 0) {
            setSubmissionStatus({ message: 'Por favor, preencha o Nome e pelo menos um Tipo.', type: 'error' });
            setTimeout(() => {
                setSubmissionStatus(null);
            }, 3000);
            return;
        }

        const pokemonNovo = { name, types, description, power };
        adicionarPokemon(pokemonNovo);

        console.log("Pokémon cadastrado:", { name, types, description, power });

        setSubmissionStatus({ message: `Pokémon ${name} cadastrado!`, type: 'success' });

        setName("");
        setTypes([]);
        setDescription("");
        setPower(0);

        setTimeout(() => {
            setSubmissionStatus(null);
        }, 3000);
    };

    return (
        <div className="form-container">
            <h1 className="form-title">Cadastro de Pokémon</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="pokemon-name">Nome do Pokémon</label>
                <input
                    id="pokemon-name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Pikachu"
                    required
                />
                <br />

                <label htmlFor="pokemon-types">Tipos (máximo 2)</label>
                <div className="types-container">
                    {[
                        { value: "Fogo", emoji: "🔥", label: "Fogo" },
                        { value: "Água", emoji: "💧", label: "Água" },
                        { value: "Grama", emoji: "🌱", label: "Grama" },
                        { value: "Elétrico", emoji: "⚡", label: "Elétrico" },
                        { value: "Psíquico", emoji: "🧠", label: "Psíquico" },
                        { value: "Pedra", emoji: "🪨", label: "Pedra" },
                        { value: "Dragão", emoji: "🐉", label: "Dragão" },
                        { value: "Voador", emoji: "🕊️", label: "Voador" },
                        { value: "Lutador", emoji: "👊", label: "Lutador" },
                        { value: "Venenoso", emoji: "☠️", label: "Venenoso" }
                    ].map(typeOption => (
                        <label key={typeOption.value} className="type-option">
                            <input
                                type="checkbox"
                                value={typeOption.value}
                                checked={types.includes(typeOption.value)}
                                onChange={() => handleTypeChange(typeOption.value)}
                                disabled={!types.includes(typeOption.value) && types.length >= 2}
                            />
                            <span className="type-label">
                                {typeOption.emoji} {typeOption.label}
                            </span>
                        </label>
                    ))}
                </div>
                {types.length > 0 && (
                    <div className="selected-types">
                        <strong>Tipos selecionados:</strong> {types.join(", ")}
                    </div>
                )}
                <br />
                <label htmlFor="pokemon-description">Descrição</label>
                <textarea
                    id="pokemon-description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Um Pokémon elétrico muito famoso..."
                    rows="4"
                />
                <br />
                <label htmlFor="pokemon-power">Poder ({power})</label>
                <input
                    id="pokemon-power"
                    type="range"
                    name="power"
                    min="0"
                    max="100"
                    value={power}
                    onChange={(e) => setPower(e.target.value)}
                />
                <br />
<button type="submit">Cadastrar Pokémon</button>
            </form>

            {submissionStatus && (
                <div className={`submission-message ${submissionStatus.type}`}>
                    {submissionStatus.message}
                </div>
            )}
        </div>
    );
}

export default Forms;