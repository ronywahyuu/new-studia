const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen border flex items-center justify-center">{children}</div>
  );
};

export default AuthLayout;
