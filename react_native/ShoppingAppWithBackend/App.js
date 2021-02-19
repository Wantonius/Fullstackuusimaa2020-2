import React from 'react';
import StateProvider from './components/context/StateProvider';
import Container from './components/Container';

export default function App() {
  return (
	<StateProvider>
		<Container/>
	</StateProvider>
  );
}

