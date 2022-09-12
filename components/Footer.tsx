import React from "react";

export const Footer = () => {
	return (
		<footer className="border-t border-emerald-500/20 flex items-center text-white justify-between p-5">
			<img
				className="h-10 w-10 filter hue-rotate-90 opacity-20 rounded-full"
				src="https://i.imgur.com/4h7mAu7.png"
				alt=""
			/>

			<p className="text-xs text-emerald-900 pl-5">
				DISCLAIMER: This video is made for informational and educational
				purposes only. The content of this tutorial is not intended to be a lur
				to gambling. Instead, the information presented is meant for nothing
				more than learning and entertainment purposes. We are not lieable for
				any losses that incurred or problems that arise at online casinos or
				elsewhere after the reading and consideration of this tutorias content.
				If you are gambling online utilizing information from this tutorial, you
				are doing so completely and totally at your own risk
			</p>
		</footer>
	);
};
