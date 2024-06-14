import { createContext, useEffect, useState } from 'react';

export const PokeContext = createContext();

export const PokeProvider = ({ children }) => {
	const [pokemons, setPokemons] = useState([]);
	const [loading, setLoading] = useState(true);
	const [powerZone, setPowerZone] = useState([]);

	const fetchPokemons = async () => {
		const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
		const { results: pokemonsJson } = await response.json();
		const pokemonsPromise = pokemonsJson.map((pokemon) => pokemon.url);

		const pokemonsData = await pokemonCleanData(pokemonsPromise);
		setPokemons(pokemonsData);
		setLoading(false);
	};

	const pokemonCleanData = async (pokemons) => {
		return await Promise.all(
			pokemons.map(async (pokemonUrl) => {
				const response = await fetch(pokemonUrl);
				const { abilities, height, id, name, sprites, stats, types, weight } =
					await response.json();
				return {
					abilities: abilities.map((ability) => ability.ability.name),
					height,
					id,
					name,
					image: sprites.other.dream_world.front_default,
					stats: stats.map((stat) => ({
						name: stat.stat.name,
						base: stat.base_stat,
					})),
					types: types.map((type) => type.type.name),
					weight,
					isOnPowerZone: false,
				};
			})
		);
	};

	const handleAddPowerZone = (id) => {
		const pokemonToAdd = [...pokemons].find((pokemon) => pokemon.id == id);

		const pokemonExist = Boolean(
			[...powerZone].find((pokemon) => pokemon.id == id)
		);

		if (!pokemonExist) {
			const pokemonCart = {
				...pokemonToAdd,
				cantidad: 1,
			};
			setPowerZone([...powerZone, pokemonCart]);
		} else {
			setPowerZone(
				powerZone.map((pokemon) =>
					pokemon.id == id
						? { ...pokemon, cantidad: pokemon.cantidad + 1 }
						: pokemon
				)
			);
		}
	};

	const handleFilterPowerZone = () => {
		return [...pokemons].filter((pokemon) => pokemon.isOnPowerZone);
	};

	useEffect(() => {
		fetchPokemons();
		console.log('Ejecutando use eFFECT');
	}, []);

	return (
		<PokeContext.Provider
			value={{
				loading,
				pokemons,
				handleAddPowerZone,
				handleFilterPowerZone,
				powerZone,
			}}
		>
			{children}
		</PokeContext.Provider>
	);
};
