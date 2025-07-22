import { getAllJobPostings } from "./lib/jobs";
import { Posting } from "./types/job";
import ClientSorter from "./components/ClientSorter"; 

export default async function Home() {
  const data: Posting[] = await getAllJobPostings();

  return (
    <div className="gap-[40px] pt-[72px] pb-[72px] pl-[124px] pr-[123px]">
      <ClientSorter jobs={data} />
    </div>
  );
}
