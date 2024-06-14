import { useContext } from 'react';
import { PokeContext } from '../context/PokeProvider';
import { PokeCard } from '../components/Card';

export const PowerZone = () => {
	const { handleFilterPowerZone, loading, powerZone } = useContext(PokeContext);
	return (
		<div className="pokeGrid">
			{loading ? (
				<h1>Loading...</h1>
			) : (
				powerZone.map((pokemon, key) => (
					<PokeCard
						key={key}
						{...pokemon}
					/>
				))
			)}
		</div>
	);
};
