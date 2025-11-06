import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HelpCircle, X, Wallet, ChevronLeft } from "lucide-react";
import { useState } from "react";

interface Wallet {
  name: string;
  iconPath?: string;
  badge?: "INSTALLED" | "POPULAR";
}

// Helper function to get icon path for wallet name
const getWalletIconPath = (name: string): string | undefined => {
  const iconMap: Record<string, string> = {
    "Phantom": "/assets/images/Phantom.svg",
    "MetaMask": "/assets/images/MetaMask.svg",
    "Solflare": "/assets/images/Solflare.svg",
    "BackPack": "/assets/images/BackPack.png",
    "Trust": "/assets/images/Trust.svg",
    "CoinBase": "/assets/images/CoinBase.svg",
    "Bitget": "/assets/images/Bitget.webp",
    "ByBit": "/assets/images/ByBit.webp",
    "Glow": "/assets/images/GLow.png",
    "All Wallets": "/assets/images/AllWallet.png",
    "OKX": "/assets/images/OKX.webp",
    "MagicEden" : "/assets/images/MagicEden.webp",
    "Exodus" : "/assets/images/Exodus.webp"
  };
  
  return iconMap[name];
};

const wallets: Wallet[] = [
  { name: "Phantom", iconPath: getWalletIconPath("Phantom"), badge: "INSTALLED" },
  { name: "MetaMask", iconPath: getWalletIconPath("MetaMask"), badge: "INSTALLED" },
  { name: "Solflare", iconPath: getWalletIconPath("Solflare"), badge: "POPULAR" },
  { name: "BackPack", iconPath: getWalletIconPath("BackPack") },
  { name: "Trust", iconPath: getWalletIconPath("Trust") },
  { name: "Ctrl", iconPath: getWalletIconPath("Ctrl") },
  { name: "CoinBase", iconPath: getWalletIconPath("CoinBase") },
  { name: "Bitget", iconPath: getWalletIconPath("Bitget") },
  { name: "ByBit", iconPath: getWalletIconPath("ByBit") },
  { name: "Glow", iconPath: getWalletIconPath("Glow") },
];

const Allwallets : Wallet[] = [
  { name: "Phantom", iconPath: getWalletIconPath("Phantom"), badge: "INSTALLED" },
  { name: "MetaMask", iconPath: getWalletIconPath("MetaMask"), badge: "INSTALLED" },
  { name: "Solflare", iconPath: getWalletIconPath("Solflare"), badge: "POPULAR" },
  { name: "BackPack", iconPath: getWalletIconPath("BackPack") },
  { name: "Trust", iconPath: getWalletIconPath("Trust") },
  { name: "Ctrl", iconPath: getWalletIconPath("Ctrl") },
  { name: "CoinBase", iconPath: getWalletIconPath("CoinBase") },
  { name: "Bitget", iconPath: getWalletIconPath("Bitget") },
  { name: "ByBit", iconPath: getWalletIconPath("ByBit") },
  { name: "Glow", iconPath: getWalletIconPath("Glow") },
  { name: "OKX", iconPath: getWalletIconPath("OKX") },
  { name: "MagicEden", iconPath: getWalletIconPath("MagicEden") },
  { name: "Exodus", iconPath: getWalletIconPath("Exodus") },
]

interface ConnectWalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConnectWalletDialog({ open, onOpenChange }: ConnectWalletDialogProps) {
  const [showGridView, setShowGridView] = useState(false);

  // Reset to list view when dialog closes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setShowGridView(false);
    }
    onOpenChange(newOpen);
  };

  // List View Component
  const ListView = () => (
    <>
      <DialogHeader className="px-6 pt-6 pb-4 flex flex-row items-center justify-between space-y-0">
        <div className="flex items-center gap-3">
          <HelpCircle className="h-5 w-5 text-muted-foreground" />
          <DialogTitle className="text-xl font-semibold text-white">
            Connect Wallet
          </DialogTitle>
        </div>
      </DialogHeader>

      <ScrollArea className="max-h-[500px] px-6 pb-6">
        <div className="space-y-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#252525] hover:bg-[#2d2d2d] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                  {wallet.iconPath ? (
                    <img 
                      src={wallet.iconPath} 
                      alt={wallet.name}
                      className="w-8 h-8 object-contain"
                    />
                  ) : (
                    <Wallet className="h-5 w-5 text-white" />
                  )}
                </div>
                <span className="text-white font-medium">{wallet.name}</span>
              </div>
              {wallet.badge && (
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded ${
                    wallet.badge === "INSTALLED"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {wallet.badge}
                </span>
              )}
            </button>
          ))}

          <button 
            onClick={() => setShowGridView(true)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#252525] hover:bg-[#2d2d2d] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={getWalletIconPath("All Wallets")} 
                  alt="All Wallets"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-white font-medium">All Wallets</span>
            </div>
            <span className="text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded">
              13
            </span>
          </button>
        </div>
      </ScrollArea>
      <div className="text-center mb-6 text-sm text-muted-foreground">
        Haven't got a wallet?{" "}
        <button className="text-blue-400 hover:text-blue-300 transition-colors">
          Get started
        </button>
      </div>
    </>
  );

  // Grid View Component
  const GridView = () => (
    <>
      <DialogHeader className="px-6 pt-6 pb-4 flex flex-row items-center justify-between space-y-0">
        <button
          onClick={() => setShowGridView(false)}
          className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <DialogTitle className="text-xl font-semibold text-white flex-1 text-center">
          All Wallets
        </DialogTitle>
        {/* <button
          onClick={() => handleOpenChange(false)}
          className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
        >
          <X className="h-5 w-5 text-white" />
        </button> */}
      </DialogHeader>

      <ScrollArea className="max-h-[500px] px-6 pb-6">
        <div className="grid grid-cols-3 gap-4">
          {Allwallets.map((wallet) => (
            <button
              key={wallet.name}
              className="flex flex-col items-center gap-3 p-4 rounded-xl bg-[#252525] hover:bg-[#2d2d2d] transition-colors"
            >
              <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm">
                {wallet.iconPath ? (
                  <img 
                    src={wallet.iconPath} 
                    alt={wallet.name}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <Wallet className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <span className="text-white text-sm font-medium text-center leading-tight">
                {wallet.name}
              </span>
            </button>
          ))}
        </div>
      </ScrollArea>
    </>
  );

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[440px] bg-[#1a1a1a] border-[#2a2a2a] p-0 gap-0" style={{ borderRadius: 36 }}>
        {showGridView ? <GridView /> : <ListView />}
      </DialogContent>
    </Dialog>
  );
}
