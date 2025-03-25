# Sistema de Cadastro de Usuários

## Descrição do Projeto

Este projeto consiste em um sistema de cadastro de usuários com três páginas principais: **Home**, **Cadastro de Usuários** e **Contato**. O sistema permite adicionar, remover e listar usuários, com validações de entrada e envio de mensagens através do formulário de contato.

## Objetivos da Refatoração

O código original apresentava diversos problemas que comprometiam a manutenção e escalabilidade do sistema, tais como:
- Uso excessivo de estilos inline e internos.
- Código duplicado.
- Layout quebrado e fora dos padrões de UI/UX.
- Falta de boas práticas de acessibilidade.
- Código JavaScript pouco modular.
- Ausência de padrões de nomenclatura.
- Validações de JavaScript não funcionais.

As melhorias foram implementadas para atender aos seguintes objetivos:
1. **Melhoria na organização do código** – Remoção de código repetido, melhoria na modularidade do JavaScript.
2. **Adesão aos princípios de Clean Code** – Aplicação de boas práticas de organização de código, legibilidade e padrões de nomenclatura.
3. **Aprimoramento do Layout** – Utilização de CSS externo, além de um layout mais responsivo e de fácil manutenção.
4. **Acessibilidade** – Melhoria nas práticas de acessibilidade, como o uso adequado de tags HTML e foco nos campos de formulário.
5. **Validações** – Implementação de validações de formulário adequadas, especialmente para o campo de email.

## Estrutura do Projeto

A estrutura do projeto foi reorganizada da seguinte maneira para melhorar a organização:

/assets
  /css
    styles.css
  /img
    (diretório vazio para futuras imagens)
  /js
    contato.js
    home.js
    script.js
  /paginas
    cadastro.html
    contato.html
    sobre.html
    index.html
README.md


## Mudanças Realizadas

#### 1. **Remoção de Estilos Inline e Internos**
   - **Problema**: O código original possuía uma grande quantidade de estilos inline diretamente nos elementos HTML, o que dificultava a manutenção do código. Cada vez que um estilo precisasse ser alterado, seria necessário fazer modificações em múltiplos locais no código HTML, o que aumenta a probabilidade de erros e torna a aplicação difícil de escalar.
   - **Solução**: Todos os estilos foram removidos dos elementos HTML e transferidos para um arquivo CSS centralizado, o `styles.css`. Essa mudança garantiu que todos os estilos ficassem centralizados, tornando o código mais limpo e fácil de manter. Além disso, os estilos foram organizados de forma modular e reutilizável, facilitando futuras modificações e melhorias no design.

#### 2. **Modularização do JavaScript**
   - **Problema**: O código JavaScript estava muito disperso e misturado em diversos arquivos, como `script1.js`, `utilsScript.js` e outros. Além disso, havia funções duplicadas que gerenciavam a manipulação de usuários em diferentes locais do código, o que tornava a manutenção mais difícil e propensa a erros.
   - **Solução**: A lógica JavaScript foi centralizada no arquivo `script.js`. As funções de manipulação de usuários, como adicionar e remover usuários, foram agrupadas em um único arquivo. Esse processo não só eliminou a duplicação de código, mas também melhorou a legibilidade e modularidade do sistema. Além disso, funções específicas de cada página (como navegação e manipulação de formulários) foram movidas para arquivos separados, como `home.js` e `contato.js`, facilitando o gerenciamento do código.

#### 3. **Validação de Formulários**
   - **Problema**: O código original não possuía validações eficazes de entradas nos formulários, como o campo de e-mail. Isso poderia permitir a inserção de dados incorretos ou malformados, o que afetaria a experiência do usuário e a qualidade dos dados no sistema.
   - **Solução**: Implementamos uma validação robusta para o campo de e-mail utilizando expressões regulares (regex), que garantem que o formato do e-mail inserido esteja correto. Além disso, foi adicionado um feedback visual para o usuário, que exibe mensagens de sucesso quando um novo usuário é adicionado corretamente. Esse feedback ajuda a melhorar a interação com a interface e assegura que o usuário tenha uma experiência mais fluída e intuitiva.

#### 4. **Responsividade e Melhorias no Layout**
   - **Problema**: O layout original não era responsivo, ou seja, não se ajustava corretamente a diferentes tamanhos de tela, o que tornava a navegação desconfortável em dispositivos móveis ou telas menores.
   - **Solução**: Utilizamos o framework Bootstrap 5 para garantir que o layout fosse responsivo e se adaptasse adequadamente a diferentes dispositivos e tamanhos de tela. O layout foi redesenhado para ser mais acessível e intuitivo, com uma estrutura mais limpa e um design visualmente mais agradável. As melhorias também incluíram uma melhor organização dos elementos nas páginas, utilizando classes do Bootstrap para criar uma navegação e interação mais eficientes.

