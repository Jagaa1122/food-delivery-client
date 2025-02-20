import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image";


export function FoodDetail() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className=" absolute rounded-full w-8 h-8 text-[30px] bottom-3 right-3" variant="outline">
                    <span className="text-[#ef4444]"> +</span>

                </Button>

            </DialogTrigger>

            <DialogContent className="max-w-[830px]">
                <DialogTitle></DialogTitle>
                <div className="flex gap-4">
                    <Image className="rounded-lg w-full"
                        alt={"foodmenu"}
                        width={300}
                        height={300}
                        src="https://res.cloudinary.com/dslllxkue/image/upload/v1739798835/cld-sample-4.jpg"
                    />
                    <div className="flex flex-col">
                        <h1 className="text-[#ef4444]">Finger food</h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, provident! Expedita </p>
                        <div className="mt-auto flex gap-4 justify-between">
                            <div>
                                <h3>Total price</h3>
                                <p >$12.99</p>
                            </div>
                            <div className="flex items-center justify-center space-x-2">

                                <Button className=" text-black items-center justify-center  text-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full">-
                                </Button>

                                <div className="flex-1 text-center"><div className="text-1xl font-bold tracking-tighter">1</div></div>

                                <Button className=" text-black items-center justify-center  text-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 w-8 shrink-0 rounded-full">+
                                </Button>

                            </div>
                        </div>
                        <Button className="rounded-lg bg-black w-full">Add to cart</Button>
                    </div>

                </div>

            </DialogContent>
        </Dialog>
    )
}
