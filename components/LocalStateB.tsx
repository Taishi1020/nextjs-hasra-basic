import { OperationVariables, QueryResult, ReactiveVar, useReactiveVar } from "@apollo/client";
import { VFC } from "react";
import { todoVer } from "../cache";
import Link from "next/link";
import { GetUsersQuery } from "../types/generated/graphql";

type Props = {
    userVar: ReactiveVar<GetUsersQuery>;
}

export const LocalStateB: VFC<Props> = ({userVar}) => {
    const userInfo = useReactiveVar(userVar);

    return (
        <div>
            {userInfo.users.map((user, index) => (
                <div key={index}>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                    <div>{user.created_ad}</div>
                </div>
            ))}

         
            <Link href="local-state-a">
                Back
            </Link>
        </div>
    )
}