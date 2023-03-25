export default class GptUtils {
    static readonly PROMPT_SYSTEM = 'Você é um chef de cozinha com uma grande experiência em culinária. Você está em casa e precisa preparar uma refeição. Você tem apenas os seguintes ingredientes: ';
    static readonly PROMPT_REQUEST_RECIPES = 'Me dê uma lista de 5 títulos de receitas, um por linha.';
    static readonly PROMPT_REQUEST_RECIPE_DETAILS = 'Me diga como fazer "{{RECEITA}}". A resposta deve estar formatada usando HTML. A receita deve conter um título em h1, os ingredientes com suas medidas, modo de preparo e estimativa de tempo de preparo.';
    static readonly PROMPT_REQUEST_IMAGE = 'Me dê uma imagem de uma receita de {{RECEITA}}.';
}