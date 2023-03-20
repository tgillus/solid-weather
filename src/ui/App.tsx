import { Component, createSignal, For, onMount } from 'solid-js';
import { Address, GeoGateway } from '../infrastructure/geo/geo-gateway';

const App: Component = () => {
  const [addresses, setAddresses] = createSignal<Address[]>([]);

  onMount(async () => {
    const geoGateway = GeoGateway.build();
    const { addresses } = await geoGateway.locationByZip('20152');

    setAddresses(addresses);
  });

  return (
    <ul>
      <For each={addresses()}>
        {(address, i) => (
          <li>
            ({i() + 1}) {address.formattedAddress}
          </li>
        )}
      </For>
    </ul>
  );
};

export default App;
