export type PricingOption = {
  label: string;
  price: string;
};

export type Program = {
  name: string;
  price: string;
  cadence: string;
  description: string;
  href: string;
  pricingOptions?: PricingOption[];
};

export const programs: Program[] = [
  {
    name: "D30 Remote Gym",
    price: "₦10,000",
    cadence: "per month",
    description:
      "A women-only virtual gym: 4 live workouts a week, home-friendly training and accountability to stay consistent without a gym commute.",
    href: "/d30/remote-gym",
  },
  {
    name: "D30 DIY",
    price: "₦15,000",
    cadence: "one-time",
    description:
      "The self-paced 30-day D30 system: lifetime access, a daily checklist and progress tracking, open to men and women.",
    href: "/d30/diy",
  },
  {
    name: "D30 Group",
    price: "₦30,000",
    cadence: "for 30 days",
    description:
      "4 live workouts a week, nutrition challenges and a women-only accountability community, over a 30-day or 90-day commitment.",
    href: "/d30/group",
    pricingOptions: [
      { label: "30 Days", price: "₦30,000" },
      { label: "90 Days", price: "₦75,000" },
    ],
  },
  {
    name: "One-on-One Coaching",
    price: "₦100,000",
    cadence: "for 30 days",
    description:
      "A personalized macro calculation, nutrition guidance and workout plan built around you, with 4 live workouts a week and daily accountability.",
    href: "/one-on-one",
    pricingOptions: [
      { label: "30 Days", price: "₦100,000" },
      { label: "90 Days", price: "₦270,000" },
      { label: "90-Day Payment Plan", price: "2 payments of ₦135,000" },
    ],
  },
];
