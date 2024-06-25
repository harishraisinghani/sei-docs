import { Code, Paper, Text } from '@mantine/core';

type PropertyInfoProps = {
	name: string;
	description: string;
	properties?: { name: string; description: string }[];
};

export const PropertyInfo = ({ name, description, properties }: PropertyInfoProps) => {
	return (
		<Paper mt='md'>
			<Code style={{ fontSize: '14pt', fontWeight: 600 }}>{name}</Code>
			<Text mt='xs'>{description}</Text>
			{properties && (
				<Paper p='md' withBorder mt='lg'>
					{properties.map((property, i) => {
						return (
							<div key={property.name}>
								<Code style={{ fontSize: '12pt', fontWeight: 500 }}>{property.name}</Code>
								<Text mt='xs' mb={i === properties.length - 1 ? undefined : 'lg'}>
									{property.description}
								</Text>
							</div>
						);
					})}
				</Paper>
			)}
		</Paper>
	);
};
