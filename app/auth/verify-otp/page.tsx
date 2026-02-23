import Link from "next/link";
import AuthFormShell from "../_components/AuthFormShell";
import OtpInput from "../_components/OtpInput";

export default function VerifyOtpPage() {
  return (
    <AuthFormShell title="Verify OTP">
      <form className="auth-form" action="#" method="post">
        <label className="auth-label" htmlFor="otp-0">
          Enter 4-digit OTP
        </label>
        <OtpInput />

        <button className="auth-button" type="submit">
          Verify
        </button>
      </form>

      <p className="auth-hint">
        Didn&apos;t receive code?{" "}
        <Link className="auth-link" href="/auth/forgot-pass">
          Resend OTP
        </Link>
      </p>
    </AuthFormShell>
  );
}
