// Shape of one locale's content. content/en.ts and content/ar.ts must both satisfy it,
// so a missing Arabic string is a type error rather than a blank on the page.
// Text inside [[double brackets]] is unconfirmed and renders with a dashed outline.

import type { PhotoKey } from "./images";

export type IllustrationName = "source" | "inspect" | "stock" | "process" | "deliver";
export type CutoutKind = "rebar" | "beam" | "plate" | "pipe" | "coil" | "wire" | "bent";

export type ProductFamily = {
  slug: string;
  name: string;
  summary: string;
  cutout: CutoutKind;
  intro: string;
  applications: string[];
  why: string[];
  specs: [label: string, value: string][];
  standards: string[];
  related: string[];
  /** In-context stock photo shown under the hero (key in content/images.ts). */
  photo?: PhotoKey;
  /** Path under /public/docs once the client supplies the PDF. */
  datasheet?: string;
};

type Titled = { title: string; text: string };
type Stat = { value: string; suffix: string; label: string };
type PageMeta = { title: string; description: string };

export type Content = {
  meta: {
    siteTitle: string;
    titleTemplate: string;
    description: string;
    about: PageMeta;
    products: PageMeta;
    facilities: PageMeta;
    contact: PageMeta;
  };
  site: {
    name: string;
    tagline: string;
    phone: string;
    phoneHref: string;
    email: string;
    emailHref: string;
    generalPhone: string;
    generalPhoneHref: string;
    generalEmail: string;
    generalEmailHref: string;
    address: string;
    country: string;
    hours: string;
    fridayClosed: string;
    cr: string;
    salesContact: { name: string; role: string };
  };
  nav: { label: string; href: string }[];
  ui: {
    home: string;
    homeAria: string;
    mainNav: string;
    menu: string;
    menuDialog: string;
    close: string;
    otherLanguage: string;
    otherLanguageAria: string;
    quickContact: string;
    call: string;
    email: string;
    view: string;
    photo: string;
    placeholder: string;
    placeholderTitle: string;
    portraitPlaceholder: string;
    viewCertificate: string;
    pdfToSupply: string;
    footer: { goTo: string; products: string; contact: string; company: string; crNo: string; privacy: string };
    cta: { title: string; body: string; goToContact: string };
    listSep: string;
    listAnd: string;
  };
  home: {
    stripBefore: string;
    stripItems: { label: string; slug: string }[];
    stripAfter: string;
    whoLabel: string;
    statement: string;
    moreAbout: string;
    productsLabel: string;
    productsIntro: string;
    viewAll: string;
    statsLabel: string;
    statValue: string;
    statSuffix: string;
    statHeading: string;
    statSub: string;
    certifications: { name: string; detail: string }[];
    capabilitiesLabel: string;
    capabilitiesHeading: string;
    capabilities: { title: string; body: string; illustration: IllustrationName }[];
    continuity: string;
    discover: string;
    facilitiesLink: string;
    qualityLink: string;
    processLabel: string;
    processHeading: string;
    processSteps: { title: string; body: string; illustration: IllustrationName }[];
  };
  about: {
    label: string;
    title: string;
    intro: string;
    storyLabel: string;
    storyHeading: string;
    timeline: { year: string; text: string }[];
    valuesLabel: string;
    valuesHeading: string;
    values: Titled[];
    numbersLabel: string;
    stats: Stat[];
    leadershipLabel: string;
    leadershipHeading: string;
    portrait: string;
    leadership: { name: string; role: string }[];
  };
  productsPage: {
    label: string;
    title: string;
    intro: string;
    familiesAria: string;
    cantSeeLabel: string;
    cantSee: string;
    askAbout: string;
    adviceLabel: string;
    adviceHeading: string;
    adviceBody: string;
    goToContact: string;
  };
  productPage: {
    label: string;
    contactSales: string;
    downloadDatasheet: string;
    datasheetToSupply: string;
    overview: string;
    applications: string;
    why: string;
    specsLabel: string;
    specsHeading: string;
    specsNote: string;
    specsCaption: string;
    standards: string;
    relatedLabel: string;
    relatedHeading: string;
  };
  facilities: {
    label: string;
    title: string;
    intro: string;
    yardLabel: string;
    yardHeadingBefore: string;
    yardArea: string;
    yardHeadingAfter: string;
    yardBody: string;
    address: string;
    map: string;
    yardStats: Stat[];
    processingLabel: string;
    processingHeading: string;
    processingServices: { title: string; text: string; illustration: IllustrationName }[];
    qualityLabel: string;
    qualityHeading: string;
    qualityPoints: Titled[];
    certsLabel: string;
    certsHeading: string;
    deliveryLabel: string;
    deliveryHeading: string;
    deliveryBody: string;
    hseLabel: string;
    hseHeading: string;
    hseBody: string;
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    optionsAria: string;
    general: string;
    formLabel: string;
    formHeading: string;
    visitLabel: string;
    visitHeading: string;
    address: string;
    hours: string;
    registration: string;
    map: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
      consentBefore: string;
      consentLink: string;
      consentAfter: string;
      send: string;
      sending: string;
      successTitle: string;
      successBody: string;
      errName: string;
      errEmail: string;
      errMessage: string;
      errConsent: string;
      errTooLong: string;
      errRate: string;
      errGeneric: string;
    };
  };
  notFound: { label: string; title: string; body: string; home: string; products: string };
  products: ProductFamily[];
};
