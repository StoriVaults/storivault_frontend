import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { useAuthStore } from "@/store/authStore";

export function GoogleSuccessPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { setTokens, fetchMe } = useAuthStore();

  useEffect(() => {
    const handleGoogleSuccess = async () => {
      const accessToken = searchParams.get("access_token");
      const refreshToken = searchParams.get("refresh_token");
      const error = searchParams.get("error");

      if (error) {
        navigate("/auth/login?error=google_auth_failed");
        return;
      }

      if (accessToken && refreshToken) {
        // Store tokens
        setTokens(accessToken, refreshToken);

        // Fetch user data
        await fetchMe();

        // Redirect to feed
        navigate("/feed");
      } else {
        navigate("/auth/login?error=missing_tokens");
      }
    };

    handleGoogleSuccess();
  }, [searchParams, navigate, setTokens, fetchMe]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" className="mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900">
          Completing sign in...
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Please wait while we set up your account
        </p>
      </div>
    </div>
  );
}
