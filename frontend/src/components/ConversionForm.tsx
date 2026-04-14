"use client";

import { useState, useRef } from "react";
import axios from "axios";
import { UploadCloud, File as FileIcon, Loader2, Download, CheckCircle2, ShieldCheck, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

interface ConversionFormProps {
  endpoint: string;
  acceptedFileTypes: string;
  title: string;
  description: string;
  targetFormat?: string;
}

export default function ConversionForm({ endpoint, acceptedFileTypes, title, description, targetFormat }: ConversionFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [convertedFileName, setConvertedFileName] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault(); setIsDragging(false);
    if (e.dataTransfer.files?.[0]) { setFile(e.dataTransfer.files[0]); setDownloadUrl(null); }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) { setFile(e.target.files[0]); setDownloadUrl(null); }
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

  const handleConvert = async () => {
    if (!file) return;
    // File size validation: 50MB max
    if (file.size > 50 * 1024 * 1024) {
      toast.error("File too large. Maximum file size is 50 MB.");
      return;
    }
    setIsUploading(true); setProgress(0); setDownloadUrl(null);
    const formData = new FormData();
    formData.append("file", file);
    let url = `${API_URL}/convert/${endpoint}`;
    if (targetFormat) url += `?target_format=${targetFormat}`;

    try {
      const response = await axios.post(url, formData, {
        responseType: "blob",
        onUploadProgress: (e) => setProgress(Math.round((e.loaded * 100) / (e.total || 1))),
      });
      const disposition = response.headers["content-disposition"];
      let filename = file.name.split(".")[0] + "_converted";
      if (disposition?.includes("filename=")) {
        const m = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(disposition);
        if (m?.[1]) filename = m[1].replace(/['"]/g, "");
      } else {
        const extMap: Record<string, string> = {
          "application/pdf": ".pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document": ".docx",
          "image/png": ".png", "audio/mpeg": ".mp3", "audio/wav": ".wav", "audio/ogg": ".ogg",
        };
        filename = file.name.split(".")[0] + (extMap[response.headers["content-type"]] || "");
      }
      setDownloadUrl(window.URL.createObjectURL(new Blob([response.data])));
      setConvertedFileName(filename);
      toast.success("✅ Conversion complete! Your file is ready.");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Conversion failed";
      toast.error(`Error: ${msg}. Please try again.`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Privacy Notice */}
      <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl mb-6 text-sm text-blue-800">
        <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
        <p>
          <strong>Your privacy is protected.</strong> Files uploaded to this tool are processed in memory and <strong>automatically deleted from our servers within 30 minutes</strong>. We never read, store, or share your files with third parties.
        </p>
      </div>

      <Card className="shadow-lg border-slate-200">
        <CardContent className="pt-6">
          {/* Upload Zone */}
          {!file ? (
            <div
              className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
                isDragging ? "border-blue-500 bg-blue-50 scale-[1.01]" : "border-blue-200 bg-blue-50/50 hover:border-blue-400 hover:bg-blue-50"
              }`}
              onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors ${isDragging ? "bg-blue-200" : "bg-blue-100"}`}>
                <UploadCloud className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-1 text-slate-800">Drop your file here</h3>
              <p className="text-sm text-slate-500 mb-4">or click to browse from your computer</p>
              <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                Select File
              </Button>
              <p className="text-xs text-slate-400 mt-3">Maximum file size: 50 MB</p>
              <input type="file" ref={fileInputRef} className="hidden" accept={acceptedFileTypes} onChange={handleFileChange} />
            </div>
          ) : (
            <div className="space-y-5">
              {/* File Info */}
              <div className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50">
                <div className="p-3 bg-white rounded-lg shadow-sm border">
                  <FileIcon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold truncate text-slate-800">{file.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                {!isUploading && !downloadUrl && (
                  <Button variant="ghost" size="sm" onClick={() => setFile(null)} className="text-slate-400 hover:text-red-500 shrink-0">
                    Remove
                  </Button>
                )}
              </div>

              {/* Progress */}
              {isUploading && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Converting…</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-center text-slate-400 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> This usually takes a few seconds
                  </p>
                </div>
              )}

              {/* Convert Button */}
              {!isUploading && !downloadUrl && (
                <Button className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700" onClick={handleConvert}>
                  Convert File
                </Button>
              )}

              {/* Success State */}
              {downloadUrl && (
                <div className="space-y-4">
                  <div className="p-6 border border-green-200 bg-green-50 rounded-xl text-center">
                    <CheckCircle2 className="w-10 h-10 text-green-500 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold text-green-800 mb-1">Conversion Complete!</h3>
                    <p className="text-sm text-green-700 mb-4">Your converted file is ready to download.</p>
                    <a href={downloadUrl} download={convertedFileName}>
                      <Button className="w-full h-11 bg-green-600 hover:bg-green-700 text-base">
                        <Download className="mr-2 h-5 w-5" /> Download {convertedFileName}
                      </Button>
                    </a>
                  </div>
                  <p className="text-xs text-center text-slate-400 flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3" /> This file will be automatically deleted from our servers within 30 minutes.
                  </p>
                  <Button variant="outline" className="w-full" onClick={() => { setFile(null); setDownloadUrl(null); }}>
                    Convert Another File
                  </Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
