import { Buttons } from "@/components/buttons";
import Link from "next/link";
import { useRouter } from "next/router"

export default function HomeComponents() {
    const router = useRouter();

    return (
        <div className="max-w-[1280px] mx-auto bg-white p-[25px] rounded-10">
            <h2>Home Page</h2>
            <Link href="/login">
                <Buttons
                    size="default"
                    type="primary"
                    to="/login"
                    className="bg-primary text-white h-11 mt-6"
                >
                    Sign In
                </Buttons>
            </Link>
        </div>
    )
}
