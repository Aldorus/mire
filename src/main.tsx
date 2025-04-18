import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import "./tokens/_colors.scss";
import "./tokens/_spacing.scss";
import "./tokens/_typography.scss";
import './index.scss'
import App from './App.tsx'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/bvolcybk2xx6/environments/master?access_token=h4BYfdi10dRMYuFHSJOFWD97-jzattUwAEvHYY7bGmo",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </StrictMode>,
)
