import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from '@/components/ui/shadcn-io/combobox';

const arenas = [
  {
    value: 'Arena One',
    label: 'Arena One',
  },
  {
    value: 'Arena Two',
    label: 'Arena Two',
  },
  
  {
    value: 'Arena Three',
    label: 'Arena Three',
  },
  
  {
    value: 'Arena Four',
    label: 'Arena Four',
  },
  
];

export const ArenaCombobox = () => {
  return (
    <div className="my-8">
      <div className="mb-4">
        <h2 className="text-2xl tracking-tight mb-2">Combobox</h2>
        <p className="text-muted-foreground text-lg mb-2">
          This component provides a dropdown menu of options, which can be filterd via search. 
          Use cases is for a dopdown with a lot of options. Examples include:
        </p>
        <ul className="list-disc list-inside text-muted-foreground text-lg">
          <li>Selecting an arena for an event</li>
          <li>Selecting a seat for an arena</li>
        </ul>
      </div>
      <Combobox
        data={arenas}
        type="arena"
      >
        <ComboboxTrigger className="w-[50%]" />
        <ComboboxContent>
          <ComboboxInput />
          <ComboboxEmpty />
          <ComboboxList>
            <ComboboxGroup>
              {arenas.map((arena) => (
                <ComboboxItem key={arena.value} value={arena.value}>
                  {arena.label}
                </ComboboxItem>
              ))}
            </ComboboxGroup>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}