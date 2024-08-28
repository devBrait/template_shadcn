import { Table, TableHead, TableHeader } from "./components/ui/table";

export function App() {
  return(
    <div className="p-6 max-w-4xl mx-auto">
      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableHead>ID</TableHead>
            <TableHead>Produto</TableHead>
            <TableHead>Preço</TableHead>
          </TableHeader>
        </Table>
      </div>
    </div>
  )
}
