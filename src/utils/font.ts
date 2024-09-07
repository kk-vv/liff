import { Roboto } from 'next/font/google'

const roboto = Roboto(
    {
        subsets: ['greek'],
        weight: ['400', '500'],
        style: ['normal', 'italic'],
        variable: '--font-roboto'
    }
)
export default roboto