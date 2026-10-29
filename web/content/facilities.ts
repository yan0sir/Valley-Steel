// Draft copy — see ../../website-brief.md §6.5. Figures in [[brackets]] are unconfirmed.

export const yardStats = [
  { value: "10,000", suffix: " m²", label: "stockyard & covered warehouse" },
  { value: "5,000", suffix: " t", label: "of steel in stock" },
  { value: "4", suffix: "", label: "overhead cranes" },
  { value: "12", suffix: "", label: "flatbeds & crane lorries" },
];

export const processingServices = [
  {
    title: "Cut & bend",
    text: "Automated cutting and bending to BS 8666 shape codes, straight from your bar-bending schedule.",
    illustration: "process",
  },
  {
    title: "Cut-to-length",
    text: "Sections, pipes and bars cut to the length you specify, so nothing is wasted on site.",
    illustration: "stock",
  },
  {
    title: "Shearing",
    text: "Plates and sheets sheared to size for fabricators, ready to weld.",
    illustration: "inspect",
  },
] as const;

export const qualityPoints = [
  { title: "Approved mills", text: "We buy only from mills with recognised product certification." },
  {
    title: "Incoming inspection",
    text: "Size, grade markings and heat numbers are checked against the mill test certificate on arrival.",
  },
  { title: "Traceability", text: "Stock is tagged by heat number from our yard to your site." },
  {
    title: "Documentation",
    text: "EN 10204 3.1 mill test certificates are handed over with every delivery note.",
  },
];

export const deliveryCopy =
  "Our own fleet of [[12]] flatbeds and crane lorries covers the whole Kingdom, from Manama to Askar and from Muharraq to Hamad Town. Typical lead time is [[24–48]] hours from confirmed order; urgent deliveries go out the same day where stock allows. GCC exports arranged on request.";
