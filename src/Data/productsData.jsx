import { v4 as uuid } from "uuid";
import {
  bookshelf,
  canonCamera,
  comfortChair,
  cpuCooler,
  curology,
  dogFood,
  gamingLaptop,
  gamingMonitor,
  gucciBag,
  kidsCar,
  northCoat,
  redJoystick,
  satinJacket,
  soccerCleats,
  usbGamepad,
  wiredKeyboard,
} from "../Assets/Images/Images";

export const productsData = [
  {
    shortName: "HI Gamepad",
    name: "HAVIT HV-G92 Gamepad",
    type: "gaming",
    price: 160,
    discount: 40,
    afterDiscount: 120,
    addedDate: "2024/2/2",
    img: redJoystick,
    rate: 5,
    votes: 88,
    sold: 105,
    id: uuid(),
  },
  {
    shortName: "AK-9000 Keyboard",
    name: "AK-900 Wired Keyboard",
    type: "gaming",
    price: 1160,
    discount: 35,
    afterDiscount: 960,
    addedDate: "2024/3/7",
    img: wiredKeyboard,
    rate: 4,
    votes: 75,
    sold: 210,
    id: uuid(),
  },
  {
    shortName: "LCD Monitor",
    name: "IPS LCD Gaming Monitor",
    type: "gaming",
    price: 400,
    discount: 30,
    afterDiscount: 370,
    addedDate: "2024/3/7",
    img: gamingMonitor,
    rate: 5,
    votes: 99,
    sold: 463,
    id: uuid(),
  },
  {
    shortName: "S-Series Chair",
    name: "S-Series Comfort Chair ",
    type: "furniture",
    price: 400,
    discount: 25,
    afterDiscount: 375,
    addedDate: "2024/3/7",
    img: comfortChair,
    rate: 4.5,
    votes: 99,
    sold: 211,
    id: uuid(),
  },
  {
    shortName: "North Coat",
    name: "The north coat",
    type: "clothes",
    price: 360,
    discount: 0,
    afterDiscount: 260,
    addedDate: "2024/3/7",
    img: northCoat,
    rate: 5,
    votes: 65,
    sold: 1405,
    id: uuid(),
  },
  {
    shortName: "Gucci Bag",
    name: "Gucci duffle bag",
    type: "backpack",
    price: 1100,
    discount: 0,
    afterDiscount: 1100,
    addedDate: "2024/3/7",
    img: gucciBag,
    rate: 3.5,
    votes: 159,
    sold: 1533,
    id: uuid(),
  },
  {
    shortName: "CPU Cooler",
    name: "RGB liquid CPU Cooler",
    type: "electronics",
    price: 170,
    discount: 0,
    afterDiscount: 170,
    addedDate: "2024/3/7",
    img: cpuCooler,
    rate: 4.5,
    votes: 190,
    sold: 2522,
    id: uuid(),
  },
  {
    shortName: "BookShelf",
    name: "Small BookShelf",
    type: "furniture",
    price: 360,
    discount: 0,
    afterDiscount: 360,
    addedDate: "2024/3/7",
    img: bookshelf,
    rate: 5,
    votes: 201,
    sold: 1872,
    id: uuid(),
  },
  {
    shortName: "Dog Food",
    name: "Breed Dry Dog Food",
    type: "animal food",
    price: 100,
    discount: 0,
    afterDiscount: 100,
    addedDate: "2024/3/7",
    img: dogFood,
    rate: 3,
    votes: 35,
    sold: 3796,
    id: uuid(),
  },
  {
    shortName: "Cannon Camera",
    name: "CANON EOS DSLR Camera",
    type: "electronics",
    price: 360,
    discount: 0,
    afterDiscount: 360,
    addedDate: "2024/3/7",
    img: canonCamera,
    rate: 4,
    votes: 94,
    sold: 1693,
    id: uuid(),
  },
  {
    shortName: "FHD Laptop",
    name: "ASUS FHD Gaming Laptop",
    type: "computers",
    price: 1499,
    discount: 5,
    afterDiscount: 1335,
    addedDate: "2024/3/7",
    img: gamingLaptop,
    rate: 0,
    votes: 0,
    sold: 100,
    id: uuid(),
  },
  {
    shortName: "Curology",
    name: "Curology Product Set ",
    type: "curology",
    price: 700,
    discount: 0,
    afterDiscount: 700,
    addedDate: "2024/3/7",
    img: curology,
    rate: 5,
    votes: 325,
    sold: 100,
    id: uuid(),
  },
  {
    shortName: "Electric Car",
    name: "Kids Electric Car",
    type: "electronics",
    price: 39,
    discount: 0,
    afterDiscount: 39,
    addedDate: "2024/3/7",
    img: kidsCar,
    rate: 0,
    votes: 0,
    sold: 100,
    id: uuid(),
  },
  {
    shortName: "Soccer Cleats",
    name: "Jr. Zoom Soccer Cleats",
    type: "shoes",
    price: 500,
    discount: 0,
    afterDiscount: 500,
    addedDate: "2024/3/7",
    img: soccerCleats,
    rate: 4,
    votes: 145,
    sold: 100,
    id: uuid(),
  },
  {
    shortName: "GP11 Gamepad",
    name: "GP11 Shooter USB Gamepad",
    type: "gaming",
    price: 960,
    discount: 0,
    afterDiscount: 960,
    addedDate: "2024/3/7",
    img: usbGamepad,
    rate: 5,
    votes: 64,
    sold: 100,
    id: uuid(),
  },
  {
    shortName: "Satin Jacket",
    name: "Quilted Satin Jacket",
    type: "clothes",
    price: 650,
    discount: 0,
    afterDiscount: 650,
    addedDate: "2024/3/7",
    img: satinJacket,
    rate: 4.5,
    votes: 55,
    sold: 100,
    id: uuid(),
  },
];
