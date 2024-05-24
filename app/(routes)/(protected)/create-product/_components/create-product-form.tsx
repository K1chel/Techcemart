"use client";

import { useState } from "react";
import { JSONContent } from "@tiptap/react";

import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Editor } from "@/components/editor";
import { SelectedCategory } from "./select-category";

export const CreateProductForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [json, setJson] = useState<JSONContent | null>(null);

  return (
    <div className="mb-12">
      <MaxWidthWrapper>
        <Card>
          <CardHeader>
            <CardTitle>Create your product</CardTitle>
            <CardDescription>
              Fill in the form below to create a new product
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-5">
              <div className="flex flex-col gap-y-2">
                <Label>Product Name</Label>
                <Input
                  type="text"
                  placeholder="Enter product name..."
                  name="name"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <input
                  hidden
                  name="category"
                  value={selectedCategory || ""}
                  readOnly
                />
                <Label>Product Category</Label>
                <SelectedCategory
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Product Price</Label>
                <Input
                  type="number"
                  placeholder="$39.89"
                  name="price"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <Label>Small Summary</Label>
                <Textarea
                  placeholder="Describe your product in max 250 characters..."
                  name="summary"
                  className="resize-none"
                  maxLength={250}
                  required
                />
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <input
                  hidden
                  name="description"
                  value={JSON.stringify(json)}
                  readOnly
                />
                <Label>Description</Label>
                <Editor json={json} setJson={setJson} />
              </div>
            </form>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};
