// Maps a product slug to the dashboard placeholder shown for it today.
// Each entry is where the real Remote Gym, DIY, D30 Group, and One-on-One
// product experiences plug in during later phases, so the dashboard never
// needs to hardcode a single product's layout.
export const PRODUCT_REGISTRY: Record<
  string,
  { title: string; blurb: string }
> = {
  "d30-remote-gym": {
    title: "D30 Remote Gym",
    blurb: "Your remote gym programming and check-ins will appear here.",
  },
  "d30-diy": {
    title: "D30 DIY",
    blurb: "Your self-paced D30 DIY content will appear here.",
  },
  "d30-group": {
    title: "D30 Group",
    blurb: "Your D30 Group community space will appear here.",
  },
  "one-on-one-coaching": {
    title: "One-on-One Coaching",
    blurb: "Your one-on-one coaching space will appear here.",
  },
};
