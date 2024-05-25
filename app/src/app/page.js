import MenuBar from "@/components/production/menu-bar";
import GridLayout from "@/components/production/builder";
import Footer from "@/components/production/footer";

export default function Home() {
  return (
    <div className="flex flex-col h-dvh min-h-screen">
      <MenuBar />
      <main className="flex flex-col items-center flex-grow h-full">
        <GridLayout />
      </main>
      <Footer />
    </div>
  );
}
