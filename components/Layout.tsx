import Head from "next/head"
import Link from "next/link"
import { Children, ReactNode, VFC } from "react"

interface Props {
    // titleを動的に変える
    children: ReactNode
    title: string
}

export const Layout: VFC<Props> = ({children, title = "Welcome to NextJs"}) => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
            </Head>
            <header>
                <nav className="bg-gray-800 w-screen">
                    <div className="flex items-center pl-8 h-14">
                        <div className="flex space-x-4">
                            <Link href="/" data-testid="home-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                Home
                            </Link>
                            <Link href="/" data-testid="makevar-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                makeVar
                            </Link>
                            <Link href="/hasura-main" data-testid="fetchpolicy-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                fetchPolicy(Hasura)
                            </Link>
                            <Link href="/crud-main" data-testid="crud-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                CRUD(Hasura)
                            </Link>
                            <Link href="/hasura-ssg" data-testid="ssg-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                SSG+ISR(Hasura)
                            </Link>
                            <Link href="/hooks-memo" data-testid="memo-nav" className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                                custom hook + memo(Hasura)
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 flex-col justify-center items-center w-screen">
                {children}
            </main>
            <footer className="w-full h-12 flex justify-center items-center border-t">
            <a
          className="flex items-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" /> */}
          
        </a>
            </footer>
        </div>
    )
}