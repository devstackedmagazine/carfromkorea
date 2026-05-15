"use client";

import Link from "next/link";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="py-20 px-8 sm:px-12 lg:px-20 bg-[#111415]">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl p-12 lg:p-16 overflow-hidden bg-muted-blue">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-40 bg-light-emerald" />

          <div className="relative z-10 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-soft-blue">
              Ready to Get Started?
            </h2>
            <p className="text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-soft-blue">
              Schedule a private consultation or browse our current inventory to
              begin your Threads Studio experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/cars" className="block w-full sm:w-auto">
                <Button
                  className="hover:shadow-lg hover:scale-105 active:scale-95 bg-light-emerald text-charcoal-gray"
                  variant="luxe"
                >
                  View Inventory
                </Button>
              </Link>

              <Link href="/FAQ" className="block w-full sm:w-auto">
                <Button
                  className="border-soft-blue text-soft-blue hover:shadow-lg hover:scale-105 hover:bg-soft-blue/30 hover:text-white"
                  variant="outline"
                >
                  FAQ Answers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
