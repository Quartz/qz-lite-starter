import React from 'react';
import ReactDOM from 'react-dom';
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
} from '@apollo/client';
import App from './components/App';

const client = new ApolloClient( {
	uri: 'https://cms.qz.com/graphql',
	cache: new InMemoryCache(),
} );

function AppWithApollo() {
	return (
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	);
}

ReactDOM.render( <AppWithApollo />, document.getElementById( 'root' ) );
