import { LucideProps } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import dynamicIconImports from "lucide-react/dynamicIconImports";

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const Icon = React.memo(({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(() => dynamicIconImports[name]().then(mod => mod.default), {
    loading: () => <Skeleton className="h-4 w-4 rounded-full"/>,
    ssr: false
  });
  
  return <LucideIcon {...props} />;
});

Icon.displayName = "Icon";

export default Icon;