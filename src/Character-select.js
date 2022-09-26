import logo from './logo.svg';
import './App.css';

function CharacterSelect({ bgClass, props }) {
  return (
    <div className={`d-flex rhombus-container ${bgClass}`}>
      <div class="rhombus-content">
        <h2>{props.name}</h2>
        <img src={props.imageUrl} alt={props.name + "image"} class="mb-3"/>
        <h2 class="role_text">{props.role}</h2>
      </div>
    </div>
  );
}

export default CharacterSelect;
