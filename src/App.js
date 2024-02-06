import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import { React, useState, useEffect } from 'react'; 

function App() {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("http://localhost:8085/stores")
      .then(response => response.json())
      .then(stores => setStores(stores))
      .catch(error => setError(error.message));
    }, []);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [season, setSeason] = useState(0);
  const [episode, setEpisode] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      "name": name,
      "image": image,
      "season": season,
      "episode": episode,
    };
    fetch("http://localhost:8085/stores", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setStores([...stores,responseData])
        setName("");
        setImage("");
        setSeason(0);
        setEpisode(0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [ searchTerm, setSearchTerm ] = useState("");
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }
  const filteredData = stores.filter(store => store.name.toLowerCase().includes(searchTerm.toLowerCase()))


  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search searchTerm={searchTerm} handleSearch={handleSearch}/>
      <NewStoreForm handleSubmit={handleSubmit} setName={setName} setImage={setImage} setSeason={setSeason} setEpisode={setEpisode} name={name} image={image} season={season} episode={episode}/>
      <StoreList stores={filteredData}/>
    </div>
  );
}

export default App;
