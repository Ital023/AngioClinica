import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type Props = {
  title: string;
  elements: string[];
}

export default function AccordionDropdownMobileHeader({title, elements}: Props) {
  return (
    <Accordion type="single" collapsible className="w-full max-w-[300px] rounded-md bg-background">
      <AccordionItem value="produtos" className="border-none">
        <AccordionTrigger className="hover:bg-accent hover:text-accent-foreground">
          <span>{title}</span>
        </AccordionTrigger>
        <AccordionContent>
          <ul className="py-2">
            {
              elements.map(element => (
                <li>
              <a href="#" className="block px-6 py-2 text-sm hover:bg-accent hover:text-accent-foreground">
                {element}
              </a>
            </li>
              ))
            }
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}