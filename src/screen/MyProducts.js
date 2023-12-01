import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
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
const MyProducts = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 20,
          width: "100%",
          height: 60,
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: 20,
          backgroundColor: "#fff",
          elevation: 1,
        }}
      >
        <Text style={{ color: "#000", fontSize: 16, fontWeight: "700" }}>
          Redux Toolkit Demo1
        </Text>
      </View>

      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: "94%",
                alignSelf: "center",
                height: 120,
                backgroundColor: "#fff",
                marginTop: 10,
                borderRadius: 10,
                elevation: 1,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ padding: 10 }}>
                <Text
                  style={{ fontSize: 16, color: "#000", fontweight: "600" }}
                >
                  {item.name.substring(0, 20) + "..."}
                </Text>
                <Text style={{ fontWeight: "600" }}>{item.brand}</Text>
                <Text
                  style={{ color: "green", fontWeight: "600", fontSize: 16 }}
                >
                  {"₹" + item.price}
                </Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: "green",
                        borderRadius: 7,
                        height: 27,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 5,
                      }}
                    >
                      <Text style={{ color: "#fff" }}>Add To Cart</Text>
                    </TouchableOpacity>
                  ) : null}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: "green",
                        borderRadius: 7,
                        height: 27,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      <Text style={{ color: "#fff" }}>-</Text>
                    </TouchableOpacity>
                  )}
                  {item.qty == 0 ? null : (
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      {"0"}
                    </Text>
                  )}

                  {item.qty == 0 ? null : (
                    <TouchableOpacity
                      style={{
                        backgroundColor: "green",
                        borderRadius: 7,
                        height: 27,
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: 10,
                        paddingRight: 10,
                        marginTop: 5,
                        marginLeft: 10,
                      }}
                    >
                      <Text style={{ color: "#fff" }}>+</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyProducts;

const styles = StyleSheet.create({});
