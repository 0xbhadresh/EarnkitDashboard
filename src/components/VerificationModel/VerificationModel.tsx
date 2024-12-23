import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { Mail } from "lucide-react";

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  email?: string;
  onVerificationComplete?: (code: string) => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({
  isOpen,
  onClose,
  email = "your@email.com",
  onVerificationComplete,
}) => {
  const [verificationCode, setVerificationCode] = useState<string[]>(
    Array(6).fill("")
  );
  const [emailInput, setEmailInput] = useState<string>(email);
  const [showEmailInput, setShowEmailInput] = useState<boolean>(true); // To toggle between email input and OTP input
  const [success, setSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };

  const handleEmailSubmit = () => {
    if (emailInput) {
      setShowEmailInput(false); // Hide email input and show OTP input
    }
  };

  const handleInputChange = (index: number, value: string): void => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Handle completion
      if (value && newCode.every((digit) => digit !== "")) {
        const fullCode = newCode.join("");
        setSuccess(true);
        onVerificationComplete?.(fullCode);
      }

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.querySelector<HTMLInputElement>(
          `input[name=code-${index + 1}]`
        );
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: KeyboardEvent<HTMLInputElement>
  ): void => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      const prevInput = document.querySelector<HTMLInputElement>(
        `input[name=code-${index - 1}]`
      );
      prevInput?.focus();
    }
  };

  const handleResendCode = (): void => {
    setVerificationCode(Array(6).fill(""));
    setSuccess(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg p-6 w-96 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          type="button"
          aria-label="Close"
        >
          ✕
        </button>

        {/* Back button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white"
          type="button"
          aria-label="Back"
        >
          ←
        </button>

        {/* Email icon */}
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
            <Mail className="w-6 h-6 text-green-400" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-xl font-semibold text-center mb-4">
          {showEmailInput ? "Enter Your Email" : "Enter Confirmation Code"}
        </h2>

        {/* Instructions */}
        <p className="text-gray-400 text-sm text-center mb-6">
          {showEmailInput
            ? "Please enter your email address below."
            : `Please check ${emailInput} for an email from priv.io and enter your code below.`}
        </p>

        {/* Email input box (only visible when showEmailInput is true) */}
        {showEmailInput ? (
          <div className="mb-6">
            <input
              type="email"
              value={emailInput}
              onChange={handleEmailChange}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleEmailSubmit(); // Submit email on Enter key press
              }}
              className="w-full p-3 bg-gray-700 text-white rounded-lg border-2 border-gray-600 focus:outline-none focus:border-green-400"
              placeholder="Enter your email"
            />
            <button
              onClick={handleEmailSubmit}
              className="w-full mt-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Send Verification Code
            </button>
          </div>
        ) : (
          // OTP input boxes
          <div className="flex justify-center gap-2 mb-6">
            {verificationCode.map((digit, index) => (
              <input
                key={index}
                name={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(index, e.target.value)
                }
                onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
                  handleKeyDown(index, e)
                }
                className={`w-12 h-12 text-center text-xl rounded-lg 
                  bg-gray-700 text-white border-2
                  ${success ? "border-green-400" : "border-gray-600"}
                  focus:border-green-400 focus:outline-none
                  transition-colors duration-200`}
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Success message */}
        {success && (
          <div className="text-green-400 text-center mb-4">Success!</div>
        )}

        {/* Resend code */}
        <div className="flex items-center justify-center gap-2 text-sm">
          <span className="text-gray-400">Didn't get an email?</span>
          <button
            className="text-green-400 hover:text-green-300"
            onClick={handleResendCode}
            type="button"
          >
            Resend code
          </button>
        </div>

        {/* Protected by */}
        <div className="mt-6 text-center text-sm text-gray-500">
          Protected by
          <span className="text-gray-400"> Earn</span>
          <span className="text-green-400">Kit</span>
        </div>
      </div>
    </div>
  );
};

export default VerificationModal;
