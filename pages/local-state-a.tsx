import { VFC } from "react";
import { Layout } from "../components/Layout";
import { LocalStateA } from "../components/localStateA";

const LocalStatePageA: VFC = () => {
  return (
    <Layout title="Local State A">
        <LocalStateA/>
    </Layout>
  )   
}
export default LocalStatePageA;