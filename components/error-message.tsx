import { XCircleIcon } from "lucide-react";

type Props = {
  error: string | undefined;
};

export const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;

  return (
    <div className="w-full p-2 bg-red-100/75 flex items-center gap-x-1.5 justify-start rounded-lg md:text-sm text-xs">
      <XCircleIcon className="md:size-5 size-4 text-red-500" />
      <span className="text-red-500 font-medium">{error}</span>
    </div>
  );
};
