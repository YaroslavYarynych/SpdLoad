import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Rocket } from "../utils/types.js";
import { SetterOrUpdater } from "recoil";

export const clientApi = (setItemsFromServer: SetterOrUpdater<Rocket[]>, setIsLoader: SetterOrUpdater<boolean>) => {
  const client = new ApolloClient({
    uri: 'https://spacex-production.up.railway.app/',
    cache: new InMemoryCache(),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
  client.query({
    query: gql`
    query ExampleQuery {
      rockets {
        id,
        name,
        description
      }
    }
  `,
  })
  
  .then(data => setItemsFromServer(data.data.rockets))
  .finally(() => {setIsLoader(false)});
}
