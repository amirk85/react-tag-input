import TagInput from "./components/TagInput.jsx";

const App = () => {
	return (
		<div className="app">
			<h1>Tag input</h1>
			<TagInput />
			<p>
				Press{" "}
				<em>
					<strong>Enter</strong>
				</em>{" "}
				to add tag
			</p>
		</div>
	);
};

export default App;
