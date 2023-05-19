import { useState } from "react";
import GenericAPI from "./../API/GenericAPI";
import { useNavigation } from "@react-navigation/native";

export default function useOpenPO() {
  const [loading, setLoading] = useState(false);
  const apiObject = new GenericAPI();

  const navigation = useNavigation();


  return {
    loading,

    async getOpenPO() {
      setLoading(true);
      const response = await apiObject.graphQL("/graphql",
        `
          query Users {
            users {
            edges {
              node {
                name, designation
              }
            }
          }
        }
        `,
        {}
      );
      setLoading(false);

      if (response.code === -2) {

        alert("Session Expired. Please Login Again");
        setTimeout(() => {
          navigation.push("login");
        }, 2000)

      }

      return response;
    },
  };
}
