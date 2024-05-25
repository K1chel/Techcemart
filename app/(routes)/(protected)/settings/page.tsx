import { notFound } from "next/navigation";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { currentUser } from "@/lib/current-user";
import { SettingsForm } from "./_components/settings-form";

const SerttingsPage = async () => {
  const user = await currentUser();

  if (!user) return notFound();

  return (
    <div className="w-full h-full">
      <MaxWidthWrapper>
        <SettingsForm user={user} />
      </MaxWidthWrapper>
    </div>
  );
};

export default SerttingsPage;
