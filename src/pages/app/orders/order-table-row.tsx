import { ArrowRight, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { TableCell, TableRow } from '@/components/ui/table'

// interface OrderTableRowProps {}

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <Button size={'xs'} variant="outline">
          <Search className="size-3" />
          <span className="sr-only">Detalhes do pedido</span>
        </Button>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        asjhg12u4g34j5bjh234g
      </TableCell>

      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>

      <TableCell className="flex items-center gap-2">
        <span className="size-2 rounded-full bg-slate-400" />
        <span className="font-medium text-muted-foreground">Pendente</span>
      </TableCell>

      <TableCell className="font-medium">André de Oliveira Barbosa</TableCell>

      <TableCell className="font-medium">R$ 149,90</TableCell>

      <TableCell className="">
        <Button size={'xs'} variant={'outline'}>
          <ArrowRight className="mr-2 size-3" />
          Aprovar
        </Button>
      </TableCell>

      <TableCell className="">
        <Button size={'xs'} variant={'ghost'}>
          <X className="mr-2 size-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
