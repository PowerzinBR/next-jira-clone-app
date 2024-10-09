import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="">
      <Button variant="primary" size="xs">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="destructive">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="muted">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="teritary">Click me</Button>
      <Input placeholder="Test input" />
    </div>
  );
}
