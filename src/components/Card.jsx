import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { PokeBadge } from './Badge';
import { PokeContext } from '../context/PokeProvider';
import { useContext } from 'react';

export const PokeCard = ({
	image,
	name,
	types,
	id,
	isOnPowerZone,
	cantidad,
}) => {
	const { handleAddPowerZone } = useContext(PokeContext);

	const navigate = useNavigate();
	const handleNavigate = (id) => {
		navigate(`/poke/${id}`);
	};

	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				src={image}
			/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				{cantidad && <Card.Text>Cantidad: {cantidad}</Card.Text>}
				<Card.Text>
					{types.length
						? types.map((type, key) => (
								<PokeBadge
									key={key}
									type={type}
								/>
						  ))
						: ''}
				</Card.Text>
				<Button
					variant={isOnPowerZone ? 'danger' : 'success'}
					onClick={() => handleAddPowerZone(id)}
				>
					{isOnPowerZone ? 'Remove Power Zone' : 'Add Power Zone'}
				</Button>
				<Button
					variant="primary"
					onClick={() => handleNavigate(id)}
				>
					Ver detalles
				</Button>
			</Card.Body>
		</Card>
	);
};
