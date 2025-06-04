import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: React.ReactNode;

}

export default function InputGroup({ label, children, ...props }: InputGroupProps) {
  return (
    <div className="space-y-3">
      <Label className="font-normal">{label}</Label>
      {children ? (
        children
      ) : (
        <Input {...props} className="border-none bg-[#F9F9F9]" />
      )}

    </div>
  );
}
