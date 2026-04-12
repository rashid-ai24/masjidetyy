import { createFileRoute } from "@tanstack/react-router";
import { CommunityLinks } from "@/components/CommunityLinks";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <ThemeToggle />
      <CommunityLinks />
    </>
  );
}
