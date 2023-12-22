import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Icon from "@/lib/icons";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type ContentCardProps = {
    title: string;
    content: string;
    iconName: string;
};

const NomadeCard: React.FC<ContentCardProps> = ({ title, content, iconName }) => {
    return (
        <Card className="rounded-md">
            <CardHeader>
                <CardTitle className="text-xs sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-xl flex items-center justify-start space-x-1 uppercase pb-4 gap-2 bg-gradient-to-r from-primary to-lime-300 bg-clip-text text-transparent">
                    <Icon color="#a3e635" name={iconName as keyof typeof dynamicIconImports} />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="text-base text-foreground">{content}</CardContent>
        </Card>
    );
};

export default NomadeCard;