type Props = {
  src: string;
  username: string;
  className?: string;
  onClick?: () => void;
};

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export const UserAvatar = ({ src, username, className, onClick }: Props) => {
  return (
    <Avatar className={cn("border", className)} onClick={onClick}>
      <AvatarImage src={src} />
      <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
    </Avatar>
  );
};
