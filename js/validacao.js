// Valida um campo e exibe o feedback visual correspondente
export function validarCampo(campo) {
    let mensagem = campo.parentElement.querySelector(".mensagem-erro");

    if (!mensagem) {
        mensagem = document.createElement("small");
        mensagem.className = "mensagem-erro";
        campo.parentElement.appendChild(mensagem);
    }

    if (campo.validity.valid) {
        campo.classList.remove("campo-invalido");
        campo.classList.add("campo-valido");
        mensagem.textContent = "";
    } else {
        campo.classList.remove("campo-valido");
        campo.classList.add("campo-invalido");

        if (campo.validity.valueMissing) {
            mensagem.textContent = "Este campo é obrigatório.";
        } else if (campo.validity.typeMismatch) {
            mensagem.textContent = "Digite uma informação válida.";
        } else if (campo.validity.patternMismatch) {
            mensagem.textContent = "Preencha no formato solicitado.";
        } else if (campo.validity.tooShort) {
            mensagem.textContent = "A informação está muito curta.";
        } else {
            mensagem.textContent = "Verifique este campo.";
        }
    }
}

// Verifica todos os campos antes de permitir o salvamento
export function validarFormulario(formulario) {
    const campos = formulario.querySelectorAll("input, select");
    let formularioValido = true;

    campos.forEach((campo) => {
        validarCampo(campo);

        if (!campo.validity.valid) {
            formularioValido = false;
        }
    });

    return formularioValido;
}