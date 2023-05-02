import { VFC } from "react";
import { Layout } from "../components/Layout";
import { LocalStateB } from "../components/LocalStateB";
import { makeVar, useQuery, useReactiveVar } from "@apollo/client";
import { GetUsersQuery } from "../types/generated/graphql";
import { GET_USERS } from "../queries/queries";


const LocalStatePageB: VFC = () => {
  const { data } = useQuery<GetUsersQuery>(GET_USERS);
  const userVar = makeVar(data);
  return (
    <Layout title="Local State B">
      <LocalStateB userVar={userVar} />
    </Layout>
  );
}
export default LocalStatePageB;