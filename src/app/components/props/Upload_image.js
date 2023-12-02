'use client'
import { useState, useEffect } from "react";

export default function UploadImage() {
  const [imagePreviews, setImagePreviews] = useState([]);

  return (
    <>
      <div className="upload">
        <h2>Upload Image</h2>

        <div>
          {imagePreviews?.map((preview, index) => (
            <img
              key={index}
              src={preview}
              alt={`Preview ${index}`}
              style={{ width: "200px", height: "auto" }}
            />
          ))}
        </div>

        <form>
          <input type="file" />
          <button className="uploadBtn">Upload</button>
        </form>
      </div>
    </>
  );
}