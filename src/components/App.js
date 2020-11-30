import React from 'react';
import { useQuery, gql } from '@apollo/client';

const LATEST_QUERY = gql`
	query {
		posts {
			nodes {
				postId
				link
				title
			}
		}
	}
`;

export default function App() {
	const { loading, error, data } = useQuery( LATEST_QUERY );

	return (
		<main>
			<h1>Quartz Lite</h1>
			{JSON.stringify( data )}
		</main>
	);
}
