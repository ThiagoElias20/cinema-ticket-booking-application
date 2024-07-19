USE api_sessoes;

-- Criando o banco de dados

CREATE TABLE filmes (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE salas (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    num_sala INT NOT NULL,
    tipo_sala VARCHAR(5) NOT NULL 
);

CREATE TABLE cinemas (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    endereco VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE sessoes (
    id_sessao INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    filme_id INT NOT NULL,
    sala_id INT NOT NULL,
    cinema_id INT NOT NULL,
    tipo_audio VARCHAR(10) NOT NULL,
    formato_exibicao VARCHAR(2) NOT NULL,
    dia DATE NOT NULL,
    horario TIME NOT NULL,
    data_criacao DATETIME DEFAULT NOW(),
    CONSTRAINT fk_filmes_id FOREIGN KEY (filme_id) REFERENCES filmes(id),
    CONSTRAINT fk_sala_id FOREIGN KEY (sala_id) REFERENCES salas(id),
    CONSTRAINT fk_cinema_id FOREIGN KEY (cinema_id) REFERENCES cinemas(id)
);

-- Inserindo dados

INSERT INTO filmes (titulo)
    VALUES ("Divertida Mente 2"),
    ("Deadpool & Wolverine"),
    ("A Grande Fuga"),
    ("MaXXXine"),
    ("Testamento"),
    ("Coraline 15º Aniversário"),
    ("Orlando, Minha Biografia Política"),
    ("Entrevista Com O Demônio"),
    ("Blackpink World Tour [Born Pink] In Cinemas"),
    ("Um Lugar Silencioso: Dia Um"),
    ("Tô De Graça - O Filme"),
    ("Bad Boys: Até O Fim"),
    ("Meu Malvado Favorito 4"),
    ("Clube Dos Vândalos"),
    ("Ainda Temos O Amanhã");

INSERT INTO salas (num_sala, tipo_sala)
    VALUES (1, "Padrão"),
    (2, "Padrão"),
    (3, "Padrão"),
    (4, "Padrão"),
    (5, "Padrão"),
    (6, "Imax"),
    (7, "Imax"),
    (8, "VIP"),
    (9, "VIP"),
    (10, "VIP");

INSERT INTO cinemas (nome, endereco)
    VALUES ("UCI Kinoplex Iguatemi", "Avenida Washington Soares 85 - Edson Queiroz 60811-340 Fortaleza"),
    ("Cinépolis RioMar Fortaleza", "Rua Desembargador Lauro Nogueira 1355 Papicu 60175-055 Fortaleza"),
    ("UCI Shopping Parangaba", "Rua Germano Franck, 300 - Parangaba, Fortaleza - CE 60740-020 Fortaleza"),
    ("Kinoplex North Shopping", "Avenida Bezerra Menezes 2450 - A.l.350/355 - Sao Gerardo 60325-002 Fortaleza"),
    ("Cinépolis RioMar Kennedy", "Av. Sargento Herminio Sampaio 3100 Presidente Kennedy 60355-512 Fortaleza"),
    ("Centerplex Via Sul Shopping", "Avenida Washington Soares 4335 - Sapiranga 60833-005 Fortalezamax"),
    ("Cinépolis North Shopping Jóquei", "Av. Lineu Machado 419 Jóquei Clube 60520-102 Fortaleza"),
    ("Cine Benfica", "Avenida Carapinima 2220 - Benfica 60015-290 Fortaleza"),
    ("Cine do Dragão", "Rua Dragão do Mar 81 - Praia de Iracema 60060-390 Fortaleza"),
    ("Cineteatro São Luiz Fortaleza", "Rua Major Facundo, 500, Centro, Fortaleza - CE 60025-100 Fortaleza");


