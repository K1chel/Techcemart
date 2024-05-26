"use client";

import { type JSONContent, useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

type Props = {
  content: JSONContent;
};

export const ProductDescription = ({ content }: Props) => {
  const editor = useEditor({
    editable: false,
    content,
    extensions: [StarterKit],
    editorProps: {
      attributes: {
        class: "prose prose-sm md:prose-base full-width",
      },
    },
  });

  if (!editor) return null;

  return <EditorContent editor={editor} />;
};
