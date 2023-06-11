/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

import AppNavigation from './src/navigation/AppNavigation';
import {AuthProvider} from './src/context/AuthContext';
import {authLink} from './src/context/AuthLink';

const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({message, locations, path}) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        players: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        matchs: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: `http://${
    Platform.OS === 'ios' ? 'localhost' : '192.168.1.3'
  }:3000/graphql`,
});

const client = new ApolloClient({
  cache,
  link: from([authLink, errorLink, httpLink]),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <AppNavigation />
      </AuthProvider>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
