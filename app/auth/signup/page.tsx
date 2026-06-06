import AuthFormShell from "../_components/AuthFormShell";

export default function SignupPage() {
  return (
    <AuthFormShell title="Admin accounts only">
      <div className="auth-info">
        <p className="auth-hint auth-hint-spacious">Admin signup is disabled in this dashboard.</p>
        <p className="auth-hint">Use a seeded admin account like `admin@commandctr.com` to log in.</p>
      </div>
    </AuthFormShell>
  );
}
