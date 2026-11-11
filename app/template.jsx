import PageMotion from "@/components/motion/PageMotion";

// Templates remount on every navigation, so each page gets a fresh set of
// animations and scroll triggers.
export default function Template({ children }) {
  return <PageMotion>{children}</PageMotion>;
}
