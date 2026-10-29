// Draft product data — see ../../website-brief.md §6.4. All specification values are
// unconfirmed drafts for the client to check; [[brackets]] mark facts still to supply.

export type ProductFamily = {
  slug: string;
  name: string;
  summary: string;
  cutout: "rebar" | "beam" | "plate" | "pipe" | "coil" | "wire" | "bent";
  intro: string;
  applications: string[];
  why: string[];
  specs: [label: string, value: string][];
  standards: string[];
  related: string[];
  /** Path under /public/docs once the client supplies the PDF. */
  datasheet?: string;
};

export const products: ProductFamily[] = [
  {
    slug: "rebar",
    name: "Rebar & mesh",
    summary: "Deformed bars from 8 to 32 mm and welded mesh, to BS 4449 and ASTM A615.",
    cutout: "rebar",
    intro:
      "High-yield deformed bars and welded mesh for reinforced concrete, held in stock in all common diameters.",
    applications: ["Foundations and piles", "Slabs, beams and columns", "Retaining walls", "Precast elements"],
    why: [
      "Stocked from 8 to 32 mm",
      "Cut & bend to your schedule",
      "Mill test certificate with every delivery",
      "Delivered across Bahrain",
    ],
    specs: [
      ["Grades", "B500B, Grade 60"],
      ["Standards", "BS 4449:2005+A3, ASTM A615 / A615M"],
      ["Diameters", "8, 10, 12, 16, 20, 25, 32 mm"],
      ["Lengths", "12 m standard; cut-to-length on request"],
      ["Mesh", "A142–A393 and B-series, sheets 4.8 × 2.4 m"],
      ["Finish", "Black; epoxy-coated on request"],
      ["Documentation", "EN 10204 3.1 mill test certificate"],
    ],
    standards: ["BS 4449", "ASTM A615", "EN 10204 3.1"],
    related: ["wire-accessories", "processing", "structural-sections"],
  },
  {
    slug: "structural-sections",
    name: "Structural sections",
    summary: "IPE, HEA, HEB, UB, UC, angles and channels for frames of every size.",
    cutout: "beam",
    intro:
      "Hot-rolled beams, columns, angles and channels for steel frames, mezzanines, sheds and industrial structures.",
    applications: ["Building frames", "Warehouses and sheds", "Mezzanines and platforms", "Industrial structures"],
    why: [
      "European and British section ranges",
      "Cut to length before delivery",
      "Traceable to mill and heat number",
      "Crane-lorry delivery to site",
    ],
    specs: [
      ["Sections", "IPE 80–600, HEA/HEB 100–600, UB, UC"],
      ["Angles & channels", "Equal & unequal angles, UPN / PFC channels"],
      ["Grades", "S235JR, S275JR, S355JR, ASTM A36 / A572"],
      ["Standards", "EN 10025, BS 4-1, ASTM A6"],
      ["Lengths", "6 m and 12 m; cut-to-length on request"],
      ["Documentation", "EN 10204 3.1 mill test certificate"],
    ],
    standards: ["EN 10025", "BS 4-1", "ASTM A36"],
    related: ["plates-sheets", "pipes-hollow-sections", "processing"],
  },
  {
    slug: "plates-sheets",
    name: "Plates & sheets",
    summary: "Hot-rolled, cold-rolled and chequered plate, cut to your dimensions.",
    cutout: "plate",
    intro: "Plate and sheet in the thicknesses fabricators use every day, sheared to size in our yard.",
    applications: ["Base plates and connections", "Tanks and fabrication", "Flooring and walkways", "Machinery"],
    why: ["Wide range of thicknesses", "Sheared to your dimensions", "Full mill traceability", "Fast turnaround"],
    specs: [
      ["Hot-rolled plate", "3–50 mm"],
      ["Cold-rolled sheet", "0.5–3 mm"],
      ["Chequered plate", "3–10 mm"],
      ["Grades", "S275, S355, ASTM A36"],
      ["Sheet sizes", "1250 × 2500, 1500 × 3000, 2000 × 6000 mm"],
      ["Processing", "Shearing and cut-to-size"],
    ],
    standards: ["EN 10025", "ASTM A36", "EN 10204 3.1"],
    related: ["structural-sections", "coils-galvanized", "processing"],
  },
  {
    slug: "pipes-hollow-sections",
    name: "Pipes & hollow sections",
    summary: "ERW and seamless pipe, SHS and RHS for structures and services.",
    cutout: "pipe",
    intro: "Pipe and structural hollow sections for frames, handrails, scaffolding and building services.",
    applications: ["Structural frames", "Handrails and balustrades", "Water and services lines", "Fencing"],
    why: ["Black and galvanized", "Square, rectangular and round", "Cut to length", "Delivered with certificates"],
    specs: [
      ["Pipe", 'ERW and seamless, ½"–24"'],
      ["SHS", "20 × 20 to 300 × 300 mm"],
      ["RHS", "40 × 20 to 400 × 200 mm"],
      ["Standards", "ASTM A53 / A106, EN 10219, EN 10210"],
      ["Finish", "Black or hot-dip galvanized"],
      ["Lengths", "6 m standard; cut-to-length on request"],
    ],
    standards: ["ASTM A53", "EN 10219", "EN 10210"],
    related: ["structural-sections", "coils-galvanized", "processing"],
  },
  {
    slug: "coils-galvanized",
    name: "Coils & galvanized",
    summary: "HR, CR and GI coil and sheet for fabricators and manufacturers.",
    cutout: "coil",
    intro: "Hot-rolled, cold-rolled and galvanized coil and sheet for roll-forming, ducting and manufacturing.",
    applications: ["Roll-forming and purlins", "HVAC ducting", "Roofing and cladding", "Appliance and OEM parts"],
    why: ["HR, CR and GI in stock", "Slit-to-width on request", "Consistent coating weights", "Regular supply"],
    specs: [
      ["Products", "HR, CR and GI coil and sheet"],
      ["Thickness", "0.3–6 mm"],
      ["Zinc coating", "Z120–Z275"],
      ["Standards", "EN 10346, ASTM A653"],
      ["Processing", "Slit-to-width, cut-to-length sheet"],
    ],
    standards: ["EN 10346", "ASTM A653", "EN 10204 3.1"],
    related: ["plates-sheets", "pipes-hollow-sections", "wire-accessories"],
  },
  {
    slug: "wire-accessories",
    name: "Wire & accessories",
    summary: "Wire rod, binding wire, couplers and spacers to finish the job.",
    cutout: "wire",
    intro: "Everything you need alongside the rebar: wire rod, binding wire and reinforcement accessories.",
    applications: ["Rebar fixing", "Mesh and cage making", "Splicing bars", "Cover and spacing"],
    why: ["One order with your rebar", "Stocked in bulk", "Matched to your bar sizes", "Delivered together"],
    specs: [
      ["Wire rod", "5.5–12 mm"],
      ["Binding wire", "Annealed, 1.2–1.6 mm, [[coil weights]]"],
      ["Couplers", "Threaded and swaged, 12–40 mm"],
      ["Spacers & chairs", "Plastic and concrete, common cover sizes"],
    ],
    standards: ["BS 4449", "EN 10204 3.1"],
    related: ["rebar", "processing", "coils-galvanized"],
  },
  {
    slug: "processing",
    name: "Processing",
    summary: "Cut & bend, cut-to-length and shearing, done in our yard before delivery.",
    cutout: "bent",
    intro: "We process steel in our yard so it arrives on site ready to fix, weld or erect.",
    applications: ["Bar-bending schedules", "Cut-to-length sections and pipe", "Plate shearing", "Kitted deliveries"],
    why: ["Less waste on site", "Faster fixing", "Tagged by schedule mark", "One supplier for steel and processing"],
    specs: [
      ["Cut & bend", "To BS 8666 shape codes, 8–32 mm"],
      ["Cut-to-length", "Bars, sections and pipe"],
      ["Shearing", "Plate and sheet up to [[X]] mm"],
      ["Turnaround", "[[24–72]] hours depending on volume"],
      ["Labelling", "Bundles tagged by schedule mark"],
    ],
    standards: ["BS 8666", "EN 10204 3.1"],
    related: ["rebar", "structural-sections", "plates-sheets"],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
