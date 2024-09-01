import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoPrincipal from "../../assets/logo principal.png";

export default function Header() {
  return (
    <header className="bg-lightMode-quaternary h-20 flex justify-center content-center shadow-sm">
      <div className="container px-4 flex flex-row items-center justify-between h-full">
        <img src={logoPrincipal} alt="" className="w-32" />
        <button>
          <FontAwesomeIcon icon={faBars} className="text-2xl text-lightMode-tertiary"/>
        </button>
      </div>
    </header>
  );
}
