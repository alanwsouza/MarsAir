<h1> MarsAir </h1>

## Tecnologias Usadas

<table> 
  <tr> 
    <td> Cypress </td>
    <td> Node </td>
    <td> Ruby </td>
  </tr>
  <tr> 
    <td> ^12.13.0 </td>
    <td> 9.6.4 </td>
    <td> 2.6 </td>
  </tr>
</table>

## Como executar os testes do Cypress
1. Instalar o Node - https://nodejs.org/en/download 
2. Start NPM - usando o terminal navegue até o diretório do projeto e execute o seguinte comando: npm init --yes
3. Instalar Cypress - usando o terminal navegue até o diretório do projeto e execute o seguinte comando: npm install -D cypress
4. Start Cypress - execute o seguinte comando: npx cypress open
5. Clicar em "E2E Testing"
6. Clicar em "Starting E2E Testing in Chrome"
7. Executar as Specs desejadas


## Como executar os testes de Api
1. Instalar o Ruby - https://rubyinstaller.org/downloads/
2. Instalar o Bundler dentro do projeto - usando o terminal navegue até o diretório MarsAirlines/Api e execute o seguinte comando: gem install bundler
3. Instalar as gems - usando o terminal navegue até o diretório MarsAirlines/Api e execute o seguinte comando: bundle install
4. Executar os testes - usando o terminal navegue até o diretório MarsAirlines/Api e execute o seguinte comando: rspec -fd
