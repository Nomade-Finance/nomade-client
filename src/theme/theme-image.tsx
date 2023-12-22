import Image, { ImageProps } from "next/image";

import { useTheme } from "next-themes";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, width, height, ...rest } = props;
  const { resolvedTheme } = useTheme();
  const currentSrc = resolvedTheme === "dark" ? srcDark : srcLight;

  return (
    <Image
      {...rest}
      src={currentSrc}
      style={{width: `${width}px`, height:`${height}px`}}
      priority
      className="animate-fade-in cursor-pointer"
      alt="Logo Nomade Finance"
    />
  );
};

export default ThemeImage;
