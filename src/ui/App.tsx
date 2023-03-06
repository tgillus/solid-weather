import { Component, createSignal, onMount } from 'solid-js';
import { GeoGateway } from '../infrastructure/geo/geo-gateway';

import styles from './App.module.css';

const App: Component = () => {
  const [address, setAddress] = createSignal('');

  onMount(async () => {
    const geoGateway = GeoGateway.build();
    const result = await geoGateway.locationByZip('20152');
    setAddress(result.addresses[0].formattedAddress);
  });

  return (
    <div class={styles.App}>
      <p>{address()}</p>
    </div>
  );
};

export default App;
