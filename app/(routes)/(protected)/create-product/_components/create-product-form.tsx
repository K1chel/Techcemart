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
import { UploadDropzone } from "@/lib/uploadthing";
import { SubmitButton } from "@/components/submit-button";
import { toast } from "sonner";
import Image from "next/image";
import { XIcon } from "lucide-react";

export const CreateProductForm = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [json, setJson] = useState<JSONContent | null>(null);
  const [images, setImages] = useState<string[] | null>(null);
  const [productFile, setProductFile] = useState<string | null>(null);

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
              <div className="flex flex-col gap-y-2 w-full">
                <input
                  hidden
                  name="images"
                  value={JSON.stringify(images)}
                  readOnly
                />
                <Label>Product Images</Label>
                <UploadDropzone
                  endpoint="imageUploader"
                  appearance={{
                    button: "bg-primary",
                    label: "text-primary hover:text-primary/80",
                  }}
                  onClientUploadComplete={(res) => {
                    setImages(
                      (prev) =>
                        [...(prev || []), ...res.map((r) => r.url)] as string[]
                    );
                    toast.success("Images uploaded successfully");
                  }}
                  onUploadError={(err: Error) => {
                    console.error(err);
                    toast.error("Failed to upload images");
                  }}
                />
                {images && (
                  <div className="flex items-center flex-wrap gap-x-5 gap-y-2 mt-3">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative">
                        <Image
                          src={img}
                          alt="Uploaded Image"
                          width={100}
                          height={100}
                          className="border object-cover rounded bg-zinc-300"
                        />
                        <button
                          type="button"
                          className="absolute -top-2 -right-2 bg-red-500 p-1 rounded-full text-white"
                          onClick={() => {
                            setImages((prev) => {
                              const newImages = [...(prev || [])];
                              newImages.splice(idx, 1);
                              return newImages;
                            });
                          }}
                        >
                          <XIcon className="size-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-y-2 w-full">
                <input
                  hidden
                  name="productFile"
                  value={JSON.stringify(images)}
                  readOnly
                />
                <Label>Product File</Label>
                <UploadDropzone
                  endpoint="productFileUpload"
                  appearance={{
                    button: "bg-primary",
                    label: "text-primary hover:text-primary/80",
                  }}
                  onClientUploadComplete={(res) => {
                    setProductFile(res[0].url);
                    toast.success("Product file uploaded successfully");
                  }}
                  onUploadError={(err: Error) => {
                    console.error(err);
                    toast.error("Failed to upload file");
                  }}
                />
              </div>
              <SubmitButton
                title="Create Product"
                pendingTitle="Creating Product..."
              />
            </form>
          </CardContent>
        </Card>
      </MaxWidthWrapper>
    </div>
  );
};
