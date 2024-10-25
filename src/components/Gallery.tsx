import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Modern living room",
      caption: "Spacious, well-lit living areas"
    },
    {
      url: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      alt: "Exterior view",
      caption: "Contemporary architectural design"
    },
    {
      url: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace",
      alt: "Building exterior",
      caption: "Premium quality construction"
    },
    {
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      alt: "Modern facade",
      caption: "Sustainable materials"
    }
  ];

  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={image.url} 
                      alt={image.alt}
                      className="w-full h-[400px] object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
                      <p className="text-lg">{image.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Gallery;