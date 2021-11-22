export const STUDIO_GHIBLI_URL = "https://ghibliapi.herokuapp.com/";

class Index {
  constructor(endpoint, ...properties) {
    this.endpoint = endpoint;
    this.title = properties[0];
    this.properties = properties;
  }
}

export const routes = {
  films: new Index("films", "title", "director", "release_date", "rt_score"),
  people: new Index("people", "name", "gender", "age"),
  locations: new Index("locations", "name", "climate", "terrain"),
  species: new Index(
    "species",
    "name",
    "classification",
    "hair_colors",
    "eye_colors"
  ),
  vehicles: new Index("vehicles", "name", "description", "vehicle_class"),
};
