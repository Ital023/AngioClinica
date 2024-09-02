import HeaderDesktop from "@/pages/HeaderDesktop";
import HeaderTablet from "@/pages/HeaderTablet";
import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeaderMobile from "@/pages/HeaderMobile";


export default function Header() {
  return (
    <>
    <header className="bg-lightMode-quaternary h-20 flex justify-center content-center shadow-sm md:shadow-none lg:shadow-sm">

      <div className="hidden lg:flex lg:px-2 xl:px-4 lg:flex-row lg:items-center lg:h-full lg:justify-between lg:container">
        <HeaderDesktop/>
      </div>

      <div className="hidden lg:hidden md:flex md:items-center md:justify-between md:w-full md:px-4">
        <HeaderTablet />
      </div>

      <div className="flex w-full md:hidden">
        <HeaderMobile />
      </div>


    </header>
    <div className="hidden lg:hidden md:bg-red-900 md:h-10 md:flex md:flex-row md:py-1 md:items-center md:justify-between md:px-5">

    <nav>
        <ul className="flex flex-row items-center gap-9">
          <li>
          <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none text-lightMode-quaternary text-sm font-semibold cursor-pointer">
                    INSTITUCIONAL{" "}
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      rotation={180}
                      style={{ color: "#fff" }}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-4">
                    <DropdownMenuItem className="text-lightMode-tertiary text-sm font-semibold cursor-pointer">
                      QUEM SOMOS
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lightMode-tertiary text-sm font-semibold cursor-pointer">
                      GALERIA
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
          </li>
          <li>
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none text-lightMode-quaternary text-sm font-semibold cursor-pointer">
                    FALE CONOSCO{" "}
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      rotation={180}
                      style={{ color: "#fff" }}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="p-4">
                    <DropdownMenuItem className="text-lightMode-tertiary text-sm font-semibold cursor-pointer">
                      CONTATO
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lightMode-tertiary text-sm font-semibold cursor-pointer">
                      OUVIDORIA
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-lightMode-tertiary text-sm font-semibold cursor-pointer">
                      TRABALHE CONOSCO
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
        </ul>
      </nav>


      <div className="flex flex-row items-center gap-2">
        <p className="text-base text-lightMode-quaternary font-extrabold">Deseja marcar uma consulta?</p>
        <button className="bg-lightMode-whatsapp w-44 py-1 rounded flex flex-row items-center justify-center gap-3">
          <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "#ffffff",}} className="text-xl"/>
          <span className="font-extrabold text-xs text-lightMode-quaternary">MARCAR CONSULTA</span>
        </button>
      </div>

      

    </div>
    </>
  );
}
