import Link from "next/link";
import React from "react";

function Navbar() {
	return (
		<div className="lg:h-[80px] bg-transparent flex justify-between items-center px-16">
			<div>Logo</div>
            <div className="flex gap-8 text-sm">
                <Link href="#">EVENTS</Link>
                <Link href="#">ABOUT US</Link>
                <Link href="#">GALLERY & MEDIA</Link>
                <Link href="#">CLUB WEBSITE</Link>
                <Link href="#">TEAM</Link>
            </div>
            <div>
                <button className="bg-red-500 px-5 py-1 text-white text-sm rounded-full ">
                    Explore
                </button>
            </div>
		</div>
	);
}

export default Navbar;
