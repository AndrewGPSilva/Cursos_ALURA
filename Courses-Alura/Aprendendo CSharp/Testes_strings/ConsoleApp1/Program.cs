Console.WriteLine("======================================");
Console.WriteLine("Sejam bem vindos ao Screen Sound!");
Console.WriteLine("======================================");
Console.WriteLine("Digite 1 para adicionar uma banda!");
Console.WriteLine("Digite 2 para adicionar uma música!");
Console.WriteLine("Digite 3 para adicionar um cantor!");
Console.WriteLine("Digite 4 para adicionar uma playlist!");
Console.WriteLine("Digite 5 para voltar ao ínicio!");
Console.WriteLine("======================================");
string escolha = Console.ReadLine()!;
int escolhaConvertido = int.Parse(escolha);

switch (escolhaConvertido)
{
    case 1: Console.WriteLine("Você escolheu adicionar uma banda!");
        break;
    case 2: Console.WriteLine("Você escolheu adicionar uma música!");
        break;
    case 3: Console.WriteLine("Você escolheu adicionar um cantor!");
        break;
    case 4: Console.WriteLine("Você escolheu adicionar uma playlist!");
        break;
    case 5: Console.WriteLine("Você escolheu voltar ao inicio!");
        break;
    default: Console.WriteLine("Opção invalida!");
        break;
}