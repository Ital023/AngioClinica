import { Link } from "react-router-dom";
import logoPrincipal from "../../assets/logo principal.png";


export default function HeaderTablet() {
    return(
        <>
          <Link to={"/"}>
            <img src={logoPrincipal} alt="" className="w-32" />
          </Link>
    

        <div className="flex flex-row items-center">
          <nav>
            <ul className="flex flex-row items-center gap-4 xl:gap-8">
              <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                INÍCIO
              </li>
              <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                ESPECIALIDADES
              </li>
              <li className="text-lightMode-tertiary text-base font-semibold cursor-pointer">
                CONVÊNIOS
              </li>
            </ul>
          </nav>
        </div>
        </>
    );

}