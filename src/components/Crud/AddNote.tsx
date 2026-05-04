import React, {useState} from 'react';

interface AddNoteProps {
	onAdd: (text: string) => Promise<void>;
}

const AddNote: React.FC<AddNoteProps> = ({ onAdd }) => {
	const [text, setText] = useState('');

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		await onAdd(text);
		setText('');
	};

	return (
		<form onSubmit={handleSubmit} className="flex justify-center">
			<label htmlFor="text" className="border-2 border-green-300  w-64 min-h-32 relative pr-12 rounded-md
			  focus-within:outline-green-900  hover:outline-green-900" >
				<textarea
					id="text"
					value={text}
					onChange={(e)=>setText(e.target.value)}
					className="w-full h-full resize-none p-3 focus:outline-none hover:border-transparent"
					required />
				<button
					className="absolute bottom-3 right-3 bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fillRule="evenodd"
								d="M6 3a1 1 0 0 1 1.447.894L9.382 10l-2.93 6.106A1 1 0 0 1 6 17V3z"
								clipRule="evenodd"
							/>
							<path
								fillRule="evenodd"
								d="M11 3a1 1 0 0 1 1.448.894L14.382 10l-2.93 6.106A1 1 0 0 1 11 17V3z"
								clipRule="evenodd"
							/>
						</svg>
				</button>
			</label>
		</form>
	);
};

export default AddNote;
