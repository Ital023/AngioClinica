import { Link } from "react-router-dom";
import logoPrincipal from "../../assets/logo principal.png";
import { faBars, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import { faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AccordionDropdownMobileHeader from "@/components/Header/AccordionDropdownMobileHeader";

export default function HeaderMobile() {
  return (
    <div className="flex flex-row items-center justify-between px-4 w-full">
      <Link to={"/"}>
        <img src={logoPrincipal} alt="" className="w-32" />
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <button className="md:hidden">
            <FontAwesomeIcon
              icon={faBars}
              className="text-2xl text-lightMode-tertiary"
            />
          </button>
        </SheetTrigger>
        <SheetContent side={"left"} className="overflow-y-auto">
          <SheetHeader>
            <SheetTitle>
              <img src={logoPrincipal} alt="" className="w-32" />
            </SheetTitle>
            <SheetDescription>
              <nav className="mt-12">
                <ul className="flex flex-col gap-5">
                  <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer text-start">
                    INÍCIO
                  </li>
                  <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer text-start">
                    ESPECIALIDADES
                  </li>
                  <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer text-start">
                    CONVÊNIOS
                  </li>
                  <li className="text-start">
                    <AccordionDropdownMobileHeader title="INSTITUCIONAL" elements={["QUEM SOMOS", "GALERIA"]}/>
                    
                  </li>
                  <li className="text-start">
                    
                  <AccordionDropdownMobileHeader title="FALE CONOSCO" elements={["CONTATO", "OUVIDORIA", "TRABALHE CONOSCO"]}/>

                  </li>
                  <li>
                  <a href="https://w.app/AdtlR7" target="_blank">
                    <button className="bg-lightMode-whatsapp w-full p-2 rounded flex flex-row items-center justify-center gap-3">
                      <FontAwesomeIcon
                        icon={faSquareWhatsapp}
                        style={{ color: "#ffffff" }}
                        className="text-xl"
                      />
                      <span className="font-extrabold text-sm text-lightMode-quaternary">
                        MARCAR CONSULTA
                      </span>
                    </button>
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
