import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header /> */}
      <main className="flex-auto bg-gray-900">{children}</main>
      {/* <Footer /> */}
    </>
  );
}
