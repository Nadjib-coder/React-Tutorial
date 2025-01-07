import './App.css';
import Header from './components/Header';
import Entry from './components/Entry';
import locationIcon from './asset/location-dot-solid.svg';
import data from '../data';

function App() {
  const entryElement = data.map((entry) => {
    return <Entry key={entry.id} locationIcon={locationIcon} {...entry} />;
  });

  return (
    <>
      <Header />
      {entryElement}
    </>
  );
}

export default App;
