import TeamManagement from "@/components/team-management";
import ComponentShowcase from "@/components/component-showcase";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen w-full p-8">
      <TeamManagement />
      <Separator className="my-8" />
      <ComponentShowcase />
    </div>
  );
}
