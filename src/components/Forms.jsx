import { useState } from 'react';
import './Forms.css'; 

const Forms = ({ adicionarPokemon }) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [power, setPower] = useState(0);

    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name || !type) {
            setSubmissionStatus({ message: 'Por favor, preencha o Nome e o Tipo.', type: 'error' });
            setTimeout(() => {
                setSubmissionStatus(null);
            }, 3000);
            return;
        }

        const pokemonNovo = { name, type, description, power };
        adicionarPokemon(pokemonNovo);

        console.log("Pokémon cadastrado:", { name, type, description, power });

        setSubmissionStatus({ message: `Pokémon ${name} cadastrado! 🙌`, type: 'success' });

        setName("");
        setType("");
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

                <label htmlFor="pokemon-type"> Tipo</label>
                <select
                    id="pokemon-type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                >
                    <option value="" disabled>Selecione um tipo...</option>
                    <option value="Fogo">🔥 Fogo</option>
                    <option value="Água">💧 Água</option>
                    <option value="Grama">🌱 Grama</option>
                    <option value="Elétrico">⚡ Elétrico</option>
                    <option value="Psíquico">🧠 Psíquico</option>
                    <option value="Pedra">🪨 Pedra</option>
                    <option value="Dragão">🐉 Dragão</option>
                </select>
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