import React, { useState } from "react";
import style from "./index.css";
import imgUrl from "@/assets/images/1.jpg"
export default function Hello() {
	const [number, setNumber] = useState(0);
	return (
		<div>
			<img src={imgUrl} width={200} alt="" />
			<h1>Hello, World!！</h1>
			<p>This is a simple example of a React component.</p>
			<div className={style["textRed"]}>number:{number}</div>
			<button className={style.mybutton} onClick={() => setNumber(number + 1)}>
				number++{" "}
			</button>
		</div>
	);
}
