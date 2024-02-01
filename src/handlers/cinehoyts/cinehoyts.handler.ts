import { getMovieTeathersSelector } from "@/selectors/cinehoyts";
import { getMovieTheathers } from "@/services/cinehoyts";

export const runCinehoytsHandler = async (): Promise<void> => {
  const zonesResponse = await getMovieTheathers();
  if (!zonesResponse) return;

  getMovieTeathersSelector(zonesResponse);
};
