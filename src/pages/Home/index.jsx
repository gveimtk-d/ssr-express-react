import React, { useState } from "react";
import style from "./index.css";
import imgUrl from "@/assets/images/1.jpg"
import { Link } from "react-router-dom";
export default function Hello() {
	const [number, setNumber] = useState(0);
	return (
		<div>
			<Link to='/movies'>to movies</Link>
			<br />
			<img src={imgUrl} width={200} alt="" />	<br />
			<button className={style.mybutton} onClick={() => setNumber(number + 1)}>
				number++{" "}
			</button>
		</div>
	);
}
