bot.commands.cookieCommand.cookies =['deu-lhe um biscoito de chocolate!',
'deu-lhe um biscoito de aveia caseiro macio!',
'deu-lhe um biscoito podre e sujo. Era o último do pacote. Que nojo!',
'deu-lhe um bolinho de açúcar... O quê? Sem estrelinhas e povilho? Eu não tocaria.',
'deu-lhe um biscoito de chocolate. Oh, não, são passas. Eca!',
'deu-lhe um enorme biscoito. Quando o toca, ele se duplica num outro biscoito... estranho',
'deu-lhe um biscoito da sorte, tem escrito: "Por que você não está trabalhando?"',
'deu-lhe um biscoito da sorte, tem escrito: "Cumprimente agora a pessoa que você ama"',
'deu-lhe um biscoito da sorte, tem escrito: "Arrisque-se!"',
'deu-lhe um biscoito da sorte, tem escrito: "Saia desse computador!"',
'deu-lhe um biscoito da sorte, tem escrito: "Não esqueça de comer os vegetais"',
'deu-lhe um biscoito da sorte, tem escrito: "Se você mecher o quadril, vão te achar sexy!',
'deu-lhe um biscoito da sorte, tem escrito: "Eu te amo"',
'deu-lhe um biscoito de ouro, mas não dá pra comer... Droga!',
'deu-lhe um Oreo e um copo de leite.',
'deu-lhe um biscoito de arco-íris feito com amor :heart:',
'deu-lhe um biscoito que fio esquecido na chuva... eu não comeria.',
'te trouxe biscoitos fresquinhos... parecem deliciosos!'
];
bot.commands.cookieCommand = {
command: 'pao',
rank: 'user',
type: 'exact',
functionality: function (chat, cmd) {
if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
if (!bot.commands.executable(this.rank, chat)) return void (0);
else {

            }
        }
    };
