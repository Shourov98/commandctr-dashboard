import type { ReactNode } from "react";

type AuthFormShellProps = {
  title: string;
  children: ReactNode;
};

export default function AuthFormShell({ title, children }: AuthFormShellProps) {
  return (
    <>
      <h2 className="auth-heading">{title}</h2>
      <div>{children}</div>
    </>
  );
}
