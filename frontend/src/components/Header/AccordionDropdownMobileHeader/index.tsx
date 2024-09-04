import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const options = [
  { id: 1, label: "Opção 1" },
  { id: 2, label: "Opção 2" },
  { id: 3, label: "Opção 3" },
  { id: 4, label: "Opção 4" },
]

export default function AccordionDropdown() {
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null)

  const handleOptionClick = (optionId: number) => {
    setSelectedOption(optionId)
  }

  return (
    <Accordion type="single" collapsible className="w-[250px]">
      <AccordionItem value="options" className="border-none">
        <AccordionTrigger className="hover:bg-accent hover:text-accent-foreground px-4 py-2 rounded-md">
          <span className="flex-1 text-left">
            {selectedOption
              ? options.find((opt) => opt.id === selectedOption)?.label
              : "Selecione uma opção"}
          </span>
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </AccordionTrigger>
        <AccordionContent>
          <div className="bg-popover mt-1 py-1 rounded-md shadow-md">
            {options.map((option) => (
              <Button
                key={option.id}
                variant="ghost"
                className="w-full justify-start px-4 py-2 text-sm"
                onClick={() => handleOptionClick(option.id)}
              >
                {option.label}
                {selectedOption === option.id && (
                  <Check className="h-4 w-4 ml-auto" />
                )}
              </Button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}