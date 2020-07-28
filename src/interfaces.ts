interface People {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
  title: string;
}

interface Film {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director : string;
  producer : string[];
  release_date : string;
  species: string[];
  starships: string[];
  vehicles: string[];
  characters : string[];
  planets : string[];
  url: string;
  created: string;
  edited: string;
}

interface Starship {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}

interface Vehicle {
  name: string;
  model: string;
  vehicle_class: string;
  manufacturer: string;
  length: string;
  cost_in_credits: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: string[];
  pilots: string[];
  url: string;
  created: string;
  edited: string;
}

interface Species {
  name: string;
  classification : string;
  designation: string;
  average_lifespan: string;
  average_height: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

interface Planet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string[];
  films: string[];
  url: string;
  created: string;
  edited: string;
}

export interface StarwarsTypes extends Planet, Species, Vehicle, Starship, Film, People {

}

export interface StarwarsEntitiesInterface {
  title: string;
  field: keyof StarwarsTypes;
}
