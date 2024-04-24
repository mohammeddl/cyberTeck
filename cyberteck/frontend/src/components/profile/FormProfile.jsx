import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormProfile() {
    return (
        <main className="profile-page">
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
            />
            <link
                rel="stylesheet"
                href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
            />

            <section className="relative block h-500-px">
                <div
                    className="absolute top-0 w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage:
                            "url('https://assetsio.gnwcdn.com/Best-VR-Games-vg247.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp')",
                    }}
                >
                    <span
                        id="blackOverlay"
                        className="w-full h-full absolute opacity-50 bg-black"
                    ></span>
                </div>
                <div
                    className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                    style={{ transform: "translateZ(0px)" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-blueGray-200 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
            </section>

            <section className="relative py-16 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words h-[90vh] bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                    <div className="relative">
                                        <img
                                            alt="..."
                                            src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                                            className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                        <div className="mr-4 p-3 text-center">
                                            <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                22
                                            </span>
                                            <span className="text-sm text-blueGray-400">
                                                Orders
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center ">
                                <Avatar className="w-16 h-16">
                                    <AvatarImage
                                        alt="Avatar"
                                        src="/placeholder-user.jpg"
                                    />
                                    <AvatarFallback initials="JD" />
                                </Avatar>
                                <div className="grid gap-1.5">
                                    <h1 className="text-2xl font-bold">
                                        Jane Doe
                                    </h1>
                                    <Button size="sm">
                                        Change profile picture
                                    </Button>
                                </div>
                            </div>
                            <div className="grid gap-4 md:gap-8">
                                <div className="grid gap-2">
                                    <Label className="text-base" htmlFor="name">
                                        Name
                                    </Label>
                                    <Input defaultValue="Jane Doe" id="name" />
                                </div>
                                <div className="grid gap-2">
                                    <Label
                                        className="text-base"
                                        htmlFor="email"
                                    >
                                        Email
                                    </Label>
                                    <Input
                                        defaultValue="janedoe@example.com"
                                        id="email"
                                        type="email"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label
                                        className="text-base"
                                        htmlFor="username"
                                    >
                                        Username
                                    </Label>
                                    <Input
                                        id="username"
                                        placeholder="Enter your username"
                                    />
                                </div>

                                <Button size="sm">Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
