import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const IntroScreen = ({ navigation, route }) => {
  const { itemName, itemPrice, itemImage,itemIng } = route.params;
  const [quantity, setQuantity] = useState(1);

  // Convert itemPrice to a number (if it's a string)
  const price = parseFloat(itemPrice); // Ensure itemPrice is a number

  const totalPrice = (price * quantity).toFixed(2); // Calculate total price and format it to two decimal places

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: "center",
        backgroundColor: "rgba(255, 164, 81, 1)",
      }}
    >
      <View
        style={{
          width: 375,
          height: 320,
          backgroundColor: "rgba(255, 164, 81, 1)",
          alignItems: "center",
          paddingVertical: 106,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            width: 82,
            height: 32,
            borderRadius: 50,
            backgroundColor: "rgba(255, 255, 255, 1)",
            flexDirection: "row",
            position: "absolute",
            top: 64,
            left: 24,
          }}
        >
          <View style={{ alignItems: "center", flexDirection: "row" }}>
            <AntDesign name="left" size={22} color="black" />
            <Text style={{ fontSize: 12, color: "rgba(0, 0, 0, 1)" }}>
              Go Back
            </Text>
          </View>
        </TouchableOpacity>

        <View>
          <Image source={itemImage} style={{ width: 176, height: 176 }} />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "gray",
          width: "100%",
          height: "100%",
          justifyContent: "center",
          flexDirection: "row",
          borderTopStartRadius: 16,
          borderTopEndRadius: 16,
          backgroundColor: "rgba(255, 255, 255, 1)",
        }}
      >
        <View style={{ width: 327, height: 199, marginVertical: 40 }}>
          <View style={{ width: 282, height: 85, alignSelf: "flex-start" }}>
            <Text
              style={{
                color: "rgba(39, 33, 77, 1)",
                fontWeight: "500",
                fontSize: 29,
              }}
            >
              {itemName}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: 330,
                marginTop: 33,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  width: 100,
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={handleDecrease}>
                  <Image
                    source={require("../assets/Group 30.png")}
                    style={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
                <Text style={{ fontSize: 24 }}>{quantity}</Text>
                <TouchableOpacity onPress={handleIncrease}>
                  <Image
                    source={require("../assets/Group 10.png")}
                    style={{ width: 32, height: 32 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("../assets/Group.png")}
                  style={{ width: 20, height: 16 }}
                />
                <View>
                  <Text style={{ fontSize: 21, marginLeft: 5 }}>
                    {totalPrice}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 250,
                height: 40,
                marginTop: 64,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "rgba(39, 33, 77, 1)",
                  fontWeight: 500,
                  borderBottomWidth: 2,
                  borderBottomColor: "rgba(255, 164, 81, 1)",
                }}
              >
                One Pack Contains:
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 326,
                height: 40,
                marginTop: 18,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "rgba(39, 33, 77, 1)",
                  fontWeight: 500,
                }}
              >
              {itemIng}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 284,
                height: 40,
                marginTop: 44,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "rgba(39, 33, 77, 1)",
                  fontWeight: 400,
                }}
              >
                If you are looking for a new fruit salad to eat today, quinoa is
                the perfect brunch for you. make
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                width: 335,
                height: 40,
                marginTop: 39,
                justifyContent: "space-between",
              }}
            >
              <View>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/Group 27.png")}
                    style={{ height: 48, width: 48 }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("CongratsScreen",{
                    itemName: itemName,
                    itemPrice: itemPrice,

                    itemImage: itemImage,
                  })}
                >
                  <Image
                    source={require("../assets/Group 3.png")}
                    style={{ height: 56, width: 219 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({});
