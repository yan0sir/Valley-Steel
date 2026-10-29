export const certifications = [
  { name: "[[ISO 9001:2015]]", detail: "Quality management" },
  { name: "BS 4449 / BS EN 10080", detail: "Reinforcing steel" },
  { name: "ASTM A615 / A706", detail: "Deformed bars" },
  { name: "EN 10025", detail: "Structural steel" },
  { name: "EN 10204 3.1", detail: "Mill test certificates with every delivery" },
];

export const capabilities = [
  {
    title: "Stock",
    body: "We hold [[X,000]] tonnes across [[7]] product families in our yard in [[area]], so most orders ship from stock, not from a mill schedule.",
    illustration: "stock",
  },
  {
    title: "Processing",
    body: "Cut & bend to bar-bending schedules, cut-to-length and shearing in-house. Less waste on site, faster fixing.",
    illustration: "process",
  },
  {
    title: "Delivery",
    body: "Our own trucks and crane lorries deliver across Bahrain, typically within [[24–48]] hours of order confirmation.",
    illustration: "deliver",
  },
] as const;

export const processSteps = [
  {
    title: "Source",
    body: "We buy from approved mills in the GCC and internationally, against the grades your project specifies.",
    illustration: "source",
  },
  {
    title: "Inspect",
    body: "Every consignment is checked against its mill test certificate: grade, size, markings and heat numbers.",
    illustration: "inspect",
  },
  {
    title: "Stock",
    body: "Steel is stored under cover or on raised racks in our yard, tagged and traceable.",
    illustration: "stock",
  },
  {
    title: "Process",
    body: "We cut, bend and shear to your schedule before it leaves the yard.",
    illustration: "process",
  },
  {
    title: "Deliver",
    body: "Loaded, documented and delivered to site, with certificates handed over with the delivery note.",
    illustration: "deliver",
  },
] as const;

export type IllustrationName = (typeof processSteps)[number]["illustration"];
