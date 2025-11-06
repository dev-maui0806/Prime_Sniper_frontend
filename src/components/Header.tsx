import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import { ConnectWalletDialog } from "@/components/ConnectWalletDialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [walletDialogOpen, setWalletDialogOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Prime Sniper</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Home
            </NavLink>
            <NavLink 
              to="/features" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Features
            </NavLink>
            <NavLink 
              to="/who-we-are" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Who We Are
            </NavLink>
            <NavLink 
              to="/terms" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              activeClassName="text-primary"
            >
              Terms of Service
            </NavLink>
          </nav>

          <Button 
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setWalletDialogOpen(true)}
          >
            Use Our Tool
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-lg border-l border-border">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center"
                  style={{backgroundImage: 'var(--gradient-purple)'}}>
                    <Zap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="text-xl font-bold text-foreground">Prime Sniper</span>
                </div>
              </div>
              
              <nav className="flex flex-col gap-6">
                <NavLink 
                  to="/" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  activeClassName="text-primary"
                  onClick={() => setOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/features" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  activeClassName="text-primary"
                  onClick={() => setOpen(false)}
                >
                  Features
                </NavLink>
                <NavLink 
                  to="/who-we-are" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  activeClassName="text-primary"
                  onClick={() => setOpen(false)}
                >
                  Who We Are
                </NavLink>
                <NavLink 
                  to="/terms" 
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                  activeClassName="text-primary"
                  onClick={() => setOpen(false)}
                >
                  Terms of Service
                </NavLink>
                
                <Button 
                  className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  style ={{position: 'absolute',
                    bottom: '20px',
                    right: '25px',
                    width: '250px',
                    backgroundImage: 'var(--gradient-purple)'}}
                  onClick={() => {
                    setOpen(false);
                    setWalletDialogOpen(true);
                  }}
                >
                  Use Our Tool
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <ConnectWalletDialog open={walletDialogOpen} onOpenChange={setWalletDialogOpen} />
    </header>
  );
};

export default Header;
