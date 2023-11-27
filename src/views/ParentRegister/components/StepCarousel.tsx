import React, { useCallback, useEffect, useState } from "react";
import { Progress, rem } from "@mantine/core";
import { Carousel, Embla } from "@mantine/carousel";

interface StepCarouselProps {
  children: React.ReactNode[];
}

const StepCarousel: React.FC<StepCarouselProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState<Embla | null>(null);

  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <>
      <Progress
        value={scrollProgress}
        styles={{
          bar: { transitionDuration: "0ms" },
          root: { maxWidth: rem(320) },
        }}
        size="sm"
        my="xl"
        mx="auto"
      />
      <Carousel
        slideGap="md"
        height="90%"
        getEmblaApi={setEmbla}
        withIndicators={false}
        withControls={false}
        draggable={false}
        withKeyboardEvents={false}
      >
        {children?.map((child, index) => (
          <Carousel.Slide key={index}>{child}</Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
};

export default StepCarousel;
