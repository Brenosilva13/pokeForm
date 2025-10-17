const Forms = () => {
    return (
        <div>
            <form>
                <label>
                    Name Pokémon:
                    <input type="text" name="name" />
                </label>
                <br />
                <label>
                    Tipo Pokémon:
                    <select>
                        <option value="Fogo">Fogo</option>
                        <option value="Água">Água</option>
                        <option value="Grama">Grama</option>
                        <option value="Dark">Dark</option>
                        <option value="Elétrico">Elétrico</option>
                        <option value="Voador">Voador</option>
                        <option value="Dragão">Dragão</option>
                    </select>
                </label>
                <br />
                <label>
                    Descrição:
                    <textarea name="description" />
                </label>
                <br />
                <label>
                    Poder
                    <input type="number" name="power" minLength={0} maxLength={100} />
                </label>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Forms;