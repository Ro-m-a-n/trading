import { create } from "zustand";
import alberto from "../assets/bigInvest/alberto.png";
import bond from "../assets/bigInvest/bond.png";
import harry from "../assets/bigInvest/harry.png";
import handalf from "../assets/bigInvest/handalf.png";
export const useStore = create((set, get) => ({
  feedback: [
    {
      id: 1,
      name: "Albert Abello",
      position: "Director of Growth",
      feedback:
        "This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.",
      photo: alberto,
    },
    {
      id: 2,
      name: "James Blond",
      position: "Agent 006",
      feedback:
        "Trading with this company is like catching lightning in a bottle! Our profits have skyrocketed, and their expert insights have turned our investment game into a winning streak. It's like having a financial wizard on speed dial. 10/10, would trade again!",

      photo: bond,
    },
    {
      id: 3,
      name: "Harry Potter",
      position: "Minister of magic",
      feedback:
        "Unbelievable results! Thanks to this trading company, our portfolio is not just growing, it's doing a victory dance. They've cracked the code to success in the market, and we're reaping the rewards. Solid performance and excellent service",

      photo: harry,
    },
    {
      id: 4,
      name: "Gandalf Gray",
      position: "Junior magician",
      feedback:
        "Trading dreams turned into reality! We took a leap of faith with this company, and boy, did it pay off. Our returns are singing hallelujah, and the support team is top-notch. If trading were an art, they'd be the Picassos of the market. Highly recommended!",
      photo: handalf,
    },
  ],
  question: [
    {
      question: "How do i change my details",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges.",
    },
    {
      question: "What platforms will I be able to use?",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!",
    },
    {
      question: "How do i change my details",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges.",
    },
    {
      question: "What platforms will I be able to use?",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!",
    },
    {
      question: "How do i change my details",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges.",
    },
    {
      question: "What platforms will I be able to use?",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!",
    },
    {
      question: "What platforms will I be able to use?",
      answer:
        "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere. All you need is the Internet because the necessary trading tools are already collected in one place and are available in a couple of clicks. Use only the best and develop with us!",
    },
  ],
  setRecipes15: () => {
    let recipesSliced = get().recipes.slice(
      get().intervalFrom,
      get().intervalTo
    );
    set({
      recipes15: recipesSliced,
    });
  },
}));
