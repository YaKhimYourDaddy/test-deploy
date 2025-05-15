import ChoosePostType from "@/components/search/choose-post-type";
import SearchButton from "@/components/search/search-button";
export default async function Page({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  return (
    <>
      <ChoosePostType tabPromise={params} />
      <SearchButton />
    </>
  );
}
