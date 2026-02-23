import Link from "next/link";
import AuthFormShell from "../_components/AuthFormShell";

export default function LoginPage() {
  return (
    <AuthFormShell title="Log in">
      <form className="auth-form" action="#" method="post">
        <label className="auth-label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className="auth-input" placeholder="you@example.com" autoFocus required />

        <label className="auth-label" htmlFor="password">
          Password
        </label>
        <input id="password" name="password" type="password" className="auth-input" placeholder="********" required />

        <button className="auth-button" type="submit">
          Log In
        </button>
      </form>

      <p className="auth-hint">
        <Link className="auth-link" href="/auth/forgot-pass">
          Forgot password?
        </Link>
      </p>
    </AuthFormShell>
  );
}
