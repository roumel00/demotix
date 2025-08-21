import { ArenaCombobox } from '@/components/arena-combobox';
import { DropzoneExample } from '@/components/dropzone-showcase';
import { CalendarComponent } from '@/components/calendar-component';

export default function ComponentShowcase() {
  return (
    <div className="w-full">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Component Showcase</h1>
        <p className="text-muted-foreground text-lg">
          Showcase of additional components by ShadCN.
        </p>
      </div>

      <ArenaCombobox />
      <DropzoneExample />
      <CalendarComponent /> 

      <p className="text-muted-foreground text-lg">
        <a href="https://ui.shadcn.com/components" target="_blank" rel="noopener noreferrer" className="text-blue-500 border-b border-transparent hover:border-blue-500 transition-all duration-200 ease-in-out">ui.shadcn.com</a> contains the library of base UI components.<br />
        <a href="https://shadcn.io/components" target="_blank" rel="noopener noreferrer" className="text-blue-500 border-b border-transparent hover:border-blue-500 transition-all duration-200 ease-in-out">shadcn.io</a> contains improved components of greater complexity.<br />
        See the full repository of this demo page <a href="https://github.com/roumel00/demotix" target="_blank" rel="noopener noreferrer" className="text-blue-500 border-b border-transparent hover:border-blue-500 transition-all duration-200 ease-in-out">here</a>.
      </p>
    </div>
  )
}