import AuthFormShell from "../_components/AuthFormShell";

export default function NewPasswordPage() {
  return (
    <AuthFormShell title="Set new password">
      <form className="auth-form" action="#" method="post">
        <label className="auth-label" htmlFor="new-password">
          New Password
        </label>
        <input
          id="new-password"
          name="newPassword"
          type="password"
          className="auth-input"
          placeholder="********"
          autoFocus
          required
        />

        <label className="auth-label" htmlFor="confirm-password">
          Confirm New Password
        </label>
        <input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          className="auth-input"
          placeholder="********"
          required
        />

        <button className="auth-button" type="submit">
          Save Password
        </button>
      </form>
    </AuthFormShell>
  );
}
