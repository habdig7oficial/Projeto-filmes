export default interface Filmes{
    nome: string,
    lancamento: string,
    duracao: string,
    classificacao: number
    cartaz: string,
    generos: Array<string>,
    pagina?: string,
    favorito: boolean
}