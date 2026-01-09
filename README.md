# Desafio de Automação Front-end - DemoQA

Este repositório contém a automação de testes para o site [DemoQA](https://demoqa.com/), utilizando **Cypress** com a estrutura de **Page Objects** e **BDD (Cucumber)**.

## 🚀 Tecnologias
* Cypress
* JavaScript
* Gherkin (Cucumber)
* @4tw/cypress-drag-drop (Plugin para Drag and Drop)

## 📋 Cenários dos seguintes menus Testados
* **Alerts, Frame & Windows:** Validação de abertura de nova janela (Browser Windows).
* **Elements:** Validação da criação, edição e exclusão de Web tables incluindo um desafio bônus.
* **Forms:** Validação do preenchimento de formulario e upload de arquivo txt
* **Interactions:** Reordenação de lista (Sortable) com validação de ordem crescente.
* **Widgets:** Interação com Progress Bar (Start/Stop e Reset).

## 🛠️ Pré-requisitos
Antes de começar, você precisará ter instalado em sua máquina:
* **Node.js** (Versão 18 ou superior recomendada)
* **npm** (Geralmente instalado junto com o Node)
* **Git** (Para clonar o repositório)

## 🔧 Instalação e Execução
1. Clone o repositório:
   ```bash
   git clone https://github.com/amaxsilva/qa-challenge-frontend.git
   ```
   
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Abrir interface do cypress:
   ```bash
   npx cypress open
    ```

4. Rodar em modo headless (Terminal):
    ```bash
    npx cypress run
    ```