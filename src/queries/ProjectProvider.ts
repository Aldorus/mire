import { Query, QueryTextArgs} from "../models/graphql";
import {gql, useSuspenseQuery} from "@apollo/client";

export const GetTextQuery = gql`
    query GetTextQuery($id: String!) {
        text(id: $id) {
            content {
                json
            }
        }
    }
`;

const GetText = (variables: QueryTextArgs) => {
  const { data } = useSuspenseQuery<
    { text: Query['text'] },
    QueryTextArgs
  >(GetTextQuery, {
    variables,

  });

  return {content: data.text?.content?.json};
};

export const TextProvider = {
  get: GetText,
};
