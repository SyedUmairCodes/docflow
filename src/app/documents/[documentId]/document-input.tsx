import { CloudUpload } from "lucide-react";

const DocumentInput = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-lg px-1.5 cursor-pointer truncate">
        Untitled Document
      </span>
      <CloudUpload size={18} />
    </div>
  );
};

export default DocumentInput;
