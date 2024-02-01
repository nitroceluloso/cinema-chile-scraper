import { MovieTeatherAPIResponse } from "@/services/cinehoyts";

export const getMovieTeathersSelector = (respApi: MovieTeatherAPIResponse) =>
  respApi.flatMap((city) => {
    return city.Complejos.map((complex) => ({
      name: complex.Nombre,
      key: complex.Clave,
      city: city.Nombre,
      cityKey: city.Clave,
      enabled: false,
    }));
  });
