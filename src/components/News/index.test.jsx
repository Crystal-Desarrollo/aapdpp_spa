import { screen, render } from '@testing-library/react'
import { News } from '.'

// test('renders <NoContent/> when there are no news', () => {
//     render(<News />)

//     const noContentText = screen.getByText('Aún no hay nada aquí')
//     expect(noContentText).toBeInTheDocument()
// })

// test('renders the news when length > 0', () => {
//     const news = [
//         {
//             title: 'New Title',
//             description: 'This is the description',
//             body: 'A body'
//         }
//     ]

//     render(<News news={news} />)

//     const title = screen.getByText(news[0].title)
//     expect(title).toBeInTheDocument()

//     const description = screen.getByText(news[0].description)
//     expect(description).toBeInTheDocument()

//     const body = screen.getByText(news[0].body)
//     expect(body).toBeInTheDocument()
// })
