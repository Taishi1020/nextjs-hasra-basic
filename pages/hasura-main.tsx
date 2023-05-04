import { useQuery } from "@apollo/client";
import { VFC } from "react";
import { GetUsersQuery, Users_Constraint } from "../types/generated/graphql";
import { GET_USERS } from "../queries/queries";
import { Layout } from "../components/Layout";
import Link from "next/link";

const FetchMain: VFC = () => {
    const {data, error} = useQuery<GetUsersQuery>(GET_USERS,{
        // fetchPolicy: 'network-only',
        fetchPolicy: 'cache-and-network',
        // fetchPolicy: 'cache-first',
        // fetchPolicy: 'no-cache',
    })
    if(error)return (
        <Layout title="Hasura FetchPolicy">
            <p>Error: {error.message}</p>
        </Layout>
    )
     return (
        <Layout title="Hasura fetchPolicy">
            <p className="mb-6 font-bold">Hasura main page</p>
            {console.log(data)}
            {data?.users.map((user) => {
                return (
                    <p key={user.id} className="my-1">
                        {user.name}
                    </p>
                )
            })}
            <Link href="/hasura-sub" className="mt-6">
                Next
            </Link>
        </Layout>
    )
}

export default FetchMain;