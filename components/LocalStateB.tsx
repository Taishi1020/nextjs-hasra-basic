import { useReactiveVar } from "@apollo/client";
import { VFC } from "react";
import { todoVer } from "../cache";
import Link from "next/link";

export const LocalStateB: VFC = () => {
    const todos = useReactiveVar(todoVer)
    return (
        <div>
            {todos.map((task, index) => {
                return (
                    <p className="mb-3" key={index}>
                        {task.title}
                    </p>
                )
            })}
            <Link href="local-state-a">
                Back
            </Link>
        </div>
    )
}