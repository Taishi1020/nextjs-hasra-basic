import { OperationVariables, QueryResult, ReactiveVar, useReactiveVar } from "@apollo/client";
import { VFC } from "react";
import { todoVer } from "../cache";
import Link from "next/link";
import { GetUsersQuery } from "../types/generated/graphql";

export const LocalStateB: VFC = () => {

    return (
        <div>
         
            <Link href="local-state-a">
                Back
            </Link>
        </div>
    )
}