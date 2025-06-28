"use client";

import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "../ui/input";
import useDebounce from "@/hooks/useDebounce";

interface SearchPropsTypes {
  onDebouncedChange: (value: string) => void;
  tooltipText: string;
}

export default function Search({
  onDebouncedChange,
  tooltipText,
}: SearchPropsTypes) {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 500); // 500ms delay bilan

  // Debounced qiymat o'zgarganda parentga yuborish
  useEffect(() => {
    onDebouncedChange(debouncedValue);
  }, [debouncedValue, onDebouncedChange]);

  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <Input
            className="w-full md:w-[300px]"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Qidiruv..."
          />
        </TooltipTrigger>
        <TooltipContent>{tooltipText}</TooltipContent>
      </Tooltip>
    </div>
  );
}
