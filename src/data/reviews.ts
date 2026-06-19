export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  branch: string;
}

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Ahmed Hassan",
    rating: 5,
    text: "Best pizza in Gujranwala! The O'Resto Special is absolutely incredible. Fast delivery and always hot. My family's go-to for Friday nights.",
    date: "2 weeks ago",
    avatar: "AH",
    branch: "DC Colony",
  },
  {
    id: "r2",
    name: "Fatima Khan",
    rating: 5,
    text: "The Creamy Melt pizza is heaven on a plate. Love the midnight deals too — amazing value for money. Highly recommend!",
    date: "1 month ago",
    avatar: "FK",
    branch: "GT Road",
  },
  {
    id: "r3",
    name: "Usman Ali",
    rating: 5,
    text: "Elite Family Deal feeds our whole family perfectly. Broast is crispy and juicy. O'Resto never disappoints!",
    date: "3 weeks ago",
    avatar: "UA",
    branch: "Rahwali Cantt",
  },
  {
    id: "r4",
    name: "Sana Malik",
    rating: 4,
    text: "Great variety on the menu. The Oreo shake is to die for! Clean restaurant and friendly staff at Model Town branch.",
    date: "1 week ago",
    avatar: "SM",
    branch: "Model Town",
  },
  {
    id: "r5",
    name: "Bilal Raza",
    rating: 5,
    text: "Mighty Thunder burger is massive and delicious. Ordered through their app — tracking was spot on. Will order again!",
    date: "5 days ago",
    avatar: "BR",
    branch: "Civil Lines",
  },
  {
    id: "r6",
    name: "Ayesha Tariq",
    rating: 5,
    text: "Peri Peri pizza has the perfect kick! Love that they have 6 branches — there's always one near me. Premium quality.",
    date: "2 days ago",
    avatar: "AT",
    branch: "Wazirabad Road",
  },
];
