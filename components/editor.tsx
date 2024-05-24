"use client";

import {
  Editor as EditorType,
  EditorContent,
  JSONContent,
  useEditor,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { Button } from "@/components/ui/button";

const MenuBar = ({ editor }: { editor: EditorType | null }) => {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 w-full">
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        variant={
          editor.isActive("heading", { level: 1 }) ? "default" : "outline"
        }
        type="button"
        size="sm"
      >
        H1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        variant={
          editor.isActive("heading", { level: 2 }) ? "default" : "outline"
        }
        type="button"
        size="sm"
      >
        H2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        variant={
          editor.isActive("heading", { level: 3 }) ? "default" : "outline"
        }
        type="button"
        size="sm"
      >
        H3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        variant={editor.isActive("bold") ? "default" : "outline"}
        type="button"
        size="sm"
      >
        Bold
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        variant={editor.isActive("italic") ? "default" : "outline"}
        type="button"
        size="sm"
      >
        Italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        variant={editor.isActive("strike") ? "default" : "outline"}
        type="button"
        size="sm"
      >
        Strike
      </Button>
    </div>
  );
};

type EditorProps = {
  json: JSONContent | null;
  setJson: any;
};

export const Editor = ({ json, setJson }: EditorProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: json,
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[150px] prose full-width",
      },
    },
    onUpdate: ({ editor }) => {
      setJson(editor.getJSON());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        editor={editor}
        className="rounded-lg border p-2 min-h-[150px] min-w-full mt-2"
        placeholder="Start typing here..."
      />
    </div>
  );
};
