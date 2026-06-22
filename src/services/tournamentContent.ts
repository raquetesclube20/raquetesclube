export type TournamentContent = {
  active: boolean;
  altText: string;
  bannerUrl: string;
  buttonLabel?: string;
  eventDate?: string;
  expiresAt?: string;
  registrationUrl?: string;
  title: string;
};

const projectId = "7eqc9tfi";
const dataset = "production";
const apiVersion = "2025-02-19";
const query = `*[_type == "tournament" && _id == "nextTournament"][0]{
  active,
  title,
  altText,
  eventDate,
  expiresAt,
  registrationUrl,
  buttonLabel,
  "bannerUrl": banner.asset->url
}`;

export async function fetchTournamentContent(signal?: AbortSignal) {
  const endpoint = new URL(
    `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}`,
  );
  endpoint.searchParams.set("query", query);

  const response = await fetch(endpoint, {signal});
  if (!response.ok) {
    throw new Error(`Sanity request failed with status ${response.status}`);
  }

  const payload = (await response.json()) as {result?: TournamentContent | null};
  const content = payload.result;

  if (!content?.active || !content.bannerUrl) return null;
  if (content.expiresAt && new Date(content.expiresAt).getTime() <= Date.now()) {
    return null;
  }

  return content;
}
