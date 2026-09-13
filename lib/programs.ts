export type Program = {
  name: string;
  price: string;
  cadence: string;
  description: string;
};

export const programs: Program[] = [
  {
    name: "D30 Remote Gym",
    price: "₦10,000",
    cadence: "per month",
    description:
      "Structured programming and remote check-ins that keep you showing up, wherever you train.",
  },
  {
    name: "D30 DIY",
    price: "₦15,000",
    cadence: "one-time",
    description:
      "The full D30 framework to run on your own terms, built for people who want the system without the schedule.",
  },
  {
    name: "D30 Group",
    price: "₦30,000",
    cadence: "per month",
    description:
      "Train and stay accountable alongside a community moving through the same 30-day cycle as you.",
  },
  {
    name: "One-on-One Coaching",
    price: "₦100,000",
    cadence: "per month",
    description:
      "Direct, personal accountability with TheFitSteph — the most hands-on way to finally stay consistent.",
  },
];
