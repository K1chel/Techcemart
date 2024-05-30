"use client";

const ABOUT_US_LINKS = [
  {
    href: "/#features",
    name: "Features",
    description: "Discover the features that we offer",
  },
  {
    href: "/#testimonials",
    name: "Testimonials",
    description: "See what our customers are saying",
  },
  {
    href: "/#contact",
    name: "Contact",
    description: "Get in touch with us",
  },
  {
    href: "/#faq",
    name: "FAQ",
    description: "Questions? We got answers",
  },
];

export const AboutUs = () => {
  return (
    <div className="grid h-fit w-full grid-cols-12  lg:w-[600px] ml-28 2xl:ml-0 overflow-hidden bg-white z-30">
      <div className="col-span-12 flex flex-col justify-between bg-primary px-4 py-3 lg:col-span-4">
        <div className="flex flex-col mb-3">
          <h3 className="text-lg font-semibold text-white">About Us</h3>
          <p className="text-sm text-zinc-300">
            We are fresh and innivative marketplace. We are here to help you to
            find the best products, for learning coding and programming.
          </p>
        </div>
        <button className="rounded-2xl text-sm border-2 border-dashed border-white hover:border-black text-white px-3 py-2 font-semibold uppercase hover:bg-white hover:text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
          Contact Us
        </button>
      </div>
      <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-3 bg-white p-6 lg:col-span-8">
        {ABOUT_US_LINKS.map((link) => (
          <div
            key={link.href}
            className="px-4 py-3 rounded-lg border bg-white hover:bg-secondary transition flex flex-col gap-y-1 cursor-pointer"
          >
            <h6 className="text-lg font-semibold">{link.name}</h6>
            <p className="text-xs font-medium text-muted-foreground">
              {link.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
