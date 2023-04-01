function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }) {
    const handleClick1 = () => {
        setPokemonIndex(pokemonIndex - 1);
    };
    const handleClick2 = () => {
        setPokemonIndex(pokemonIndex + 1);
    };

    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={handleClick1}>Précédent</button> : ""}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick2}>Suivant</button> : ""}
        </div>
    );
}

export default NavBar;
