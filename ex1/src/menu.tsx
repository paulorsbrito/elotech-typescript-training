type MenuItem = {
    name: string,
    url: string,
    caption: string
}

type Menu = Array<MenuItem>

const menu:Menu = [
    {
        name: 'index',
        url: 'index',
        caption: 'Índice'
    },
    {
        name: 'list',
        url: 'list',
        caption: 'Lista'
    },
    {
        name: 'edit',
        url: 'edit',
        caption: 'Edição'
    },        
]

export default menu