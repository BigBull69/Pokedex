function NavBar({ setPokemonIndex, pokemonList }) {
    const choicePoke = (poke) => {
        setPokemonIndex(pokemonList.indexOf(poke));
    };

    return (
        <ul>
            {pokemonList.map((poke) => (
                    <button key={poke.name} onClick={() => choicePoke(poke)}>{poke.name}</button>
            ))}
        </ul>
    );
}

export default NavBar;
