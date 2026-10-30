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
    alt: { en: "Aerial view of a steel frame structure on a construction site", ar: "منظر جوي لهيكل فولاذي في موقع إنشاء" },
    credit: "Wikideas1, Wikimedia Commons (CC0) — File:Steel_frame_structure.jpg",
  },
  yardPipes: {
    src: pipesStock,
    alt: { en: "Bundles of steel pipe and scaffold tube stacked in a yard", ar: "حزم من الأنابيب الفولاذية وأنابيب السقالات مكدّسة في ساحة" },
    credit: "Fumikas Sagisavas, Wikimedia Commons (CC0) — File:Steel_pipes_and_scaffolding_piled_on_the_roadside.jpg",
  },
  deliveryCoils: {
    src: coilsTruck,
    alt: { en: "Steel coils loaded on the deck of a truck", ar: "لفائف حديد محمّلة على سطح شاحنة" },
    credit: "Fumikas Sagisavas, Wikimedia Commons (CC0) — File:Steel_coils_loaded_on_truck_deck.jpg",
  },
  rebarSite: {
    src: rebarSite,
    alt: { en: "Reinforcing bars fixed in place on a construction site", ar: "قضبان تسليح مثبتة في موقع إنشاء" },
    credit: "Henryeke, Wikimedia Commons (CC0) — File:Rebar_combo.jpg",
  },
  rebarStockpile: {
    src: rebarStockpile,
    alt: { en: "Stockpile of steel reinforcing bars of different diameters", ar: "مخزون من قضبان التسليح بأقطار مختلفة" },
    credit: "rawpixel.com (CC0 public domain) — Iron rods reinforcing bars",
  },
  rebarCloseup: {
    src: rebarCloseup,
    alt: { en: "Close-up of ribbed steel reinforcing bars", ar: "لقطة قريبة لقضبان تسليح محززة" },
    credit: "rawpixel.com (CC0 public domain) — Steel rods",
  },

  // Product family pages
  productRebar: {
    src: productRebar,
    alt: { en: "Bundles of deformed steel rebar tied with binding wire", ar: "حزم من حديد التسليح المحزز مربوطة بسلك الربط" },
    credit: "rawpixel.com (CC0 public domain) — rebar bundles (px780251)",
  },
  productBeams: {
    src: productBeams,
    alt: { en: "Hot-rolled steel I-beams laid out ready for fabrication", ar: "جسور فولاذية مدرفلة على الساخن جاهزة للتصنيع" },
    credit: "rawpixel.com (CC0 public domain) — I-beam raw material",
  },
  productPlates: {
    src: productPlates,
    alt: { en: "Stack of flat steel sheets", ar: "رصّة من الصفائح الفولاذية المسطحة" },
    credit: "Wikimedia Commons (CC0) — File:Stainless_Steel_316L_Plates_Traders.jpg",
  },
  productPipes: {
    src: productPipes,
    alt: { en: "Stacked galvanised steel pipes seen end-on", ar: "أنابيب فولاذية مجلفنة مكدّسة من الطرف" },
    credit: "rawpixel.com (CC0 public domain) — Pile of pipe at plant",
  },
  productCoils: {
    src: productCoils,
    alt: { en: "Pre-painted steel coils in several colours", ar: "لفائف حديد مطلية مسبقاً بعدة ألوان" },
    credit: "Fumikas Sagisavas, Wikimedia Commons (CC0) — File:Colored_steel_coils.jpg",
  },
  productWire: {
    src: productWire,
    alt: { en: "Drum of tightly wound steel wire", ar: "بكرة من السلك الفولاذي الملفوف بإحكام" },
    credit: "rawpixel.com (CC0 public domain) — Steel wire rope drum",
  },
  productProcessing: {
    src: productProcessing,
    alt: { en: "Sparks flying as steel is cut to length", ar: "شرر يتطاير أثناء قص الحديد حسب الطول" },
    credit: "rawpixel.com (CC0 public domain) — Welder sparks",
  },
};

export type PhotoKey = keyof typeof photos;
