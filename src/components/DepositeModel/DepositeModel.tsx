import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Copy, QrCode } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface DepositModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const DepositModal: React.FC<DepositModalProps> = ({ isOpen, closeModal }) => {
  const [ethAmount, setEthAmount] = React.useState<string>("0.11");
  const [isQRModalOpen, setIsQRModalOpen] = React.useState<boolean>(false);
  const maxAmount = 54.39;
  const address = "0x689...27C2755";

  const handleMaxClick = () => {
    setEthAmount(maxAmount.toString());
  };

  const handleEthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (/^\d*\.?\d*$/.test(value) && parseFloat(value) >= 0)) {
      setEthAmount(value);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[400px] bg-[#1E1E1E] border border-[#2C2C2C] p-0 rounded-xl">
        <div className="p-6">
          <DialogHeader>
            <VisuallyHidden>
              <DialogTitle className="text-lg font-medium text-white">
                DEPOSIT
              </DialogTitle>
            </VisuallyHidden>
          </DialogHeader>

          <div className="flex flex-col space-y-6 mt-6">
            {/* ETH Amount */}
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-blue-500" />
                  <span className="text-3xl font-medium text-white">
                    {maxAmount}
                  </span>
                </div>
                <div className="text-sm text-[#808080]">$11100.99</div>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1 text-white">
                  <span>ETH</span>
                </div>
                <div className="text-sm flex items-center gap-1">
                  <input
                    type="number"
                    value={ethAmount}
                    onChange={handleEthInputChange}
                    className="w-16 h-6 px-1 py-0 text-right bg-transparent border-none text-white focus:outline-none focus:ring-0"
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "textfield",
                      appearance: "textfield",
                    }}
                    min="0"
                    step="any"
                  />
                  <span className="text-[#808080]">ETH</span>
                  <button
                    onClick={handleMaxClick}
                    className="text-xs text-[#1DB954] ml-1 hover:underline focus:outline-none"
                  >
                    Max
                  </button>
                </div>
              </div>
            </div>

            {/* Address and QR Code */}
            <div className="flex items-center gap-2 bg-[#2C2C2C] rounded-lg p-1">
              <div className="flex-1 px-3 py-2 text-[#808080]">{address}</div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-[#808080] hover:text-white hover:bg-transparent"
              >
                <Copy className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-[#808080] hover:text-white hover:bg-transparent"
                onClick={() => setIsQRModalOpen(true)}
              >
                <QrCode className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              <Button className="w-full bg-[#1DB954] hover:bg-[#1DB954]/90 text-white h-11 rounded-lg font-medium">
                Deposit
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>

      {/* QR Code Modal */}
      <Dialog open={isQRModalOpen} onOpenChange={setIsQRModalOpen}>
        <DialogContent className="sm:max-w-[300px] bg-[#1E1E1E] border border-[#2C2C2C] p-6 rounded-xl">
          <div className="text-center mt-4">
            <QRCodeSVG value={address} size={200} fgColor="#FFFFFF" />
          </div>
          <div className="text-center mt-4 text-[#808080]">{address}</div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
};

export default DepositModal;
