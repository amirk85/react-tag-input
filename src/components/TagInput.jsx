import { useEffect, useState } from "react";

const TagInput = () => {
	const [tags, setTags] = useState([]);
	const [userInput, setUserInput] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userInput.trim().length > 0) {
			setTags((prev) => [...prev, userInput.trim()]);
			setUserInput("");
		}
	};

	useEffect(() => {
		document.getElementById("inputTag").focus();
	}, []);

	const handleTagDelete = (index) => {
		const updatedTags = [...tags.slice(0, index), ...tags.slice(index + 1)];
		setTags(updatedTags);
	};

	const onDeleteWithBackspace = (e) => {
		if (e.key === "Backspace" && userInput.length === 0) {
			const updateTags = tags.slice(0, -1);
			setTags(updateTags);
		}
	};

	return (
		<div className="container">
			<ul className="tagList">
				{tags.map((tag, index) => (
					<li key={tag + index} className="tag">
						<span>{tag}</span>
						<button onClick={() => handleTagDelete(index)}>x</button>
					</li>
				))}
			</ul>
			<form onSubmit={handleSubmit}>
				<input
					id="inputTag"
					type="text"
					placeholder="add tag"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onKeyDown={onDeleteWithBackspace}
				/>
			</form>
		</div>
	);
};

export default TagInput;
