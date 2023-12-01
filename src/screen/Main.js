import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppNavigator from "../AppNavigator";

let items = [
  {
    id: 0,
    image:
      "https://img.freepik.com/premium-photo/flying-trendy-sneakers-creative-colorful-background-stylish-fashionable-minimalism-concept-levita_77190-8701.jpg?w=1060",
    name: "XRay Jr Dark Shad Lace-Up Casual Shoes",
    brand: "PUMA",
    price: 2500,
    qty: 0,
  },
  {
    id: 1,
    image:
      "https://img.freepik.com/premium-photo/sneakers-3-d-illustrationsneakers-3-d-illustrationsneakers-pink-background_1016228-9525.jpg?w=740",
    name: "Sneakers For Men (Navy)",
    brand: "RED TAPE",
    price: 999,
    qty: 0,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/premium-photo/colorful-sport-shoes-green_151013-4554.jpg",
    name: "Sneakers For Men (Navy)",
    brand: "PROVOGUE",
    price: 449,
    qty: 0,
  },
];

const Main = () => {
  //   const dispatch = useDispatch();
  //   const products = useSelector((state) => state.product);
  //   useEffect(() => {
  //     if (products.length < 1) {
  //       items.map((item) => {
  //         dispatch(addProducts(item));
  //       });
  //     }
  //   }, []);
  return <AppNavigator />;
};
export default Main;
