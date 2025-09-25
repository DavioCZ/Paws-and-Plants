export type Safety = "SAFE" | "CAUTION" | "TOXIC";
export type Light = "SHADE" | "INDIRECT" | "BRIGHT";

export type Plant = {
  slug: string; name: string; latin?: string;
  safety: Safety; light: Light; difficulty: "EASY"|"MEDIUM"|"ADVANCED";
};

export const PLANTS: Plant[] = [
  { slug: "calathea", name: "Calathea", latin: "Calathea spp.", safety: "SAFE", light: "INDIRECT", difficulty:"MEDIUM" },
  { slug: "chamedorea", name: "Chamedorea", latin: "Chamaedorea elegans", safety: "SAFE", light: "INDIRECT", difficulty:"EASY" },
  { slug: "monstera", name: "Monstera", latin: "Monstera deliciosa", safety: "TOXIC", light: "INDIRECT", difficulty:"EASY" },
  // ...další rostliny doplníš později
];
