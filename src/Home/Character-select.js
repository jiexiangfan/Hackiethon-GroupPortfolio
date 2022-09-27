import '../App.css';

function CharacterSelect({ bgClass, props }) {
  return (
    <a className={`d-flex rhombus-container ${bgClass} mx-2`} href={props.profileLink}>
      <div class="rhombus-content">
        <div class="name_box">
          <h1>{props.name}</h1>
        </div>
        <img src={require("../assets/" + props.imageUrl)} alt={props.name + "image"} class="mb-3"/>
        <h2 class="role_text">{props.role}</h2>
      </div>
    </a>
  );
}

export default CharacterSelect;
