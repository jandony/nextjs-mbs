import { useRouter } from "next/router"

export default function Contact() {
    const router = useRouter();

    return (
        <div className="max-w-[1280px] mx-auto bg-white p-[25px] rounded-10">
            <h2>Contact Page</h2>
        </div>
    )
}