import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { NavBar, Icon } from "./Header.styled";

export default function Header() {

  return (
    <NavBar>
        <Icon>
      <FontAwesomeIcon icon={faEarthAmericas} />
        </Icon>
      <p>My Favorite countries Journal</p>
    </NavBar>
  );
}
