import { Truck, Warehouse, Network, type LucideIcon } from "lucide-react";

export type SegmentId = "driver" | "facility" | "carrier";

export interface Segment {
  id: SegmentId;
  label: string;
  audience: string;
  product: string;
  icon: LucideIcon;
  accent: string;
  headline: string;
  description: string;
  features: string[];
  primaryCta: string;
  authNote: string;
}

export const segments: Record<SegmentId, Segment> = {
  driver: {
    id: "driver",
    label: "Drivers",
    audience: "Owner-operators & company drivers",
    product: "Consumer App",
    icon: Truck,
    accent: "#F2871E",
    headline: "Drive smarter, earn more.",
    description:
      "A free app that plans your fuel stops, rest windows, and arrival times around how you actually drive.",
    features: [
      "Personalized fuel & rest stop planning",
      "Avoid congestion and known bottlenecks",
      "Optimal arrival windows, fewer delays",
      "Spot your best pickup opportunities",
    ],
    primaryCta: "Get the driver app",
    authNote: "Built for individual drivers.",
  },
  facility: {
    id: "facility",
    label: "Facilities",
    audience: "Warehouses, plants & distribution centers",
    product: "Operations Dashboard",
    icon: Warehouse,
    accent: "#DB5A0E",
    headline: "Know what's arriving before it does.",
    description:
      "Predictive facility readiness so your docks, labor, and production schedules stay one step ahead.",
    features: [
      "Predictable truck arrivals",
      "Higher dock and labor efficiency",
      "Smarter production scheduling",
      "Solve distribution bottlenecks faster",
    ],
    primaryCta: "Open facility dashboard",
    authNote: "Set up with our team.",
  },
  carrier: {
    id: "carrier",
    label: "Carriers",
    audience: "Fleets, 3PLs & brokers",
    product: "Operations Dashboard",
    icon: Network,
    accent: "#A83E0A",
    headline: "Persistent visibility across every mile.",
    description:
      "Synchronize drivers, destinations, and facilities into one intelligent operating picture.",
    features: [
      "Faster, lower-cost movement",
      "Reduced fuel waste across the fleet",
      "Safer, more predictable operations",
      "Visibility on every load and window",
    ],
    primaryCta: "Open carrier dashboard",
    authNote: "Talk to us to get started.",
  },
};

export const segmentList: Segment[] = [
  segments.driver,
  segments.facility,
  segments.carrier,
];

export function isSegmentId(value: string | undefined): value is SegmentId {
  return value === "driver" || value === "facility" || value === "carrier";
}
