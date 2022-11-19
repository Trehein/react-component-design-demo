import { render, screen } from "@testing-library/react"
import SingleComponent from "../SingleComponent"

describe('SingleComponent', () => {
    it('renders the SingleComponent correctly', () => {
        render(<SingleComponent />)
        expect(screen.getByLabelText('')).toBeVisible()
    })
})