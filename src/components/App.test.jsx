import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import App from './App'

describe('App Component', () => {
    let container 

    beforeEach(function () {
        container  = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    function findH2(content) {
        expect(container.querySelector('h2')).toBeDefined()
        expect(container.querySelector('h2')).toHaveTextContent(content)
    }


    it('Shows the Journal Entries heading', () => {
        findH2('Journal Entries')
        // expect(container.querySelector('h2')).toBeDefined()
        // expect(container.querySelector('h2')).toHaveTextContent('Journal Entries')
    })

    it('Shows category selection page when select category link is clicked', async () => {
        await userEvent.click(screen.getByText('Select Category'))
        findH2('Please select a category:')
        // expect(container.querySelector('h2')).toBeDefined()
        // expect(container.querySelector('h2')).toHaveTextContent('Please select a category:')
    })
})