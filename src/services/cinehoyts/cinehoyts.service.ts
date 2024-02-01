import { ZONES_URL } from "./constants";

export interface MovieTeatherAPIResponseElement {
  Complejos: [
    {
      Nombre: string;
      Clave: string;
    },
  ];
  Nombre: string;
  Clave: string;
  GeoX: string;
  GeoY: string;
}

export type MovieTeatherAPIResponse = [MovieTeatherAPIResponseElement];

//TODO: handle retry when this call fails.
export const getMovieTheathers =
  async (): Promise<MovieTeatherAPIResponse | void> => {
    try {
      const resp = await fetch(ZONES_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
      return (await resp.json()) as MovieTeatherAPIResponse;
    } catch (error) {
      console.error("Error getting zones url for cinehoyts.");
      console.log(error, "\n");
    }
  };
