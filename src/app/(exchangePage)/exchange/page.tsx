import Skeleton from "@mui/material/Skeleton";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Nomade Finance | Exchange",
  description: "LA SOLUTION FIABLE POUR ACCÉDER AUX CRYPTO-ACTIFS",
};

const Conversion = dynamic(() => import("@/components/Conversion/Conversion"), {
  ssr: false,
  loading: () => <Skeleton width={270} height={100} />,
});
export default function Exchange() {
  return (
    <main>
      <Conversion />
    </main>
  );
}
