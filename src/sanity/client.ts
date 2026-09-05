import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: import.meta.env["VITE_SANITY_PROJECT_ID"] ?? "9ucyk42c",
  dataset: import.meta.env["VITE_SANITY_DATASET"] ?? "production",
  apiVersion: "2026-09-04",
  useCdn: true,
});
