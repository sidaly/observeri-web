import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import logoIcon from "@/assets/grc-sphere-icon.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background bg-gradient-main flex items-center justify-center">
      <div className="text-center px-6">
        <div className="inline-flex items-center gap-2 mb-8">
          <img src={logoIcon} alt="GRC Sphere" className="w-10 h-10" />
          <span className="text-2xl font-display font-bold">GRC Sphere</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! Page not found
        </p>
        
        <Button variant="hero" asChild>
          <Link to="/">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
