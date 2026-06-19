export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string[];
  hours: string;
  lat: number;
  lng: number;
}

export const branches: Branch[] = [
  {
    id: "dc-colony",
    name: "DC Colony",
    address: "RMS Commercial Market, Al-Manssora, DC Colony, Gujranwala",
    phone: ["055-2065514", "0340-2065514"],
    hours: "11:00 AM – 2:00 AM",
    lat: 32.1877,
    lng: 74.1945,
  },
  {
    id: "gt-road",
    name: "GT Road",
    address: "Mumtaz Market, GT Road, Opp. Chase Up, Gujranwala",
    phone: ["055-3255599", "0302-6737861"],
    hours: "11:00 AM – 2:00 AM",
    lat: 32.1617,
    lng: 74.1883,
  },
  {
    id: "garden-town",
    name: "Garden Town",
    address: "Awan Plaza, Beside UCP, Green Valley Phase 5, Near Garden Town, Gujranwala",
    phone: ["055-3894759", "0325-6737861"],
    hours: "11:00 AM – 2:00 AM",
    lat: 32.1756,
    lng: 74.2034,
  },
  {
    id: "rahwali-cantt",
    name: "Rahwali Cantt",
    address: "Sarfraz Market, Shop #32, Rahwali Cantt, Gujranwala",
    phone: ["055-2117514", "0303-6737861"],
    hours: "11:00 AM – 1:00 AM",
    lat: 32.2156,
    lng: 74.1523,
  },
  {
    id: "daska-road",
    name: "Daska Road",
    address: "Main Sialkot, Daska Road, Near Sharjah City, Gujranwala",
    phone: ["055-3414222", "0326-6737861"],
    hours: "11:00 AM – 2:00 AM",
    lat: 32.1945,
    lng: 74.2156,
  },
  {
    id: "qila-didar-singh",
    name: "Qila Didar Singh",
    address: "QDS – Qila Didar Singh, Gujranwala",
    phone: ["0329-6737861"],
    hours: "11:00 AM – 2:00 AM",
    lat: 32.1589,
    lng: 74.1423,
  },
];
