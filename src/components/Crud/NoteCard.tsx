import React from 'react';
import NoteType from "./NoteType.ts";

interface NoteProps {
	note: NoteType;
	onDelete: (id: number) => Promise<void>;
}

const NoteCard: React.FC<NoteProps> = ({ note, onDelete }) => {
	return (
		<div className="bg-white shadow-md border-2 border-sky-500 rounded-md p-4 relative  min-h-32 w-64 ">
			<p className="flex  break-all text-gray-800">{note.content}</p>
			<button
				className="absolute -top-3 -right-3  bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
				onClick={() => onDelete(note.id)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-4 w-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</button>
		</div>
	);
};

export default NoteCard;
