

export const increment = () => { return { type: 'increment' } }
export const decrement = () => { return { type: 'decrement' } }

export const add = (number) => { return { type: 'add', data: number } }
export const subtract = (number) => { return { type: 'subtract', data: number } }