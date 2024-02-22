import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
      </div>

      <div className="space-y-2.5">
        <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
        </form>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Identificador</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead>Nome do cliente</TableHead>
                <TableHead className="w-[140px]">Total do pedido</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
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

                <TableCell className="text-muted-foreground">
                  há 15 minutos
                </TableCell>

                <TableCell className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-slate-400" />
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </TableCell>

                <TableCell className="font-medium">
                  André de Oliveira Barbosa
                </TableCell>

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
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  )
}
