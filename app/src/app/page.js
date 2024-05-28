"use client"
import MenuBar from "@/components/production/menu-bar";
import GridLayout from "@/components/production/builder";
import Footer from "@/components/production/footer";
import { TeamProvider } from '@/contexts/team-context';
import { TabProvider } from '@/contexts/tab-context';

export default function Home() {
  return (
    <TabProvider>
      <TeamProvider>
        <div className="flex flex-col h-svh min-h-screen">
          <MenuBar />
          <main className="flex flex-col items-center h-5/6">
          <GridLayout />
          </main>
          <Footer />
        </div>
      </TeamProvider>
    </TabProvider>
  );
}
