import logo from './logo.svg';
import './App.css';
import CharacterSelect from './Character-select';

function Home() {


  const chrisData = {
    name: "Chris",
    imageUrl: "chris.png",
    role:"Developer"
  }

  const jieData = {
    name: "Jie",
    imageUrl: "jie.png",
    role:"Developer"
  }

  const jerryData = {
    name: "Jerry",
    imageUrl: "jerry.png",
    role:"Developer"
  }



  return (
    <div class="d-flex flex-column home-container ">
      
      
      <h1 class="my-5 container title">Choose Your Developer <span class="dots__blink1">.</span> <span class="dots__blink2">.</span> <span class="dots__blink3">.</span> </h1>
      
      
      <div class="container d-flex flex-row justify-content-between mt-5">

        <CharacterSelect bgClass={"bg-red"} props={jieData}></CharacterSelect>
        <CharacterSelect bgClass={"bg-blue"} props={jerryData}></CharacterSelect>
        <CharacterSelect bgClass={"bg-yellow"} props={chrisData}></CharacterSelect>

      </div>
    </div>
  );
}

export default Home;
