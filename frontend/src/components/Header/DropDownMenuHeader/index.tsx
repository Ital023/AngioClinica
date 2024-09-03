import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
    title: string,
    contents: string[]
}

export default function DropDownMenuHeader({title, contents}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none text-lightMode-quaternary text-sm font-semibold cursor-pointer">
        {title}{" "}
        <FontAwesomeIcon
          icon={faCaretUp}
          rotation={180}
          style={{ color: "#fff" }}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-4 bg-red-900">
        {contents.map((content) => (
        <DropdownMenuItem className="text-lightMode-quaternary text-sm font-semibold cursor-pointer" > 
        {content}
        </DropdownMenuItem>
        ))}

      </DropdownMenuContent>
    </DropdownMenu>
  );
}
