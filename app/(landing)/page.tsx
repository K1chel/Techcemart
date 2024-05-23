import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function Home() {
  return (
    <div className="space-y-10 w-full">
      <MaxWidthWrapper>
        <p>children</p>
      </MaxWidthWrapper>
    </div>
  );
}
