// Interim stock photography (all CC0 / public domain, no attribution required).
// Replace with the client's own shoot (brief §7 shot list); credits kept for reference.
import steelFrameAerial from "@/public/images/steel-frame-aerial.jpg";
import pipesStock from "@/public/images/pipes-stock.jpg";
import coilsTruck from "@/public/images/coils-truck.jpg";
import rebarSite from "@/public/images/rebar-site.jpg";
import rebarStockpile from "@/public/images/rebar-stockpile.jpg";
import rebarCloseup from "@/public/images/rebar-closeup.jpg";
import productRebar from "@/public/images/product-rebar.jpg";
import productBeams from "@/public/images/product-beams.jpg";
import productPlates from "@/public/images/product-plates.jpg";
import productPipes from "@/public/images/product-pipes.jpg";
import productCoils from "@/public/images/product-coils.jpg";
import productWire from "@/public/images/product-wire.jpg";
import productProcessing from "@/public/images/product-processing.jpg";

export const photos = {
  heroAerial: {
    src: steelFrameAerial,
    alt: "Aerial view of a steel frame structure on a construction site",
    credit: "Wikideas1, Wikimedia Commons (CC0) — File:Steel_frame_structure.jpg",
  },
  yardPipes: {
    src: pipesStock,
    alt: "Bundles of steel pipe and scaffold tube stacked in a yard",
    credit: "Fumikas Sagisavas, Wikimedia Commons (CC0) — File:Steel_pipes_and_scaffolding_piled_on_the_roadside.jpg",
  },
  deliveryCoils: {
    src: coilsTruck,
    alt: "Steel coils loaded on the deck of a truck",
    credit: "Fumikas Sagisavas, Wikimedia Commons (CC0) — File:Steel_coils_loaded_on_truck_deck.jpg",
  },
  rebarSite: {
    src: rebarSite,
    alt: "Reinforcing bars fixed in place on a construction site",
    credit: "Henryeke, Wikimedia Commons (CC0) — File:Rebar_combo.jpg",
  },
  rebarStockpile: {
    src: rebarStockpile,
    alt: "Stockpile of steel reinforcing bars of different diameters",
    credit: "rawpixel.com (CC0 public domain) — Iron rods reinforcing bars",
  },
  rebarCloseup: {
    src: rebarCloseup,
    alt: "Close-up of ribbed steel reinforcing bars",
    credit: "rawpixel.com (CC0 public domain) — Steel rods",
  },

  // Product family pages
  productRebar: {
    src: productRebar,
    alt: "Bundles of deformed steel rebar tied with binding wire",
    credit: "rawpixel.com (CC0 public domain) — rebar bundles (px780251)",
  },
  productBeams: {
    src: productBeams,
    alt: "Hot-rolled steel I-beams laid out ready for fabrication",
    credit: "rawpixel.com (CC0 public domain) — I-beam raw material",
  },
  productPlates: {
    src: productPlates,
    alt: "Stack of flat steel sheets",
    credit: "Wikimedia Commons (CC0) — File:Stainless_Steel_316L_Plates_Traders.jpg",
  },
  productPipes: {
    src: productPipes,
    alt: "Stacked galvanised steel pipes seen end-on",
    credit: "rawpixel.com (CC0 public domain) — Pile of pipe at plant",
  },
  productCoils: {
    src: productCoils,
    alt: "Pre-painted steel coils in several colours",
    credit: "Fumikas Sagisavas, Wikimedia Commons (CC0) — File:Colored_steel_coils.jpg",
  },
  productWire: {
    src: productWire,
    alt: "Drum of tightly wound steel wire",
    credit: "rawpixel.com (CC0 public domain) — Steel wire rope drum",
  },
  productProcessing: {
    src: productProcessing,
    alt: "Sparks flying as steel is cut to length",
    credit: "rawpixel.com (CC0 public domain) — Welder sparks",
  },
};

export type PhotoKey = keyof typeof photos;
