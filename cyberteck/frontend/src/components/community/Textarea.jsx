

export default function Textareas() {
    return (
        <div className="flex justify-center py-12">
        <div className="flex items-start w-2/5 space-x-4">
            <div className="flex-shrink-0">
                <img
                    className="inline-block h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="min-w-0 flex-1">
                <form action="#" className="relative">
                    <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500">
                        <label htmlFor="comment" className="sr-only">
                            Add your comment
                        </label>
                        <textarea
                            rows={3}
                            name="comment"
                            id="comment"
                            className="block w-full py-3 border-0 resize-none focus:ring-0 sm:text-sm"
                            placeholder="Add your post..."
                            defaultValue={""}
                        />

                        {/* Spacer element to match the height of the toolbar */}
                        <div className="py-2" aria-hidden="true">
                            {/* Matches height of button in toolbar (1px border + 36px content height) */}
                            <div className="py-px">
                                <div className="h-9" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between">
                        <div className="flex items-center space-x-5">
                        </div>
                        <div className="flex-shrink-0">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}