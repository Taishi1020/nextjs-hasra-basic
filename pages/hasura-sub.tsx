import { useQuery } from "@apollo/client";
import { VFC } from "react";
import { GetUsersQuery, Users_Constraint } from "../types/generated/graphql";
import { GET_USERS, GET_USERS_LOCAL } from "../queries/queries";
import Link from "next/link";
import { Layout } from "../components/Layout";

const FetchSub: VFC = () => {
    const {data} = useQuery<GetUsersQuery>(GET_USERS_LOCAL)
    return (
        <Layout title="Hasura fetch Policy read cache">
            <p className="mb-6">Direct read out from cache</p>
            {data?.users.map((user) => {
                return(
                    <p key={user.id} className="mt-6">
                        {user.name}
                    </p>
                )
            })}
            <Link href="/hasura-main" className="mt-6">
                Back
            </Link>
        </Layout>
    )
}

export default FetchSub;