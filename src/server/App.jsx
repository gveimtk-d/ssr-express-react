import React from "react";
import RouterApp from "@/pages/index";
import { StaticRouter } from "react-router-dom";

export default function App({url}) {
	return (
		 <StaticRouter location={url}>
     			<RouterApp />
    </StaticRouter>
	);
}
