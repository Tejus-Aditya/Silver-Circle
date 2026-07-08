import BottomNav from "./BottomNav";
import SosFab from "./SosFab";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <BottomNav />
      <main className="md:ml-56 pb-24 md:pb-8 px-4 md:px-8 pt-6 max-w-3xl mx-auto">
        {children}
      </main>
      <SosFab />
    </div>
  );
}
