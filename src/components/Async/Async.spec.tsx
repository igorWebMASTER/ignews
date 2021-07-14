import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('ite renders correctly', async () => {
    render(<Async />);

    expect(screen.getByText('Hello World')).toBeInTheDocument();


    await waitFor(() => {
        return expect(screen.queryByText('Button')).toBeInTheDocument();
    });

    // get procurar de forma sicrona
    // query sicrona 
    // find se o elemento não existir ele observa até encontrar do contrário vai da erro
});