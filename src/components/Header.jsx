'use client'

import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Dialog,
    DialogPanel,
    // Disclosure,
    // DisclosureButton,
    // DisclosurePanel,
    // Popover,
    // PopoverButton,
    PopoverGroup,
    // PopoverPanel,
} from "@headlessui/react";
import {
    Bars3Icon,
    // ChartPieIcon,
    // CursorArrowRaysIcon,
    // FingerPrintIcon,
    // SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
// import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Features", href: "/features" },
        { name: "Recipes", href: "/recipes" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="relative isolate z-10 bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Recipe Platform</span>
                        <img
                            alt="Recipe Platform Logo"
                            src="src/assets/react.svg"
                            className="h-8 w-auto"
                        />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                {/* Desktop Navigation */}
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-sm font-semibold text-gray-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                </PopoverGroup>

                {/* Login Link */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/login" className="text-sm font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        {/* Mobile Logo */}
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Recipe Platform</span>
                            <img
                                alt="Recipe Platform Logo"
                                src="/path-to-your-logo/logo.png"
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}