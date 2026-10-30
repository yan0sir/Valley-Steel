import { HeroReveal } from "@/components/blocks/HeroReveal";
import { ProductSelector } from "@/components/blocks/ProductSelector";
import { StatsCerts } from "@/components/blocks/StatsCerts";
import { Capabilities } from "@/components/blocks/Capabilities";
import { ProcessSteps } from "@/components/blocks/ProcessSteps";
import { ContactCTA } from "@/components/blocks/ContactCard";

export default function Home() {
  return (
    <>
      <HeroReveal />
      <ProductSelector />
      <StatsCerts />
      <Capabilities />
      <ProcessSteps />
      <ContactCTA />
    </>
  );
}
