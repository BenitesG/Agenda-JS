import validator from 'validator';

export default class FormValidator {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        if (!this.form) return;
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.validateOnSubmit(e);
        });

        // Configura a validação em tempo real apenas para o formulário de cadastro
        if (this.form.classList.contains('form-cadastro')) {
            const passwordInput = this.form.querySelector('input[name="password"]');
            if (passwordInput) {
                passwordInput.addEventListener('input', () => this.validatePasswordRealtime(passwordInput));
            }
        }
    }

    // Validação que acontece no momento do envio (SUBMIT)
    validateOnSubmit(e) {
        const formElement = e.target;
        const emailInput = formElement.querySelector('input[name="email"]');
        const phoneInput = formElement.querySelector('input[name="telefone"]');
        const passwordInput = formElement.querySelector('input[name="password"]');
        let error = false;

        // Validação do Telefone (se o campo existir)
        if (phoneInput && phoneInput.value.length > 0) {
            const phoneNumber = phoneInput.value;
            const phoneRegex = /^\(?([1-9]{2})\)? ?(?:(9\d{4})|(\d{4}))-?(\d{4})$/;


            if (!phoneRegex.test(phoneNumber)) {
            alert('Número de telefone inválido. Use o formato (XX) 9XXXX-XXXX ou (XX) XXXX-XXXX.');
            error = true;
            }
        }

        // Validação do E-mail
        if (emailInput && !validator.isEmail(emailInput.value.toLowerCase())) {
            alert('E-mail inválido.');
            error = true;
        }

        // Validação da Senha (regras diferentes para cada formulário)
        if (passwordInput) {
            if (formElement.classList.contains('form-cadastro')) {
                const password = passwordInput.value;
                if (passwordInput.value.length < 3) { 
                    alert('A senha precisa ter pelo menos 3 caracteres.');
                    error = true;
                }

                if (!/[A-Z]/.test(password)) {
                    alert('A senha precisa ter pelo menos uma letra maiúscula.');
                    error = true;
                }

                if (!/[0-9]/.test(password)) {
                    alert('A senha precisa ter pelo menos um número.');
                    error = true;
                }

                if (!/[\W_]/.test(password)) {
                    alert('A senha precisa ter pelo menos um caractere especial.');
                    error = true;
                }
                } else {
                // Regra simples para o login
                if (passwordInput.value.length === 0) {
                    alert('O campo de senha não pode estar vazio.');
                    error = true;
                }
            }
        }

        // Se não houver erros, envia o formulário
        if (!error) {
            formElement.submit();
        }
    }

    // Validação da senha
    validatePasswordRealtime(passwordInput) {
        const password = passwordInput.value;
        
        // Elementos de feedback visual
        const rules = {
            length: document.getElementById('length'),
            uppercase: document.getElementById('uppercase'),
            number: document.getElementById('number'),
            special: document.getElementById('special'),
        };

        // Função auxiliar para atualizar a UI
        const updateRuleUI = (element, isValid) => {
            if (element) { 
                element.className = isValid ? 'valid' : 'invalid';
            }
        };

        // Aplica a validação para cada regra
        updateRuleUI(rules.length, password.length >= 3);
        updateRuleUI(rules.uppercase, /[A-Z]/.test(password));
        updateRuleUI(rules.number, /[0-9]/.test(password));
        updateRuleUI(rules.special, /[\W_]/.test(password));
    }
}