import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle, Mail } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function VerifyEmailPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Verifying your email...");

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get("token");

      if (!token) {
        setStatus("error");
        setMessage("Invalid verification link");
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'https://usman678zafar-storivault-backend.hf.space';
        const response = await fetch(`${apiUrl}/auth/verify-email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (response.ok) {
          setStatus("success");
          setMessage("Your email has been verified successfully!");
        } else {
          setStatus("error");
          setMessage(data.detail || "Verification failed. The link may be invalid or expired.");
        }
      } catch (error) {
        console.error("Email verification error:", error);
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    };

    verifyEmail();
  }, [searchParams]);

  const handleContinue = () => {
    navigate("/auth/login");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white py-8 px-6 shadow-xl rounded-lg text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Logo size="md" showText={true} />
          </div>

          {/* Loading State */}
          {status === "loading" && (
            <>
              <LoadingSpinner size="lg" className="mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {message}
              </h2>
              <p className="text-sm text-gray-600">
                Please wait while we verify your email address
              </p>
            </>
          )}

          {/* Success State */}
          {status === "success" && (
            <>
              <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Email Verified!
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {message}
              </p>
              <Button
                onClick={handleContinue}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Continue to Login
              </Button>
            </>
          )}

          {/* Error State */}
          {status === "error" && (
            <>
              <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <AlertCircle className="w-10 h-10 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Verification Failed
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                {message}
              </p>
              <div className="space-y-3">
                <Button
                  onClick={handleContinue}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                >
                  Go to Login
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate("/auth/signup")}
                  className="w-full"
                >
                  Create New Account
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Help Text */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Need help? Contact{" "}
          <a href="mailto:support@storivault.com" className="text-orange-600 hover:text-orange-500">
            support@storivault.com
          </a>
        </p>
      </div>
    </div>
  );
}
