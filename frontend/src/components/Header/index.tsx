import { faBars, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoPrincipal from "../../assets/logo principal.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="bg-lightMode-quaternary h-20 flex justify-center content-center shadow-sm">
      <div className="container px-4 flex flex-row items-center justify-between h-full">

        <div className="flex flex-row justify-center items-center gap-16">
          <Link to={"/"}>
            <img src={logoPrincipal} alt="" className="w-32" />
          </Link>

          <nav>
            <ul className="flex flex-row items-center gap-8">
              <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                INÍCIO
              </li>
              <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                ESPECIALIDADES
              </li>
              <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                CONVÊNIOS
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none text-lightMode-tertiary text-base font-semibold cursor-pointer">
                    INSTITUCIONAL{" "}
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      rotation={180}
                      style={{ color: "#112aa0" }}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-3">
                    <DropdownMenuItem className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                      QUEM SOMOS
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                      GALERIA
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none text-lightMode-tertiary text-base font-semibold cursor-pointer">
                    FALE CONOSCO{" "}
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      rotation={180}
                      style={{ color: "#112aa0" }}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-3">
                    <DropdownMenuItem className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                      CONTATO
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                      OUVIDORIA
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                      TRABALHE CONOSCO
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </nav>
        </div>

        <button className="bg-lightMode-whatsapp w-60 py-1 rounded flex flex-row items-center justify-center gap-3">
          <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "#ffffff",}} className="text-3xl"/>
          <span className="font-extrabold text-base text-lightMode-quaternary">MARCAR CONSULTA</span>
        </button>

        <button className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className="text-2xl text-lightMode-tertiary"
          />
        </button>
      </div>
    </header>
  );
}
