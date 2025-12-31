import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function FormInput() {
  return (
    <form
      action=""
      className="flex flex-col gap-2 border border-slate-400 p-4 rounded-2xl"
    >
      <h2 className="text-xl font-bold uppercase">Todo SSR</h2>

      <Input
        type="text"
        className="w-full border-slate-400 rounded-xl"
        placeholder="Add new todo"
      />

      <Button
        type="submit"
        variant="default"
        className="w-full bg-slate-600 text-slate-100"
      >
        Submit
      </Button>
    </form>
  );
}
