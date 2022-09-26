import logo from './logo.svg';
import './App.css';

function CharacterSelect({ bgClass, props }) {
  return (
    <a className={`d-flex rhombus-container ${bgClass} mx-2`} href={props.profileLink}>
      <div class="rhombus-content">
        <h2>{props.name}</h2>
        <img src={props.imageUrl} alt={props.name + "image"} class="mb-3"/>
        <h2 class="role_text">{props.role}</h2>
      </div>
    </a>
  );
}

export default CharacterSelect;
