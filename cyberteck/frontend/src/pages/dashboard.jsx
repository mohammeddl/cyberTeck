import ListProduct from "../components/dashboard/ListProduct";
import NavAdmin from "../components/dashboard/NavAdmin";
import Stats from "../components/dashboard/Stats";

export default function Dashoard(){
    return(
        <>
        <div className="relative min-h-[87vh] flex">
        <NavAdmin/>
            <main className="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100  md:space-y-8">
        <Stats/>
        <ListProduct/>
            </main>
        </div>
        </>
    )
}