"use client";
import React, { useState } from "react";
import VerificationModal from "@/components/VerificationModel/VerificationModel";
import { useAccount } from "wagmi";
import { Address } from "viem";

interface AuthState {
  googleConnected: boolean;
  googleEmail: string | null;
  evmWallet: string;
  isVerified: boolean;
}

const GoogleLogo = () => (
  <svg
    className="w-6 h-6 mr-2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const EthereumLogo = () => (
  <svg
    className="w-6 h-6 mr-2"
    viewBox="0 0 784 1277"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M392.07 0L383.5 29.3V873.16L392.07 881.71L784.13 650.54L392.07 0Z"
      fill="#343434"
    />
    <path d="M392.07 0L0 650.54L392.07 881.71V472.33V0Z" fill="#8C8C8C" />
    <path
      d="M392.07 956.52L387.24 962.41V1261.28L392.07 1275.63L784.37 724.89L392.07 956.52Z"
      fill="#3C3C3B"
    />
    <path d="M392.07 1275.63V956.52L0 724.89L392.07 1275.63Z" fill="#8C8C8C" />
    <path
      d="M392.07 881.71L784.13 650.54L392.07 472.33V881.71Z"
      fill="#141414"
    />
    <path d="M0 650.54L392.07 881.71V472.33L0 650.54Z" fill="#393939" />
  </svg>
);

const SettingsPage: React.FC = () => {
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const { address } = useAccount();
  const [authState, setAuthState] = useState<AuthState>({
    googleConnected: false,
    googleEmail: null,
    evmWallet: address as Address,
    isVerified: true,
  });

  const handleGoogleConnect = async () => {
    try {
      const mockGoogleEmail = "";
      setAuthState((prev) => ({
        ...prev,
        googleEmail: mockGoogleEmail,
      }));
      setIsVerificationModalOpen(true);
    } catch (error) {
      console.error("Google auth error:", error);
    }
  };

  const handleVerificationComplete = (code: string) => {
    setAuthState((prev) => ({
      ...prev,
      googleConnected: true,
    }));
    setTimeout(() => {
      setIsVerificationModalOpen(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen text-white p-8">
      <section className="mb-12">
        <h2 className="text-4xl font-semibold mb-4">Authentication</h2>
        <p className="text-gray-400 mb-8">
          Connect your accounts to enable additional features and secure your
          profile.
        </p>

        {/* Google Account Section */}
        <div className="bg-gray-800 rounded-lg p-6 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <GoogleLogo />
              <div>
                <span className="text-lg">GOOGLE ACCOUNT</span>
                {authState.googleConnected && (
                  <p className="text-gray-400 text-sm mt-1">
                    {authState.googleEmail}
                  </p>
                )}
              </div>
            </div>
            {!authState.googleConnected ? (
              <button
                onClick={handleGoogleConnect}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Connect
              </button>
            ) : (
              <span className="bg-gray-700 text-green-500 px-4 py-2 rounded-lg">
                Verified
              </span>
            )}
          </div>
        </div>

        {/* EVM Wallet Section */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <EthereumLogo />
              <div>
                <span className="text-lg">EVM WALLET</span>
                <p className="text-gray-400 text-sm mt-1">{address}</p>
              </div>
            </div>
            <span className="bg-gray-700 text-green-500 px-4 py-2 rounded-lg">
              Verified
            </span>
          </div>
        </div>
      </section>

      {/* Withdraw Section */}
      <section>
        <h2 className="text-4xl font-semibold mb-4">Withdraw</h2>
        <p className="text-gray-400 mb-8">
          Manage your wallet connections and withdrawal settings.
        </p>

        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full mr-4 flex items-center justify-center">
                <svg
                  width="111"
                  height="111"
                  viewBox="0 0 111 111"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M54.921 110.034C85.359 110.034 110.034 85.402 110.034 55.017C110.034 24.6319 85.359 0 54.921 0C26.0432 0 2.35281 22.1714 0 50.3923H72.8467V59.6416H3.9565e-07C2.35281 87.8625 26.0432 110.034 54.921 110.034Z"
                    fill="#0052FF"
                  />
                </svg>
              </div>
              <span className="text-gray-300">{address}</span>
            </div>
            <span className="bg-gray-700 text-green-500 px-4 py-2 rounded-lg">
              Verified
            </span>
          </div>
        </div>
      </section>

      {/* Verification Modal */}
      <VerificationModal
        isOpen={isVerificationModalOpen}
        onClose={() => setIsVerificationModalOpen(false)}
        email={authState.googleEmail || ""}
        onVerificationComplete={handleVerificationComplete}
      />
    </div>
  );
};

export default SettingsPage;
