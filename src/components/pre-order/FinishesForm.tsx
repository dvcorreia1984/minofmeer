import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FinishesFormProps {
  finishes: {
    kitchen: string;
    bathroom: string;
    floor: string;
    exterior: string;
  };
  setFinishes: (finishes: any) => void;
  finishingOptions: {
    kitchen: string[];
    bathroom: string[];
    floor: string[];
    exterior: string[];
  };
}

const FinishesForm = ({ finishes, setFinishes, finishingOptions }: FinishesFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold">Afwerkings Opsies</h3>
      
      <div className="space-y-2">
        <Label htmlFor="kitchen">Kombuis Afwerking</Label>
        <Select
          value={finishes.kitchen}
          onValueChange={(value) => setFinishes({ ...finishes, kitchen: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kies kombuis afwerking" />
          </SelectTrigger>
          <SelectContent>
            {finishingOptions.kitchen.map((option) => (
              <SelectItem key={option} value={option} className="capitalize">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bathroom">Badkamer Afwerking</Label>
        <Select
          value={finishes.bathroom}
          onValueChange={(value) => setFinishes({ ...finishes, bathroom: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kies badkamer afwerking" />
          </SelectTrigger>
          <SelectContent>
            {finishingOptions.bathroom.map((option) => (
              <SelectItem key={option} value={option} className="capitalize">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="floor">Vloer Afwerking</Label>
        <Select
          value={finishes.floor}
          onValueChange={(value) => setFinishes({ ...finishes, floor: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kies vloer afwerking" />
          </SelectTrigger>
          <SelectContent>
            {finishingOptions.floor.map((option) => (
              <SelectItem key={option} value={option} className="capitalize">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="exterior">Eksterieur Afwerking</Label>
        <Select
          value={finishes.exterior}
          onValueChange={(value) => setFinishes({ ...finishes, exterior: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Kies eksterieur afwerking" />
          </SelectTrigger>
          <SelectContent>
            {finishingOptions.exterior.map((option) => (
              <SelectItem key={option} value={option} className="capitalize">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FinishesForm;