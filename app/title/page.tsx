import { title } from "@/components/ui/primitives";

export default function Page() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className={title({ color: "primary" })}>Title</h1>
            <h1 className={title({ color: "secondary" })}>SubTitle</h1>
        </div>
    );
}
