import Link from "next/link";
import AuthFormShell from "../_components/AuthFormShell";

export default function SignupPage() {
  return (
    <AuthFormShell title="Sign up">
      <form className="auth-form" action="#" method="post">
        <label className="auth-label" htmlFor="name">
          Full Name
        </label>
        <input id="name" name="name" type="text" className="auth-input" placeholder="Siyam" autoFocus required />

        <label className="auth-label" htmlFor="email">
          Email
        </label>
        <input id="email" name="email" type="email" className="auth-input" placeholder="you@example.com" required />

        <label className="auth-label" htmlFor="password">
          Password
        </label>
        <input id="password" name="password" type="password" className="auth-input" placeholder="********" required />

        <label className="auth-label" htmlFor="confirm-password">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          className="auth-input"
          placeholder="********"
          required
        />

        <button className="auth-button" type="submit">
          Create Account
        </button>
      </form>

      <p className="auth-hint">
        Already have an account?{" "}
        <Link className="auth-link" href="/auth/login">
          Log In
        </Link>
      </p>
    </AuthFormShell>
  );
}
