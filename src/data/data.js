import advance from "../assets/images/icon-advanced.svg";
import arcade from "../assets/images/icon-arcade.svg";
import pro from "../assets/images/icon-pro.svg";

export const options = [
   {
      icon: arcade,
      name: "Arcade",
      priceCents: {
         mo: 900,
         yr: 9000,
      },
   },
   {
      icon: advance,
      name: "Advanced",
      priceCents: {
         mo: 1200,
         yr: 12000,
      },
   },
   {
      icon: pro,
      name: "Pro",
      priceCents: {
         mo: 1500,
         yr: 15000,
      },
   },
];

export const add_ons = [
   {
      title: "Online service",
      des: "Access to multiplayer games",
      priceCents: {
         mo: 100,
         yr: 1000,
      },
   },
   {
      title: "Larger storage",
      des: "Extra 1TB of cloud save",
      priceCents: {
         mo: 200,
         yr: 2000,
      },
   },
   {
      title: "Customizable profile",
      des: "Custom theme on your profile",
      priceCents: {
         mo: 200,
         yr: 2000,
      },
   },
];
