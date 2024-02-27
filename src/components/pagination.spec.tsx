import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { Pagination } from './pagination'

const onPageChangeCallBack = vi.fn()

describe('Pagination', () => {
  it('should display the right amount of pages and results', () => {
    const wrapper = render(
      <Pagination
        pagenIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={() => {}}
      />,
    )

    const pagination = wrapper.getByText('Página 1 de 20')
    const totalPages = wrapper.getByText('Total de 200 item(s)')

    expect(pagination).toBeInTheDocument()
    expect(totalPages).toBeInTheDocument()
  })

  it('should be able to naviagte to the next page', async () => {
    const user = userEvent.setup()

    const wrapper = render(
      <Pagination
        pagenIndex={0}
        totalCount={200}
        perPage={10}
        onPageChange={onPageChangeCallBack}
      />,
    )

    const nextPageButton = wrapper.getByRole('button', {
      name: 'Próxima página',
    })

    await user.click(nextPageButton)

    expect(onPageChangeCallBack).toHaveBeenCalledWith(1)
  })
})
