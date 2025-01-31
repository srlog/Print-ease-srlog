import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Palette } from "lucide-react";
import { useEffect, useState } from "react";

const themes = [
  { 
    name: "Black", 
    value: "black",
    color: "bg-black"
  },
  { 
    name: "White", 
    value: "white",
    color: "bg-white border border-border"
  },
  { 
    name: "Midnight", 
    value: "midnight",
    color: "bg-[#1a1b4b]"
  },
  { 
    name: "Brown", 
    value: "brown",
    color: "bg-[#2c1810]"
  },
  { 
    name: "Emerald", 
    value: "emerald",
    color: "bg-[#064e40]"
  },
  { 
    name: "Royal", 
    value: "royal",
    color: "bg-[#2d0a3c]"
  },
  { 
    name: "Crimson", 
    value: "crimson",
    color: "bg-[#4a0f1d]"
  },
  { 
    name: "Ocean", 
    value: "ocean",
    color: "bg-[#0a3a4a]"
  }
];

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("black");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="grid grid-cols-2 gap-1 p-2 min-w-[160px]">
        {themes.map((t) => (
          <DropdownMenuItem
            key={t.value}
            onClick={() => setTheme(t.value)}
            className="flex items-center gap-2 px-3 py-2"
          >
            <div className={`w-4 h-4 rounded-full ${t.color} ring-1 ring-border/50`} />
            <span className={theme === t.value ? "font-medium" : ""}>
              {t.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}