import Image from "next/image";
import Link from "next/link";


const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/android-chrome-512x512.png"
            width={32}
            height={32}
            alt="Pangaea"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="font-serif font-semibold text-lg text-foreground">Pangaea</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#community" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            About
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            How It Works
          </a>
          <a href="#values" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
            First Principles
          </a>
        </nav>

        <a
          href="https://testflight.apple.com/join/taNp4PZg"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shadow-sm"
          target="_blank"
        >
          Get the App
        </a>
      </div>
    </header>
  );
};

export default Header;
