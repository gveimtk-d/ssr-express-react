import React, { useState } from "react";

export default function Hello() {
	const [number, setNumber] = useState(0);
	return (
		<div>
			<h1>Hello, World!！</h1>
			<p>This is a simple example of a React component.</p>
			<div>number:{number}</div>
      <button onClick={() => setNumber(number + 1)}>number++  </button>
		</div>
	); 
}
