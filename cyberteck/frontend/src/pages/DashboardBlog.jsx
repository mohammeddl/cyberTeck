import NavAdmin from "../components/dashboard/NavAdmin";
import FormBlog from "../components/dashboard/blogs/FrormBlog";

export default function DashboardBlog() {
    return (
<div className="relative min-h-[87vh] flex">
                <NavAdmin />
                <main className="flex-1 pb-12 space-y-6 overflow-y-auto bg-gray-100  md:space-y-8">
                <FormBlog/>
                </main>
            </div>
    )
}
