import { getSignInStatus } from "@/lib/auth/get-signin-status";

interface SignedOutProps {
  children: React.ReactNode;
};

export const SignedOut = async({
  children,
}: SignedOutProps) => {
  const status = await getSignInStatus();
  return (
    <div>
      {status ? null : children}
    </div>
  );
};