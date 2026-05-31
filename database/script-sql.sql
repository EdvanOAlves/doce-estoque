CREATE DATABASE db_doce_estoque;
USE db_doce_estoque;

-- ======================
-- USUARIO
-- ======================
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20) NOT NULL,
    senha VARCHAR(100) NOT NULL
);

-- ======================
-- DOCE
-- ======================
CREATE TABLE doce (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    quantidade INT NOT NULL,

    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_vencimento DATE NOT NULL,

    data_descarte TIMESTAMP NULL,
    usuario_cadastro_id INTEGER NOT NULL,
    usuario_descarte_id INTEGER NULL,

	CONSTRAINT fk_usuario_doce_cadastro
    FOREIGN KEY (usuario_cadastro_id) REFERENCES usuario(id),
	CONSTRAINT fk_usuario_doce_descarte
    FOREIGN KEY (usuario_descarte_id) REFERENCES usuario(id)
);


