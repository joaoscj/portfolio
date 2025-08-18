import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Social links */}
          <div className="flex justify-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <a 
                href="https://linkedin.com/in/joaoscj" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <a 
                href="https://github.com/joaoscj" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <a 
                href="mailto:joaodigitalscj@hotmain.com" 
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            <p>&copy; {currentYear} João dos Santos Cardoso de Jesus. Todos os direitos reservados.</p>
            {/* Easter egg católico */}
            <p className="mt-1 opacity-30 hover:opacity-100 transition-opacity text-[10px]">Ave Christus Rex</p>
          </div>
        </div>
      </div>
    </footer>
  );
}