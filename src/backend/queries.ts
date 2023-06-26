import { getServerComponentClient } from "./supabase";

export async function getCrumbByCode(code: string) {
  const supabase = getServerComponentClient();
  var res = await supabase
    .from("crumbs")
    .select("*")
    .eq("code", code)
    .limit(1)
    .single();

  const data = res.data;
  if (!data) return null;

  return {
    code: code,
    description: data.description,
    createdBy: data.created_by,
    clicks: data.clicks,
  };
}
