import logo from './logo.svg';
import './App.css';
import CharacterSelect from './Character-select';

function Home() {
  return (
    <div class="d-flex flex-column home-container">
      
      
      <h1 class="my-5 container">Choose Your Developer <span class="dots__blink1">.</span> <span class="dots__blink2">.</span> <span class="dots__blink3">.</span> </h1>
      
      
      <div class="container d-flex flex-row justify-content-between">

        <CharacterSelect bgClass={"bg-red"}></CharacterSelect>
        <CharacterSelect bgClass={"bg-blue"}></CharacterSelect>
        <CharacterSelect bgClass={"bg-yellow"}></CharacterSelect>

      </div>
    </div>
  );
}

export default Home;
