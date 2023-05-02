// 入力フォームやタスクを追加するファイル

import { makeVar, useQuery, useReactiveVar } from "@apollo/client";
import { ChangeEvent, FormEvent, VFC, useState } from "react";
import { todoVer } from "../cache";
import Link from "next/link";



export const LocalStateA: VFC = () => {
     const [input, setInput] = useState('');
      
     
     const todos = useReactiveVar(todoVer)
{
        e.preventDefault();
        todoVer([...todoVer(), {title: input}])
        setInput('')
     }


    return(
        <>
          <p className="mb-3 font-bold">makevar</p>
          {/* ユーザーがタスクを追加してるかどうかわからないので?にしてる */}
          {todos?.map((task, index) => (
                <p className="mb-3 y-1" key={index}>
                    {task.title}
                </p>
            ))}
          
          <form className="flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <input
            className="mb-3 px-3 py-2 border border-gray-300"
            placeholder="New task ?"
            value={input} 
            onChange={(e: ChangeEvent<HTMLInputElement>) =>setInput(e.target.value)}    
            />
            <button 
            disabled={!input}
            className="mb-3 disabled:opacity-40 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl focus:outline-none"
            type="submit"
            >
                Add new state
            </button>
          </form>
          <Link href="/local-state-b">
            Next
          </Link>
        </>
    )
}




