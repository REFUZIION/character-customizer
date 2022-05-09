import "./assets/scss/style.scss";
import React, { useState } from "react";

function App() { // all possible styles and the amount of items available.
	const [dressupState, setDressupState] = useState({
		hair: { current: 0, total: 5 },
		brows: { current: 0, total: 3 },
		eyes: { current: 0, total: 3 },
		nose: { current: 0, total: 3 },
		mouth: { current: 0, total: 3 },
		body: { current: 0, total: 4 },
		shirts: { current: 0, total: 3 },
		pants: { current: 0, total: 3 },
	});

	function next(item) { // Function for next customization option
		let next_num = dressupState[item].current + 1;
		// if next_num exceeds total, restart (set current to 0)
		let new_current_next = next_num < dressupState[item].total ? next_num : 0;
		setDressupState({
			...dressupState,
			[item]: {
				current: (dressupState[item].current = new_current_next),
				total: dressupState[item].total,
			},
		});
	}

	// Work in progress, doesnt work fully yet.
	function previous(item) { // Function for previous customization option
		// if next_num goes under 0, restart (set current to dressState Total)
		let previous_num = dressupState[item].current - 1;
			if (previous_num === -1) {
				previous_num = dressupState[item].total -1;
			}
		setDressupState({
			...dressupState,
			[item]: {
				current: (dressupState[item].current = previous_num),
				total: dressupState[item].total,
			},
		});
	}
	
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
	};
	// HTML for web app
	return (
		<div className="App">
			<div id="header">
				<div class="banner"><h1>Deze customizer is gemaakt door Diederik Veenstra.</h1></div>
				<div class="horse-overlay"></div>
			</div>
			<div id="content-wrapper">
				<div id="container">
					<div id="background">
						<div
							id="body"
							className={
								`${isActive ? "body" : "female body"}` +
								(dressupState["body"].current + 1)
							}
						>
							<div
								id="shirt"
								className={
									"shirts" + dressupState["shirts"].current
								}
							></div>
							<div
								id="pants"
								className={
									"pants" + dressupState["pants"].current
								}
							></div>
						</div>

						<div id="head" className="headbase"></div>
						<div
							id="eyes"
							className={
								"eyes" + (dressupState["eyes"].current + 1)
							}
						></div>
						<div
							id="brows"
							className={
								"brows" + (dressupState["brows"].current + 1)
							}
						></div>
						<div
							id="nose"
							className={
								"nose" + (dressupState["nose"].current + 1)
							}
						></div>
						<div
							id="mouth"
							className={
								"mouth" + (dressupState["mouth"].current + 1)
							}
						></div>
						<div id="beatymark" className="beautymark2"></div>
						<div
							id="hair"
							className={"hair" + dressupState["hair"].current}
						></div>
					</div>
				</div>

				{/* Next buttons */}
				<input
					type="button"
					value="Next gender"
					id="nextgender"
					onClick={handleToggle}
				/>
				<input
					type="button"
					value="next body"
					id="nextbody"
					onClick={() => next("body")}
				/>
				<input
					type="button"
					value="next hair"
					id="nexthair"
					onClick={() => next("hair")}
				/>
				<input
					type="button"
					value="next brows"
					id="nextbrows"
					onClick={() => next("brows")}
				/>
				<input
					type="button"
					value="next eyes"
					id="nexteyes"
					onClick={() => next("eyes")}
				/>
				<input
					type="button"
					value="next nose"
					id="nextnose"
					onClick={() => next("nose")}
				/>
				<input
					type="button"
					value="next mouth"
					id="nextmouth"
					onClick={() => next("mouth")}
				/>
				<input
					type="button"
					value="next shirt"
					id="nextshirt"
					onClick={() => next("shirts")}
				/>
				<input
					type="button"
					value="next pants"
					id="nextpants"
					onClick={() => next("pants")}
				/>

				{/* Previous buttons */}
				<input
					type="button"
					value="Previous gender"
					id="previousgender"
					onClick={handleToggle}
				/>
				<input
					type="button"
					value="previous body"
					id="previousbody"
					onClick={() => previous("body")}
				/>
				<input
					type="button"
					value="previous hair"
					id="previoushair"
					onClick={() => previous("hair")}
				/>
				<input
					type="button"
					value="previous brows"
					id="previousbrows"
					onClick={() => previous("brows")}
				/>
				<input
					type="button"
					value="previous eyes"
					id="previouseyes"
					onClick={() => previous("eyes")}
				/>
				<input
					type="button"
					value="previous nose"
					id="previousnose"
					onClick={() => previous("nose")}
				/>
				<input
					type="button"
					value="previous mouth"
					id="previousmouth"
					onClick={() => previous("mouth")}
				/>
				<input
					type="button"
					value="previous shirt"
					id="previousshirt"
					onClick={() => previous("shirts")}
				/>
				<input
					type="button"
					value="previous pants"
					id="previouspants"
					onClick={() => previous("pants")}
				/>
			</div>
		</div>
	);
}

export default App;
