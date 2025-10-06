import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";
import { AlertCircle, CheckCircle } from "lucide-react";

export function GoogleSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setTokens, fetchMe } = useAuthStore();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Completing sign in...");

  useEffect(() => {
    const handleGoogleSuccess = async () => {
      try {
        const accessToken = searchParams.get("access_token");
        const refreshToken = searchParams.get("refresh_token");
        const error = searchParams.get("error");

        if (error) {
          console.error("Google auth error:", error);
          setStatus("error");
          setMessage("Google authentication failed. Redirecting...");
          setTimeout(() => {
            navigate("/auth/login?error=google_auth_failed");
          }, 2000);
          return;
        }

        if (!accessToken || !refreshToken) {
          console.error("Missing tokens in callback");
          setStatus("error");
          setMessage("Authentication incomplete. Redirecting...");
          setTimeout(() => {
            navigate("/auth/login?error=missing_tokens");
          }, 2000);
          return;
        }

        // Store tokens
        setTokens(accessToken, refreshToken);

        // Fetch user data
        setMessage("Loading your profile...");
        await fetchMe();

        // Show success message briefly before redirect
        setStatus("success");
        setMessage("Success! Redirecting to your feed...");

        setTimeout(() => {
          navigate("/feed");
        }, 1500);
      } catch (err) {
        console.error("Error in Google callback:", err);
        setStatus("error");
        setMessage("Something went wrong. Redirecting...");
        setTimeout(() => {
          navigate("/auth/login?error=auth_processing_failed");
        }, 2000);
      }
    };

    handleGoogleSuccess();
  }, [searchParams, navigate, setTokens, fetchMe]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-md">
        {status === "loading" && (
          <>
            <LoadingSpinner size="lg" className="mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">
              {message}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Please wait while we set up your account
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {message}
            </h2>
          </>
        )}

        {status === "error" && (
          <>
            <div className="mx-auto mb-4 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-red-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              {message}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              You'll be redirected to the login page
            </p>
          </>
        )}
      </div>
    </div>
  );
}
