import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Button size="sm">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="ghost">Primary</Button>
      <Button variant="muted">Primary</Button>
      <Button variant="outline">Primary</Button>
    </div>
  );
}
