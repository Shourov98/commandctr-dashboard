import Link from "next/link";
import AuthFormShell from "../_components/AuthFormShell";

export default function ForgotPassPage() {
  return (
    <AuthFormShell title="Forgot password">
      <form className="auth-form" action="#" method="post">
        <label className="auth-label" htmlFor="forgot-email">
          Email address
        </label>
        <input
          id="forgot-email"
          name="email"
          type="email"
          className="auth-input"
          placeholder="you@example.com"
          autoFocus
          required
        />

        <button className="auth-button" type="submit">
          Send OTP
        </button>
      </form>

      <p className="auth-hint">
        Have an OTP?{" "}
        <Link className="auth-link" href="/auth/verify-otp">
          Verify now
        </Link>
      </p>
    </AuthFormShell>
  );
}
