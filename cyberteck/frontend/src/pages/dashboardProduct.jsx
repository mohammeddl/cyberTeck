import NavAdmin from "../components/dashboard/NavAdmin";
import FormProduct from "../components/dashboard/products/FormProduct";

export default function DashboardProduct() {
    return (
        <>
            <div className="relative min-h-[87vh] flex">
                <NavAdmin />
                <main className="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100  md:space-y-8">
                    <FormProduct/>
                </main>
            </div>
        </>
    );
}
