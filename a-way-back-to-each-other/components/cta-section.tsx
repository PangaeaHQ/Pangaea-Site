import { Button } from "@/components/ui/button";
import Image from "next/image";

const CTASection = () => {
  return (
    <section className="py-24 bg-linear-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-8">
            <Image
              src="/android-chrome-512x512.png"
              alt="Logo"
              width={56}
              height={56}
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            When systems fail, this still works.
          </h2>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Pangaea is a local-first coordination layer built for outages, censorship, distance, and disruption.
            It works without permission, servers, or surveillance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="warm" size="xl" asChild>
              <a href="https://testflight.apple.com/join/taNp4PZg">
                <Image
                  src="/android-chrome-512x512.png"
                  alt="Logo"
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full object-cover"
                />
                Get Pangaea
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Android coming soon • Free forever
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
