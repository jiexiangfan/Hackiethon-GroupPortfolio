import logo from './logo.svg';
import './App.css';

function CharacterSelect({ bgClass }) {
  return (
    <div className={`rhombus-container ${bgClass}`}>
      <div class="rhombus-content">
        <h1>Name</h1>
        <h1>Image</h1>
        <h2>Developer</h2>
      </div>
    </div>
  );
}

export default CharacterSelect;
