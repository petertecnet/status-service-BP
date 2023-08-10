Painel de Status de Serviços - Defensoria do Estado do Rio Grande do Sul
Este é um projeto de um painel de status de serviços externos da Defensoria do Estado do Rio Grande do Sul. O painel exibe o estado atual de diversos serviços, permitindo que os usuários monitorem a disponibilidade e a saúde desses serviços.

Instalação
Clone este repositório para o seu computador:

bash
Copy code
git clone https://github.com/petertecnet/status-service-BP.git
Navegue até o diretório do projeto:

bash
Copy code
cd status-service-BP
Instale as dependências do projeto:

Copy code
npm install
Uso
Inicie o servidor de desenvolvimento:

sql
Copy code
npm start
Abra o seu navegador e acesse http://localhost:3000 para visualizar o painel de status.

Serviços e Estados
Os serviços e seus estados são definidos no arquivo services.json. Você pode editar esse arquivo para adicionar, remover ou modificar serviços e estados.

Testes Unitários
Os testes unitários para os componentes estão localizados na pasta src/tests. Você pode executar os testes usando o seguinte comando:

bash
Copy code
npm test
Contribuição
Se você deseja contribuir para este projeto, sinta-se à vontade para criar um fork do repositório e enviar pull requests com melhorias ou correções.