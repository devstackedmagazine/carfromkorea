import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ShowroomInfo from "@/components/contact/ShowroomInfo";

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <ContactHeader />

      <section className="px-6 sm:px-12 lg:px-20 pb-16">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
            <ShowroomInfo />
          </div>
        </div>
      </section>
    </main>
  );
}
