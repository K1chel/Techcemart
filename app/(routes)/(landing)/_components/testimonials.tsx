import { InfiniteMovingCards } from "./infinite-moving-cards";

export const Testimonials = () => {
  return (
    <div className="h-[35rem] rounded-md flex flex-col antialiased bg-slate-100 items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

const testimonials = [
  {
    quote:
      "This marketplace has revolutionized the way I work as a developer. The vast array of tools and resources available has made my job easier and more efficient.",
    name: "John Doe",
    title: "Senior Software Developer",
  },
  {
    quote:
      "As a product seller, I've found this marketplace to be a game-changer. The platform is easy to use, and it's helped me reach a wider audience than ever before.",
    name: "Jane Smith",
    title: "Product Seller",
  },
  {
    quote:
      "I've been able to find unique and innovative solutions for my software projects. The community is supportive and the platform is user-friendly. Highly recommended!",
    name: "Alice Johnson",
    title: "Freelance Developer",
  },
  {
    quote:
      "Selling my products on this marketplace has been a breeze. The process is straightforward, and the customer support is top-notch. It's the best platform for sellers like me.",
    name: "Bob Williams",
    title: "Entrepreneur",
  },
  {
    quote:
      "This marketplace is a one-stop-shop for all my development needs. The quality of the products is unmatched, and the prices are reasonable. I couldn't ask for more.",
    name: "Charlie Brown",
    title: "Web Developer",
  },
];
