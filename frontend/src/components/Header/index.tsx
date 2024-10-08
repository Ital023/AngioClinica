import HeaderTablet from "@/pages/HeaderTablet";
import { faFacebook, faInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HeaderMobile from "@/pages/HeaderMobile";
import DropDownMenuHeader from "./DropDownMenuHeader";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";


export default function Header() {
  return (
    <>
    <header className="bg-lightMode-quaternary h-20 flex justify-center content-center shadow-sm md:shadow-none">

      <div className="hidden md:flex items-center justify-between w-full px-7">
        <HeaderTablet />
      </div>

      <div className="flex w-full md:hidden">
        <HeaderMobile />
      </div>


    </header>
    <div className="hidden md:flex h-11 bg-red-900 flex-row py-1 items-center justify-between px-7">

    <div className="flex flex-row items-center">
    <div className="flex flex-row items-center gap-4 border-r mr-5 pr-5">
      <a href="https://www.instagram.com/angioclinicafortaleza/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} className="text-xl"/></a>
      <a href="https://www.facebook.com/profile.php?id=481250611903510&_rdr" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}}  className="text-xl"/></a>
      <a href="https://maps.app.goo.gl/2SaX1TCgNzdRH73K8" target="_blank"><FontAwesomeIcon icon={faMapLocationDot} style={{color: "#ffffff",}}  className="text-xl"/></a>
      
    </div>

    <nav>
        <ul className="flex flex-row items-center gap-9">
          <li>
            <DropDownMenuHeader title="INSTITUCIONAL" contents={["QUEM SOMOS", "GALERIA"]}/>
          </li>
          <li>
          <DropDownMenuHeader title="FALE CONOSCO" contents={["CONTATO", "OUVIDORIA", "TRABALHE CONOSCO"]}/>
          </li>
        </ul>
      </nav>
    </div>


      <div className="flex flex-row items-center gap-4">
        <p className=" md:hidden lg:block text-base text-lightMode-quaternary font-extrabold">Deseja marcar uma consulta?</p>
        
        <a href="https://w.app/AdtlR7" target="_blank">
        <button className="bg-lightMode-whatsapp w-44 py-1 rounded flex flex-row items-center justify-center gap-3">
          <FontAwesomeIcon icon={faSquareWhatsapp} style={{color: "#ffffff",}} className="text-xl"/>
          <span className="md:font-bold lg:font-extrabold text-xs text-lightMode-quaternary">MARCAR CONSULTA</span>
        </button>
        </a>

      </div>

      

    </div>
    </>
  );
}
