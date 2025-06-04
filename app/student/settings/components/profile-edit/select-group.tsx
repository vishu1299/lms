import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectGroupProps {
  label: string;
  defaultValue: string;
  options: { label: string; value: string }[];
}

export default function SelectGroup({ label, defaultValue, options }: SelectGroupProps) {
  return (
    <div className="space-y-3">
      <Label className="font-normal">{label}</Label>
      <Select defaultValue={defaultValue}>
        <SelectTrigger className="border-none bg-[#F9F9F9] w-full">
          <SelectValue placeholder={`Select ${label}`} />
        </SelectTrigger>
        <SelectContent  >
          {options.map((opt) => (
            <SelectItem key={opt.value} value={opt.value} >
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
