import { useContext } from 'react';
import { PokeContext } from '../context/PokeProvider';
import { PokeCard } from '../components/Card';

export const Home = () => {
	const { pokemons, loading } = useContext(PokeContext);
	//
	return (
		<div className="pokeGrid">
			{loading ? (
				<h1>Loading...</h1>
			) : (
				pokemons.map((pokemon, key) => (
					<PokeCard
						key={key}
						{...pokemon}
					/>
				))
			)}
		</div>
	);
};
