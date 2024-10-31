import { title } from "@/components/ui/primitives";
import { Button } from "@nextui-org/button";

export default function Page() {
    return (
        <div className="flex flex-col gap-3">
            <h1 className={title({ color: "primary" })}>UI</h1>
            <h1 className={title({ color: "secondary" })}>SubTitle</h1>
            <div className="flex flex-row gap-3 flex-wrap">
                <Button isLoading color="secondary">
                    Loading
                </Button>
                <Button color="secondary">secondary</Button>
                <Button color="primary" variant="flat">
                    flat
                </Button>
                <Button color="primary" variant="bordered">
                    bordered
                </Button>
                <Button color="primary" variant="ghost">
                    ghost
                </Button>
                <Button color="primary" variant="light">
                    light
                </Button>
                <Button color="primary" variant="shadow">
                    shadow
                </Button>
                <Button color="primary" variant="solid">
                    solid
                </Button>
                <Button color="success">success</Button>
            </div>
        </div>
    );
}
