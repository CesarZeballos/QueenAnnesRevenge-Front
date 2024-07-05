import Link from "next/link";

export default function Navbar() {
    return (
        <div className="marginContainer my-2">
            <div className="flex flex-row items-center justify-between">
                <img className="w-20" src="/logo.png" alt="logo" />
                <div>
                    <Link href="/" className="buttonNotBg">Dashboard</Link>
                    <Link href="/recipes" className="buttonNotBg">Recipes</Link>
                    <Link href="/batches" className="buttonNotBg">Batches</Link>
                    <Link href="/bottles" className="buttonNotBg">Bottles</Link>
                </div>
            </div>
        </div>
    )
} 