import {Posting,JobData} from '@/app/types/job'
export async function getAllJobPostings():Promise<Posting[]>{
    const res = await fetch(
    "https://drive.google.com/uc?export=download&id=1QAObCWl5f0Ytc3bUHRREdNVBd4P-dO07",
    {
      cache: 'force-cache'
    }
  );
   let data: JobData;
  try {
    data = await res.json();
  } catch (e) {
    console.error("Response is not valid JSON:", e);
    throw new Error("Failed to parse job postings data as JSON.");
  }

  if (!data || !Array.isArray(data.job_postings)) {
    throw new Error("Job postings data is not in the expected format.");
  }
  const job_postings_with_index: Posting[] = data.job_postings.map((job, index) => ({
    ...job,
    id: index 
  }));
  return job_postings_with_index;

}
export async function  getJobByIndex(index:number):Promise<Posting|undefined>{
    const jo=await getAllJobPostings();
    return jo.find(job=>job.id==index)
}