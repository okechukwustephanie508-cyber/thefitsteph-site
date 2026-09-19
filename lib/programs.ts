export type Program = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  href: string;
};

export const programs: Program[] = [
  {
    name: "D30 Remote Gym",
    price: "₦10,000",
    cadence: "per month",
    description:
      "Structured live workouts and accountability for showing up, session after session.",
    href: "/d30/remote-gym",
  },
  {
    name: "D30 DIY",
    price: "₦15,000",
    cadence: "one-time",
    description:
      "The full D30 structure, built for going at it on your own schedule and your own pace.",
    href: "/d30/diy",
  },
  {
    name: "D30 Group",
    price: "₦30,000",
    cadence: "per month",
    description:
      "Accountability, community and a shared 30-day commitment, for the woman who is tired of starting over.",
    href: "/d30/group",
  },
  {
    name: "One-on-One Coaching",
    price: "₦100,000",
    cadence: "per month",
    description:
      "A personalized plan built around your life, with direct accountability from TheFitSteph.",
    href: "/one-on-one",
  },
];
