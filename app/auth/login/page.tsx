import AdminLoginForm from "@/components/auth/AdminLoginForm";
import AuthRedirect from "@/components/auth/AuthRedirect";

import AuthFormShell from "../_components/AuthFormShell";

export default function LoginPage() {
  return (
    <AuthFormShell title="Log in">
      <AuthRedirect>
        <AdminLoginForm />
      </AuthRedirect>
    </AuthFormShell>
  );
}
