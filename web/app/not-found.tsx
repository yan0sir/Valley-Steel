import { Button, SectionLabel } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col justify-center pb-20 pt-36">
      <SectionLabel>404</SectionLabel>
      <h1 className="t-h1 mt-6 max-w-3xl">This page has gone off the truck.</h1>
      <p className="t-body-l mt-6 max-w-xl text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved. (In this preview, only the Home page is built so
        far.)
      </p>
      <div className="mt-10 flex gap-3">
        <Button href="/">Back to home</Button>
        <Button href="/#products-heading" variant="secondary">
          View products
        </Button>
      </div>
    </section>
  );
}
