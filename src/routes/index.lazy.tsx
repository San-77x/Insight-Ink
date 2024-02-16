import { createLazyFileRoute } from "@tanstack/react-router";
import HomeIn from "@/components/HomeIn";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <div> </div>;
}
