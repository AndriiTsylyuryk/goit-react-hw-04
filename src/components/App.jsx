import { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import { fetchPhotos } from "../API";
import { ImageGallery } from "./ImageGallery/ImageGallery";

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchPhotos(query);
        setHits(response.results);
       
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <ImageGallery hits={hits} />
    </div>
  );
};

export default App;
