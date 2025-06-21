"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress"
import { Upload, FileSpreadsheet, X, CheckCircle, Brain } from "lucide-react"
import { cn } from "../lib/utils"

export function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState([])

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      progress: 0,
      status: "uploading",
      id: Math.random().toString(36).substr(2, 9),
    }))

    setUploadedFiles((prev) => [...prev, ...newFiles])

    // Simulate file upload progress
    newFiles.forEach((uploadedFile) => {
      const interval = setInterval(() => {
        setUploadedFiles((prev) =>
          prev.map((f) => (f.id === uploadedFile.id ? { ...f, progress: Math.min(f.progress + 10, 100) } : f)),
        )
      }, 200)

      setTimeout(() => {
        clearInterval(interval)
        setUploadedFiles((prev) =>
          prev.map((f) => (f.id === uploadedFile.id ? { ...f, progress: 100, status: "completed" } : f)),
        )
      }, 2000)
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/vnd.ms-excel": [".xls"],
      "text/csv": [".csv"],
    },
    multiple: true,
  })

  const removeFile = (id) => {
    setUploadedFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const analyzeFiles = () => {
    // This would trigger the AI analysis
    console.log(
      "Analyzing files:",
      uploadedFiles.filter((f) => f.status === "completed"),
    )
  }

  return (
    <div className="space-y-6">
      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={cn(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400",
        )}
      >
        <input {...getInputProps()} />
        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
        {isDragActive ? (
          <p className="text-blue-600 font-medium">Drop your files here...</p>
        ) : (
          <div>
            <p className="text-gray-600 mb-2">Drag and drop your Excel files here, or click to browse</p>
            <p className="text-sm text-gray-500">Supports .xlsx, .xls, and .csv files up to 10MB</p>
          </div>
        )}
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-900">Uploaded Files</h4>
          {uploadedFiles.map((uploadedFile) => (
            <div key={uploadedFile.id} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <FileSpreadsheet className="h-8 w-8 text-green-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{uploadedFile.file.name}</p>
                <p className="text-xs text-gray-500">{(uploadedFile.file.size / 1024 / 1024).toFixed(2)} MB</p>
                {uploadedFile.status === "uploading" && <Progress value={uploadedFile.progress} className="mt-2 h-2" />}
              </div>
              <div className="flex items-center space-x-2">
                {uploadedFile.status === "completed" && <CheckCircle className="h-5 w-5 text-green-600" />}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFile(uploadedFile.id)}
                  className="text-gray-400 hover:text-red-600"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Analyze Button */}
      {uploadedFiles.some((f) => f.status === "completed") && (
        <div className="flex justify-center">
          <Button onClick={analyzeFiles} className="bg-blue-600 hover:bg-blue-700">
            <Brain className="h-4 w-4 mr-2" />
            Analyze with AI
          </Button>
        </div>
      )}
    </div>
  )
}
