import { PlusCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "@radix-ui/react-label";
import { Input } from "./components/ui/input";

export function Popup(){
    return(
        <Dialog>
        <DialogTrigger asChild>
          <Button>
            <PlusCircle className="w-4 h-4 mr-2" />
            Novo produto
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Novo Produto</DialogTitle>
            <DialogDescription>Criar um novo produto</DialogDescription>
          </DialogHeader>
          <form className="space-y-6">
          <div className="grid grid-cols-4 items-center text-right gap-3">
            <Label htmlFor="name">Produto</Label>
            <Input className="col-span-3" id="name"/>
          </div>
          <div className="grid grid-cols-4 items-center text-right gap-3">
            <Label htmlFor="price">Preço</Label>
            <Input className="col-span-3" id="price"/>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
}