export interface Note{
    id: string,
    title: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    tag: NoteTag,
}
export const noteTags = ["Todo", "Work", "Personal", "Meeting", "Shopping", "All"] as const;
export type NoteTag = (typeof noteTags)[number];
