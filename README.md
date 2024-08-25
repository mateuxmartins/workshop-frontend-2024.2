## Projeto site com api do valorant - MATEUS MARTINS

- Funcionamento

    o website recebe todas as informações através de uma api usando axios no componente AgentesLists
    logo após o conteúdo é passado para uma variavel local e exibido na tela através do .map
    
- Bugs, Erros etc

    A api apresentou erro no personagem index 9, o mesmo encontra-se duplicado e a duplicação deste index não possui
    a variável role definida, está como null. devido a isto foi adicionado um if durante o map
"# workshop-frontend-2024.2" 
