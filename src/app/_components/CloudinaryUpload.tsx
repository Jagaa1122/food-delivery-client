"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const UploadCloudinary = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const CLOUD_NAME = "dslllxkue";
  const UPLOAD_PRESET = "food-delivery";

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      alert("Please select an image");
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);
    formData.append("cloud_name", CLOUD_NAME);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setUploadedUrl(data.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input type="file" onChange={handleFileChange} disabled={uploading} />
        <Button onClick={uploadImage}>
          {uploading ? "Uploading ..." : "Upload"}
        </Button>
      </div>

      <div className="rounded-lg">
        <Image
          alt="uploaded"
          src="https://res.cloudinary.com/dslllxkue/image/upload/v1739933974/vqkaa2ezosujpp3tm2db.png"
          width={400}
          height={400}
          className="rounded-lg"
        />
        {/* <a className="text-center" href={uploadedUrl}>
          View Image
        </a> */}
      </div>
    </div>
  );
};
