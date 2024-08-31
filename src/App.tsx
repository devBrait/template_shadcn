import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Search } from "lucide-react";
import { Popup } from "./Popup";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="p-6 max-w-4xl mx-auto space-y-4 flex-grow">
        <h1 className="text-3xl font-bold">Produtos</h1>
        <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="ID do produto" />
            <Input name="name" placeholder="Nome do produto" />
            <Button type="submit" variant="link">
              <Search className="w-4 h-4 mr-2" />
              Filtrar resultados
            </Button>
          </form>
          <Popup />
        </div>
        <div className="border rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>3424234423</TableCell>
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>R$ 39,99</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
      <footer className="bg-black text-white text-center font-semibold py-8">
        <p className="text-sm">Desenvolvido por &#169; DevBrait.</p>
      </footer>
    </div>
  );
}
