import Badge from 'react-bootstrap/Badge';

export const PokeBadge = ({ type }) => {
	const defineColor = (type) => {
		switch (type) {
			case 'normal':
				return 'dark';

			case 'bug':
				return 'success';

			case '':
				return 'secondary';

			case '':
				return 'danger';

			case 'fire':
			case 'electric':
				return 'warning';

			case '':
				return 'light';

			case 'flying':
			case 'water':
				return 'info';

			default:
				return 'primary';
		}
	};

	const color = defineColor(type);
	const textDark = color === 'warning' || color === 'light' ? 'dark' : '';

	return (
		<Badge
			bg={color}
			text={textDark}
		>
			{type}
		</Badge>
	);
};
