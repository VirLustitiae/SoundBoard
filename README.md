# Soundboard Político

## Descrição do Projeto
Este projeto envolve a criação de um soundboard político, uma ferramenta interativa onde os usuários podem escutar falas icônicas de figuras políticas. A aplicação conta com uma página de login, uma barra inferior para navegação, um menu lateral para acesso rápido às diferentes funcionalidades, e abas separadas dedicadas a cada político. Além disso, há uma seção no menu para contatos e outras funcionalidades, enriquecendo a experiência do usuário.

### Funcionalidades
- **Login:** Acesso restrito através de uma funcionalidade de login.
- **Navegação:** Barra inferior e menu lateral para uma navegação intuitiva.
- **Soundboards:** Abas separadas para cada político com seus respectivos áudios.
- **Contatos e Outras Features:** Uma aba dedicada para contatos e funcionalidades extras.

**Nota:** Atualmente, o projeto não suporta a adição de sons pelo usuário, mas já possui estrutura para integrações futuras como banco de dados e autenticação Google.

## Tecnologias Usadas
- **Sistema Operacional:** Arch Linux, Kernel Linux 6.8.5-1 (linux68)
- **IDE:** Visual Studio Code 1.88.1
- **Back-end:** Node.js 18.18.2
- **Front-end:** Electron 28.2.8
- **Ambiente de Desenvolvimento Android:** Android Studio Jellyfish 2023.3.1, Emulador Pixel 3a API 34, Android 14

## Estruturação do Projeto
O projeto é organizado da seguinte forma para garantir clareza e manutenção facilitada:
- **Assets:** Contém todas as mídias utilizadas.
- **Components:** Inclui todos os componentes React utilizados.
- **app.js:** Arquivo principal do aplicativo, mantido com o mínimo de código para clareza.

### Lógica de Estruturação
Adotei práticas de *clean code*, com separação clara entre as funções e componentes. Cada aba do aplicativo é um componente separado, assim como os botões do soundboard. Utilizamos a convenção Airbnb React/JSX Style Guide para nomenclaturas. A compilação do APK foi realizada usando eosbuild.

## Desafios
Um dos maiores desafios foi manter uma estrutura de código que facilitasse a expansão futura e a implementação de boas práticas de programação. A tentativa de integrar funcionalidades como Google login e a adição dinâmica de novas abas mostrou-se complexa, levando a uma decisão de simplificar o escopo inicial. Considerações sobre direitos autorais dos áudios e imagens ainda estão pendentes e precisarão ser resolvidas antes de uma possível monetização.

## Implementações Futuras
- **Integração com Banco de Dados:** Para armazenar informações do usuário e histórico de interações.
- **Google Login:** Autenticação para personalizar a experiência do usuário.
- **Monetização:** Implementação de anúncios para gerar receita.

## Como Usar
1. **Instalação:** Instale o APK no seu dispositivo Android.
2. **Login:** Abra o aplicativo e faça o login utilizando o usuário `admin` e senha `123` (atenção para as letras minúsculas).
3. **Navegação:** Utilize o menu inferior para selecionar e ouvir os sons dos políticos e o menu superior para acessar informações sobre novas funcionalidades e contatos.

## Licença
Este projeto está licenciado sob a Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License. Para ver uma cópia desta licença, visite [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/).

## Autores
- **Matheus Gonçalves Zuvanov S** - 
