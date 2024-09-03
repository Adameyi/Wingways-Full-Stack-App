function DropdownItem({ children, onClick }) {
    return (
        <button
            onClick={() => onClick(children)}
            className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 focus:outline-none"
        >
            {children}
        </button>
    );
}
export default DropdownItem