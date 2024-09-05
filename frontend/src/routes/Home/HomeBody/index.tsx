import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import banner1 from "../../../assets/banner1.jpg";
import banner2 from "../../../assets/banner2.jpg";


export default function HomeBody() {
  return (
    <main>
      <Carousel >
        <CarouselContent>
          <CarouselItem><img src={banner1} alt="" /></CarouselItem>
          <CarouselItem><img src={banner2} alt="" /></CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
