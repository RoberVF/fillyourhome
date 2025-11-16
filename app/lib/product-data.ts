export interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
  rating: number
  stock: number
  description: string
  images: string[]
  styles: string[]
  seller: {
    id: string
    name: string
    avatar: string
  }
}

export const allProducts: Product[] = [
  {
    id: 1,
    name: "Vintage Gray Sofa",
    price: 110,
    image: "/vintage-gray-sofa-mid-century.jpg",
    category: "Sofas",
    rating: 4.5,
    stock: 3,
    description: "Beautiful mid-century style vintage sofa. Perfect for adding character to your living room.",
    images: ["/vintage-gray-sofa-mid-century.jpg", "/vintage-gray-sofa.jpg", "/sofa-details.jpg"],
    styles: ["Vintage", "Mid-Century", "Classic"],
    seller: { id: "seller1", name: "John Furniture", avatar: "/avatar1.jpg" }
  },
  {
    id: 2,
    name: "Solid Oak Dining Table",
    price: 70,
    image: "/solid-oak-dining-table.jpg",
    category: "Tables",
    rating: 4.8,
    stock: 2,
    description: "Dining table in solid oak with natural finish. Ideal for large families.",
    images: ["/solid-oak-dining-table.jpg", "/rustic-oak-table.png", "/wooden-table-details.jpg"],
    styles: ["Rustic", "Natural", "Classic"],
    seller: { id: "seller2", name: "Maria Vintage Store", avatar: "/avatar2.jpg" }
  },
  {
    id: 3,
    name: "Retro Floor Lamp",
    price: 20,
    image: "/retro-floor-lamp-brass.jpg",
    category: "Lighting",
    rating: 4.6,
    stock: 5,
    description: "Retro floor lamp with brass structure. Perfect for creating a cozy atmosphere.",
    images: ["/retro-floor-lamp-brass.jpg", "/brass-floor-lamp.png", "/lamp-details.jpg"],
    styles: ["Retro", "Industrial", "Vintage"],
    seller: { id: "seller3", name: "Design Studio Co", avatar: "/avatar3.jpg" }
  },
  {
    id: 4,
    name: "Pine Wood Cabinet",
    price: 35,
    image: "/pine-wood-cabinet-vintage.jpg",
    category: "Storage",
    rating: 4.7,
    stock: 1,
    description: "Vintage pine wood cabinet with great character. Ideal for decorative storage.",
    images: ["/pine-wood-cabinet-vintage.jpg", "/pine-cabinet-vintage.jpg", "/cabinet-details.jpg"],
    styles: ["Vintage", "Natural", "Rustic"],
    seller: { id: "seller1", name: "John Furniture", avatar: "/avatar1.jpg" }
  },
  {
    id: 5,
    name: "White Eames Style Chair",
    price: 15,
    image: "/white-eames-style-chair.jpg",
    category: "Chairs",
    rating: 4.9,
    stock: 4,
    description: "Eames style chair in white color. Classic and versatile for any space.",
    images: ["/white-eames-style-chair.jpg", "/eames-style-white-chair.jpg", "/chair-details.jpg"],
    styles: ["Modern", "Classic", "Mid-Century"],
    seller: { id: "seller2", name: "Maria Vintage Store", avatar: "/avatar2.jpg" }
  },
  {
    id: 6,
    name: "Industrial Metal Shelf",
    price: 15,
    image: "/metal-industrial-shelf.jpg",
    category: "Storage",
    rating: 4.4,
    stock: 2,
    description: "Industrial style metal shelf. Perfect for modern spaces.",
    images: ["/metal-industrial-shelf.jpg", "/industrial-metal-shelf.jpg", "/shelf-details.jpg"],
    styles: ["Industrial", "Modern", "Contemporary"],
    seller: { id: "seller3", name: "Design Studio Co", avatar: "/avatar3.jpg" }
  },
  {
    id: 7,
    name: "Gold Frame Mirror",
    price: 25,
    image: "/gold-frame-mirror-ornate.jpg",
    category: "Decor",
    rating: 4.5,
    stock: 6,
    description: "Decorative mirror with ornate gold frame. Ideal for adding light and elegance.",
    images: ["/gold-frame-mirror-ornate.jpg", "/gold-frame-mirror.jpg", "/mirror-details.jpg"],
    styles: ["Ornate", "Glamorous", "Classic"],
    seller: { id: "seller1", name: "John Furniture", avatar: "/avatar1.jpg" }
  },
  {
    id: 8,
    name: "Wooden Desk",
    price: 30,
    image: "/wooden-desk-home-office.jpg",
    category: "Tables",
    rating: 4.6,
    stock: 2,
    description: "Solid wood desk for home office. Spacious and durable.",
    images: ["/wooden-desk-home-office.jpg", "/wooden-desk-home-office.jpg", "/desk-details.jpg"],
    styles: ["Natural", "Modern", "Functional"],
    seller: { id: "seller2", name: "Maria Vintage Store", avatar: "/avatar2.jpg" }
  },
]

export const styleOptions = ["Vintage", "Modern", "Rustic", "Industrial", "Mid-Century", "Minimalist", "Ornate", "Glamorous", "Retro", "Contemporary"]
export const categoryOptions = ["Sofas", "Tables", "Chairs", "Storage", "Lighting", "Decor"]
