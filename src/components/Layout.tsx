import { Navbar } from "./Navbar";
import Footer from "./Footer";
import { ScrollProgress } from "./ScrollProgress";
import { CustomCursor } from "./CustomCursor";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-brand-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed -left-32 -top-32 -z-10 h-[500px] w-[500px] rounded-full bg-brand-accentBlue/10 blur-[150px]" />

      <div className="pointer-events-none fixed -bottom-32 -right-32 -z-10 h-[450px] w-[450px] rounded-full bg-brand-accentBlue/10 blur-[140px]" />

      {/* UI Components */}
      <ScrollProgress />
      <CustomCursor />
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 mx-auto w-full max-w-7xl flex-1 px-6 pt-24">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;