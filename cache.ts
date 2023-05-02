import { makeVar, useQuery } from "@apollo/client";
import { GET_USERS } from "./queries/queries";
import { GetUsersQuery } from "./types/generated/graphql";
interface Task {
    title: string;
}

export const todoVer = makeVar<Task[]>([])

