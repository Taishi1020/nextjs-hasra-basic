import { makeVar } from "@apollo/client";

interface Task {
    title: string;
}
export const todoVer = makeVar<Task[]>([])