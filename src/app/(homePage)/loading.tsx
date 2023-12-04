import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
  return (
    <Skeleton
      style={{ backgroundColor: "var(--nomade-primary)" }}
      variant="rounded"
      width={"100%"}
      height={"100%"}
    />
  );
}
