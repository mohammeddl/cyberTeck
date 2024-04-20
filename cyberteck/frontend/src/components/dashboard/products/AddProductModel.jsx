export default function AddProductModel({ isOpen, onClose, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div
                    className="absolute -top-8 inset-0 bg-black opacity-50"
                    onClick={onClose}
                ></div>
                <div className="max-h-[90%] overflow-y-scroll bg-white rounded-lg z-50 w-1/2">
                    {children}
                </div>
            </div>
        </>
    );
}
