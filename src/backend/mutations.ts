import { getServerComponentClient } from "./supabase";

export async function incrementClicks(code: string) {
  const supabase = getServerComponentClient();

  // This code is not concurrency-safe, idealy it should be done with a stored procedure on supabase
  // It will also not work properly if caching is enabled
  // https://github.com/orgs/supabase/discussions/909#discussioncomment-546117
  const res = await supabase
    .from("crumbs")
    .select("clicks")
    .eq("code", code)
    .limit(1)
    .single();

  if (res.error) throw new Error("Error fetching crumb " + res.error);

  const previousClicks = res.data.clicks;
  await supabase
    .from("crumbs")
    .update({ clicks: previousClicks + 1 })
    .eq("code", code);
}
