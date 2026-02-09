import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={"/pangaea-xl.jpg"}
          alt="Blackouts. Borders. Orbits. Oceans. Time gaps."
          className="h-full w-full object-cover"
          fill
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/0 via-background/0 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 backdrop-blur-[1.5px] rounded-full px-4 py-2 mb-8 shadow-none border-none">
            <span className="text-sm font-medium text-foreground">Communication without infrastructure</span>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
            Pangaea
          </h1>

          {/* Slogan */}
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-foreground/90 mb-4">
            Wherever humans are.
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed text-balance">
            Pangaea enables communication and coordination without relying on networks that can be shut down, monitored, or removed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 mt-44 md:mt-72">
            <Button variant="warm" size="xl" asChild>
              <a href="https://testflight.apple.com/join/taNp4PZg">
                <Image
                  src="/android-chrome-512x512.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full object-cover"
                />
                Try Pangaea
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#how-it-works">Learn How It Works</a>
            </Button>

          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span>No internet required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>End-to-end encrypted</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>No accounts</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