#### 5. **Acessibilidade**
   - **Problema**: O código original não seguiu boas práticas de acessibilidade, o que tornava a navegação e a interação com o sistema difícil para pessoas com deficiência ou para aqueles que usavam tecnologias assistivas, como leitores de tela.
   - **Solução**: Foram implementadas melhorias significativas para garantir que o sistema fosse mais acessível. Os elementos de formulário agora possuem `label` associados corretamente aos campos, o que facilita a navegação para leitores de tela. Além disso, o foco nos campos de entrada foi melhorado para garantir que os usuários possam navegar facilmente entre os campos utilizando o teclado. Isso ajuda a melhorar a experiência de uso para um público mais amplo.

#### 6. **Correções de Erros**
   - **Problema**: O código contava com erros de repetição de funções no JavaScript e partes do código que estavam mal organizadas, como no `utilsScript.js`. Isso causava confusão e dificultava a localização e correção de problemas no sistema.
   - **Solução**: O código foi reestruturado, removendo funções desnecessárias e combinando partes do código que estavam dispersas em vários arquivos. A organização foi feita de maneira modular, o que permite que o código seja facilmente mantido e ampliado. O código duplicado foi resolvido, garantindo que cada função tenha uma única responsabilidade e esteja centralizada no local adequado, melhorando a performance e a legibilidade do sistema.

## Passos para Rodar o Projeto

1. Faça o clone ou o download deste repositório.
2. Abra o arquivo `index.html` no seu navegador para acessar a página inicial.
3. Navegue pelas páginas de Cadastro, Contato e Sobre, utilizando a navegação intuitiva no cabeçalho.

## Problemas Encontrados e Justificativas para os Ajustes

#### 1. **Uso Excessivo de Estilos Inline**
   - **Problema**: Estilos inline dificultam a manutenção do código e tornam as páginas difíceis de modificar em um grande projeto.
   - **Solução**: Centralizamos todos os estilos no arquivo `styles.css`, facilitando a alteração e manutenção do design da aplicação.

#### 2. **Código Duplicado**
   - **Problema**: Funções duplicadas em arquivos diferentes tornavam o código redundante e propenso a erros.
   - **Solução**: Consolidamos as funções de manipulação de usuários no arquivo `script.js`, removendo duplicações e melhorando a modularidade.

#### 3. **Layout Quebrado e Fora dos Padrões de UI/UX**
   - **Problema**: O layout não seguia as boas práticas de UI/UX, resultando em uma interface pouco atraente e difícil de navegar.
   - **Solução**: Reestruturamos o layout com o uso do Bootstrap 5 para garantir que ele fosse responsivo e seguisse padrões modernos de design.

#### 4. **Falta de Boas Práticas de Acessibilidade**
   - **Problema**: O sistema não estava totalmente acessível para usuários com deficiência ou que utilizam tecnologias assistivas.
   - **Solução**: Implementamos boas práticas de acessibilidade, como a utilização de `label` corretamente, e melhorias na navegação com teclado e leitores de tela.

#### 5. **Código JavaScript Pouco Modular**
   - **Problema**: O código JavaScript estava espalhado em diversos arquivos e não seguia princípios de modularização, dificultando a manutenção.
   - **Solução**: A lógica foi dividida em diferentes arquivos, com cada arquivo sendo responsável por uma parte específica da aplicação, o que melhora a legibilidade e manutenção do código.

### Commits para GitFlow

1. **commit 1**: Estruturação inicial do projeto com pastas organizadas.
2. **commit 2**: Remoção de estilos inline e internos, e criação do arquivo `styles.css`.
3. **commit 3**: Modularização do JavaScript em arquivos distintos (`home.js`, `script.js`, `contato.js`).
4. **commit 4**: Implementação de validação de email e melhoria nas mensagens de sucesso/erro.
5. **commit 5**: Reorganização do layout usando o Bootstrap 5.
6. **commit 6**: Melhorias de acessibilidade, como o uso adequado de `label` e melhoria no foco dos campos.
7. **commit 7**: Correção de código duplicado no JavaScript e otimização de funções.
8. **commit 8**: Finalização e ajustes no layout para garantir responsividade.



