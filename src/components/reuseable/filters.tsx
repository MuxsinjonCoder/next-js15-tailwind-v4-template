import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Search from "./search";
import { Label } from "../ui/label";

interface FiltersPropsTypes {
  classNameSelectFilter: boolean;
  selectedClassName?: string;
  setSelectedClassName?: React.Dispatch<React.SetStateAction<string>>;
  search?: boolean;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  tooltipText?: string;
}

export default function Filters({
  classNameSelectFilter,
  selectedClassName,
  setSelectedClassName,
  search,
  setSearchTerm,
  tooltipText,
}: FiltersPropsTypes) {
  return (
    <>
      <div className="flex items-end gap-5 justify-between">
        <div>
          {/* search */}
          {search && setSearchTerm !== undefined && (
            <div className="flex flex-col gap-2">
              <Label>Qidirish</Label>
              <Search
                tooltipText={tooltipText || "Izlash"}
                onDebouncedChange={(val) => setSearchTerm(val)}
              />
            </div>
          )}
        </div>

        <div className="flex items-end gap-3">
          {/* select class filter */}
          {classNameSelectFilter && (
            <>
              <div className="flex flex-col gap-2">
                <Label>Sinfni tanlash</Label>
                <Select
                  onValueChange={setSelectedClassName}
                  value={selectedClassName}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Sinflar" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
                      <SelectItem key={item} value={item.toString()}>
                        {item}-sinf
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
