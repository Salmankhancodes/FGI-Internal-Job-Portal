import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import {
  StatusBar,
  ScrollView,
  Text,
  TextInput,
  View,
  Linking,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const FeedsScreen = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);
  const country = "in";

  const navigation = useNavigation();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigation.navigate("Welcome");
      }
    });
  }, [auth, navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerStyle: {
        backgroundColor: "green",
      },
      headerTitle: () => (
        <Text style={tw`text-white font-bold text-3xl`}>
          FGI Internal Job Portal
        </Text>
      ),
    });
  }, [navigation]);

  let API_KEY = "3d3b4f0df0ffe00a90506fed37c05aa6";
  let APP_ID = "36d1ac77";
  let BASE_URL = "https://api.adzuna.com/v1/api/jobs";
  let BASE_PARAMS =
    "search/1?&results_per_page=20&content-type=application/json";
  const targetURL = `${BASE_URL}/${country.toLowerCase()}/${BASE_PARAMS}&app_id=${APP_ID}&app_key=${API_KEY}&what=${search}&where=${location}`;

  async function handleSubmit() {
    setLoading(true);
    Keyboard.dismiss();
    const data = await axios.get(targetURL);
    setJobData(data.data.results);
    setSearch("");
    setLocation("");
    setLoading(false);
  }

  return (
    <View>
      <StatusBar backgroundColor={"green"} />
      <View style={tw`p-2 m-2 border-b-4`}>
        <TextInput
          style={tw`border-b-2 p-1 m-2 rounded`}
          placeholder="city"
          value={location}
          onChangeText={(text) => setLocation(text)}
        />
        <TextInput
          style={tw`border-b-2 p-1 m-2 rounded`}
          placeholder="search..."
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={tw`p-3 m-2 bg-yellow-600 flex flex-row justify-center items-center`}
        >
          <AntDesign name="search1" size={24} color="white" />
          <Text style={tw`font-bold text-white text-xl ml-2`}>Search Jobs</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <ScrollView>
          {jobData.length < 1 ? (
            <View style={tw`flex justify-center items-center`}>
              <AntDesign name="search1" size={100} color="gray" />
              <Text style={tw`text-center text-xl text-gray-500`}>
                Search results will appear here...
              </Text>
            </View>
          ) : (
            jobData.map((eachJob) => {
              return (
                <View
                  key={eachJob.id}
                  style={tw`p-2 m-4 rounded border-2 border-gray-600 bg-gray-400`}
                >
                  <Text style={tw`text-xl font-bold`}>{eachJob.title}</Text>
                  <Text style={tw`text-lg`}>
                    <Text style={tw`font-bold`}>
                      <FontAwesome name="building-o" size={24} color="black" />{" "}
                      -{" "}
                    </Text>
                    {eachJob.company.display_name}
                  </Text>
                  <Text style={tw`text-lg`}>
                    <Text style={tw`font-bold`}>
                      <Entypo name="location-pin" size={24} color="black" /> -{" "}
                    </Text>
                    <Text>{eachJob.location.display_name}</Text>
                  </Text>
                  <Text style={tw`text-sm`}>
                    <Text style={tw`font-bold`}>Job description - </Text>
                    <Text>{eachJob.description}</Text>
                  </Text>
                  <Text>
                    <Text style={tw`font-bold`}>Salary - </Text>
                    <Text>
                      {eachJob.salary_min / 100000}-
                      {eachJob.salary_max / 100000} LPA
                    </Text>
                  </Text>
                  <Text>
                    <Text style={tw`font-bold`}>Job Type - </Text>
                    {eachJob.contract_time === undefined
                      ? "Not available"
                      : eachJob.contract_time}
                  </Text>
                  <Text>
                    <Text style={tw`font-bold`}>
                      <Entypo name="back-in-time" size={24} color="black" /> -{" "}
                    </Text>
                    {eachJob.created.split("T")[0]}
                  </Text>
                  <TouchableOpacity
                    style={tw`p-2 m-2 rounded-xl bg-green-600`}
                    onPress={() => Linking.openURL(eachJob.redirect_url)}
                  >
                    <Text style={tw`text-white font-bold text-xl text-center`}>
                      View/Apply Now
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default FeedsScreen;
