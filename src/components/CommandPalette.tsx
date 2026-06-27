"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { projects, navLinks } from "@/lib/data";
import { Search, Monitor, Terminal, FileText, ArrowRight, CornerDownLeft } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleSelect = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Small timeout to allow dialog close animation
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-[550px] overflow-hidden p-0 border border-white/[0.07] bg-[#0a0a0f]/95 backdrop-blur-xl shadow-[0_0_50px_rgba(99,102,241,0.15)] text-[#f1f5f9]">
        <DialogTitle className="sr-only">Command Palette</DialogTitle>
        <DialogDescription className="sr-only">
          Search sections, projects, or common actions.
        </DialogDescription>
        <Command className="flex flex-col h-full max-h-[400px] divide-y divide-white/[0.07]">
          <div className="flex items-center px-4 py-3 gap-2">
            <Search className="h-4 w-4 text-[#64748b] shrink-0" />
            <Command.Input
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent text-sm text-[#f1f5f9] placeholder-[#64748b] outline-none border-none py-1 focus:ring-0"
            />
            <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-0.5 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-[10px] font-medium text-[#64748b]">
              ESC
            </kbd>
          </div>
          <Command.List className="overflow-y-auto max-h-[300px] p-2 space-y-1">
            <Command.Empty className="py-6 text-center text-sm text-[#64748b]">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation" className="text-xs font-semibold text-[#64748b] px-3 py-2 uppercase tracking-widest">
              {navLinks.map((link) => (
                <Command.Item
                  key={link.href}
                  value={link.label}
                  onSelect={() => handleSelect(link.href.substring(1))}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#f1f5f9] cursor-pointer hover:bg-indigo-500/10 hover:text-indigo-400 focus:bg-indigo-500/10 focus:text-indigo-400 outline-none transition-colors data-[selected=true]:bg-indigo-500/10 data-[selected=true]:text-indigo-400"
                >
                  <div className="flex items-center gap-3">
                    <Terminal className="h-4 w-4 shrink-0" />
                    <span>Go to {link.label}</span>
                  </div>
                  <CornerDownLeft className="h-3 w-3 opacity-30" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Projects" className="text-xs font-semibold text-[#64748b] px-3 py-2 uppercase tracking-widest border-t border-white/[0.03] mt-2 pt-2">
              {projects.map((project) => (
                <Command.Item
                  key={project.title}
                  value={project.title}
                  onSelect={() => handleSelect("projects")}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-[#f1f5f9] cursor-pointer hover:bg-indigo-500/10 hover:text-indigo-400 focus:bg-indigo-500/10 focus:text-indigo-400 outline-none transition-colors data-[selected=true]:bg-indigo-500/10 data-[selected=true]:text-indigo-400"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 shrink-0" />
                    <span>View {project.title}</span>
                  </div>
                  <ArrowRight className="h-3 w-3 opacity-30" />
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
          <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.02] text-[11px] text-[#64748b] border-t border-white/[0.07]">
            <span>Navigate with keys</span>
            <div className="flex items-center gap-2">
              <span>Select</span>
              <kbd className="px-1 rounded bg-white/5 border border-white/10 font-mono">Enter</kbd>
            </div>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
