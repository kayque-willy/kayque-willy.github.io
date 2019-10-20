-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 08-Ago-2019 às 02:36
-- Versão do servidor: 5.7.23
-- versão do PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pesquisa`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `answer`
--

DROP TABLE IF EXISTS `answer`;
CREATE TABLE IF NOT EXISTS `answer` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `answer` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_at` text,
  `is_completed` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `answer_neighborhood`
--

DROP TABLE IF EXISTS `answer_neighborhood`;
CREATE TABLE IF NOT EXISTS `answer_neighborhood` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `neighborhood_id` int(11) NOT NULL,
  `created_at` text,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`,`neighborhood_id`),
  KEY `neighborhood_id` (`neighborhood_id`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `app_city_plan`
--

DROP TABLE IF EXISTS `app_city_plan`;
CREATE TABLE IF NOT EXISTS `app_city_plan` (
  `city_id` int(11) NOT NULL,
  `plan_id` int(11) NOT NULL,
  `is_rural_zone` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`city_id`,`plan_id`),
  KEY `plan_id` (`plan_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `city`
--

DROP TABLE IF EXISTS `city`;
CREATE TABLE IF NOT EXISTS `city` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `city`
--

INSERT INTO `city` (`id`, `name`) VALUES
(1, 'Cambuí'),
(2, 'Pouso Alegre'),
(3, 'Camanducaia'),
(4, 'Paraisópolis'),
(5, 'Extrema'),
(6, 'Borda da Mata'),
(7, 'Joanópolis'),
(8, 'Santa Rita do Sapucaí'),
(9, 'Congonhal'),
(10, 'Bueno Brandão'),
(11, 'São Gonçalo do Sapucaí'),
(12, 'Itajubá'),
(13, 'Cachoeira de Minas'),
(14, 'Piranguinho'),
(15, 'São José do Alegre'),
(16, 'Pedralva'),
(17, 'Natércia'),
(18, 'Careaçu'),
(19, 'São Sebastião da Bela Vista'),
(20, 'Santana da Vargem'),
(21, 'Carmo da Cachoeira');

-- --------------------------------------------------------

--
-- Estrutura da tabela `metric`
--

DROP TABLE IF EXISTS `metric`;
CREATE TABLE IF NOT EXISTS `metric` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `metric`
--

INSERT INTO `metric` (`id`, `name`) VALUES
(1, 'GUT'),
(2, 'ESCALA DE LIKERT');

-- --------------------------------------------------------

--
-- Estrutura da tabela `metric_item`
--

DROP TABLE IF EXISTS `metric_item`;
CREATE TABLE IF NOT EXISTS `metric_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `metric_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metric_id` (`metric_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `metric_item`
--

INSERT INTO `metric_item` (`id`, `name`, `metric_id`) VALUES
(1, 'Gravidade', 1),
(2, 'Urgência', 1),
(3, 'Tendência', 1),
(4, 'Escala Qualitativa', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `metric_value`
--

DROP TABLE IF EXISTS `metric_value`;
CREATE TABLE IF NOT EXISTS `metric_value` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `value` int(11) NOT NULL,
  `icon` text NOT NULL,
  `icon_selected` text NOT NULL,
  `metric_item_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `metric_item_id` (`metric_item_id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `metric_value`
--

INSERT INTO `metric_value` (`id`, `name`, `value`, `icon`, `icon_selected`, `metric_item_id`) VALUES
(1, 'Extremamente grave', 5, '5.png', '5-selected.png', 1),
(2, 'Muito grave', 4, '4.png', '4-selected.png', 1),
(3, 'Grave', 3, '3.png', '3-selected.png', 1),
(4, 'Pouco grave', 2, '2.png', '2-selected.png', 1),
(5, 'Sem gravidade', 1, '1.png', '1-selected.png', 1),
(6, 'Precisa de ação imediata', 5, '5.png', '5-selected.png', 2),
(7, 'É urgente', 4, '4.png', '4-selected.png', 2),
(8, 'Assim que possível', 3, '3.png', '3-selected.png', 2),
(9, 'Pouco urgente', 2, '2.png', '2-selected.png', 2),
(10, 'Pode esperar', 1, '1.png', '1-selected.png', 2),
(11, 'Irá piorar rapidamente', 5, '5.png', '5-selected.png', 3),
(12, 'Irá piorar em pouco tempo', 4, '4.png', '4-selected.png', 3),
(13, 'Irá piorar', 3, '3.png', '3-selected.png', 3),
(14, 'Irá piorar a longo prazo', 2, '2.png', '2-selected.png', 3),
(15, 'Não irá mudar', 1, '1.png', '1-selected.png', 3),
(16, 'Péssimo', 1, '5.png', '5-selected.png', 4),
(17, 'Ruim', 2, '4.png', '4-selected.png', 4),
(18, 'Regular', 3, '3.png', '3-selected.png', 4),
(19, 'Bom', 4, '2.png', '2-selected.png', 4),
(20, 'Ótimo', 5, '1.png', '1-selected.png', 4);

-- --------------------------------------------------------

--
-- Estrutura da tabela `neighborhood`
--

DROP TABLE IF EXISTS `neighborhood`;
CREATE TABLE IF NOT EXISTS `neighborhood` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `city_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`)
) ENGINE=MyISAM AUTO_INCREMENT=247 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `neighborhood`
--

INSERT INTO `neighborhood` (`id`, `name`, `city_id`) VALUES
(1, 'Água Branca', 1),
(2, 'Água Comprida', 1),
(3, 'Anhumas', 1),
(4, 'Bairro Cachoeirinha', 1),
(5, 'Bairro dos Vazes', 1),
(6, 'Bairro Jd. Paulo Lopes', 1),
(7, 'Bairro Portal das Pedras', 1),
(8, 'Bairro Ramos', 1),
(9, 'Bairro Santa Edwiges', 1),
(10, 'Bairro Santo Antônio', 1),
(11, 'Bairro Santo Expedito', 1),
(12, 'Bairro Taquaruçu', 1),
(13, 'Bairro Vale das Montanhas', 1),
(14, 'Bom Sucesso', 1),
(15, 'Braço das Antas', 1),
(16, 'Cabral', 1),
(17, 'Centro', 1),
(18, 'Colinas do Itaim', 1),
(19, 'Fonsecas', 1),
(20, 'Jd. Américo', 1),
(21, 'Jd. Bela Vista', 1),
(22, 'Jd. Carvalho', 1),
(23, 'Jd. Edith Lopes', 1),
(24, 'Jd. São Benedito', 1),
(25, 'Jd. Vale das Águas', 1),
(26, 'Jd. Vale do Sol', 1),
(27, 'Lambert', 1),
(28, 'Lopes', 1),
(29, 'Meia Légua', 1),
(30, 'Nossa Sra. Da Aparecida', 1),
(31, 'Nunes de Baixo', 1),
(32, 'Nunes', 1),
(33, 'Pessegueiro', 1),
(34, 'Portal Monte Verde', 1),
(35, 'Portão', 1),
(36, 'Recanto Paraíso', 1),
(37, 'Rio do Peixe', 1),
(38, 'São Miguel', 1),
(39, 'Vale das Rosas', 1),
(40, 'Vale do Itaim', 1),
(41, 'Vargem dos Ilheus', 1),
(42, 'Vazes', 1),
(43, 'Vila Glória', 1),
(44, 'Vila Mariana', 1),
(45, 'Vila Santa Cruz', 1),
(46, 'Vila São Judas Tadeu', 1),
(47, 'São Camilo', 2),
(48, 'São Geraldo', 2),
(49, 'Santa Lúcia', 2),
(50, 'Guanabara', 2),
(51, 'Nova Pouso Alegre', 2),
(52, 'Santa Elisa', 2),
(53, 'Centro', 2),
(54, 'Bom Jesus', 2),
(55, 'São José', 2),
(56, 'Santa Cruz', 2),
(57, 'Jardim Primavera', 2),
(58, 'Santa Luzia', 2),
(59, 'Aristeu Rios', 2),
(60, 'Cidade Foch', 2),
(61, 'Industrial', 2),
(62, 'Recanto dos Rios', 2),
(63, 'Xangrilá', 2),
(64, 'Árvore Grande', 2),
(65, 'Paraíso', 2),
(66, 'Jardim Aureliano', 2),
(67, 'São Carlos', 2),
(68, 'Cidade Vergani', 2),
(69, 'Jardim Califórnia', 2),
(70, 'Jardim Noronha', 2),
(71, 'Jardim Olímpico', 2),
(72, 'Jardim Inconfidentes', 2),
(73, 'Bela Vista', 2),
(74, 'Jardim Jatobá', 2),
(75, 'Conj. Chapadão II', 2),
(76, 'Res. Morumbi', 2),
(77, 'Colina Verde', 2),
(78, 'Carramachão', 2),
(79, 'Jardim Aeroporto', 2),
(80, 'Santa Filomena', 2),
(81, 'Jardim América', 2),
(82, 'Jardim Europa', 2),
(83, 'Vila São Geraldo', 2),
(84, 'Boa Vista', 2),
(85, 'Santo Antônio', 2),
(86, 'Medicina', 2),
(87, 'João Paulo II', 2),
(88, 'Saúde', 2),
(89, 'Jardim Esplanada', 2),
(90, 'Nossa Sra. Do Pilar II', 2),
(91, 'Jardim Altaville', 2),
(92, 'Pousada dos Campos', 2),
(93, 'Santa Dorotéia', 2),
(94, 'Santa Ivo', 2),
(95, 'Nossa Sra. Aparecida', 2),
(96, 'Santa Cecília', 2),
(97, 'Fátima', 2),
(98, 'Fátima III', 2),
(99, 'Fátima II', 2),
(100, 'Faisqueira', 2),
(101, 'Lot. São Pedro', 2),
(102, 'Monte Azul', 2),
(103, 'Bella Itália', 2),
(104, 'Vila Nossa Sra. Aparecida', 2),
(105, 'Ribeirão das Mortes', 2),
(106, 'Santa Edwirges', 2),
(107, 'Fernandes', 2),
(108, 'Jardim Amazonas', 2),
(109, 'São João', 2),
(110, 'Vista Alegre', 2),
(111, 'Jardim São João', 2),
(112, 'Nossa Sra. Guadalupe', 2),
(113, 'Belo Horizonte', 2),
(114, 'Pres. Juscelino', 2),
(115, 'Jardim Iara', 2),
(116, 'Cantagalo', 2),
(117, 'Jardim Fernandão', 2),
(118, 'Jardim São Fernando', 2),
(119, 'Jardim Caiçara', 2),
(120, 'Cidade Jardim', 2),
(121, 'Portal do Ipiranga', 2),
(122, 'Distrito Industrial', 2),
(123, 'Colina Bandeirantes', 2),
(124, 'Morado do Sol', 2),
(125, 'Res. Solar do Quinta', 2),
(126, 'Jardim Canadá', 2),
(127, 'Algodão', 2),
(128, 'Cervo', 2),
(129, 'São José do Pantano', 2),
(130, 'Congonhal', 1),
(131, 'Nunes de Cima', 1),
(132, 'Vargem do Paiol', 1),
(133, 'Furnas', 1),
(134, 'Campestre', 1),
(135, 'Itaim', 1),
(136, 'Roseta', 1),
(137, 'Criciúma', 1),
(138, 'Serra Morena', 2),
(139, 'Santa Rita I', 2),
(140, 'Santa Rita II', 2),
(141, 'Santa Branca', 2),
(142, 'Outros', 1),
(143, 'Outros', 2),
(144, 'Centro', 8),
(145, 'Outros', 8),
(146, 'São Benedito', 8),
(147, 'São Roque', 8),
(148, 'São Roque 2', 8),
(149, 'C.H. Dr. Luiz Rennó Mendes', 8),
(150, 'Recanto das Margaridas', 8),
(151, 'C.H. Pedro Sancho Vilela', 8),
(152, 'Santa Felicidade', 8),
(153, 'São João', 8),
(154, 'Bela Vista', 8),
(155, 'Centro Empresarial Paulo F Toledo', 8),
(156, 'Arco-Íris', 8),
(157, 'Anchieta', 8),
(158, 'Novo Horizonte', 8),
(159, 'Vila Operária', 8),
(160, 'Joaquim Gomes', 8),
(161, 'Boa Vista', 8),
(162, 'Boa Vista 2', 8),
(163, 'Brasília', 8),
(164, 'Loteamento do Vale', 8),
(165, 'Loteamento do Vale II', 8),
(166, 'São José', 8),
(167, 'Genoveva da Fonseca', 8),
(168, 'Jardim das Palmeiras', 8),
(169, 'Regina Maria', 8),
(170, 'São Pedro', 8),
(171, 'Bruno Matragrano', 8),
(172, 'Fernandes', 8),
(173, 'Jardim Beira Rio', 8),
(174, 'Tonico Vicente', 8),
(175, 'Maristela', 8),
(176, 'Casa de Vitor', 8),
(177, 'Ozório Machado', 8),
(178, 'Maria Silvério', 8),
(179, 'Primavera', 8),
(180, 'Antônio Gonçalves Teixeira', 8),
(181, 'Pedreira', 8),
(182, 'Loteamento Paulo Borsato', 8),
(183, 'Família Andrade', 8),
(184, 'Pôr do Sol', 8),
(185, 'Santa Rita', 8),
(186, 'Santa Rita 2', 8),
(187, 'São José', 8),
(188, 'Portal do Sol', 8),
(189, 'Portal da Torres', 8),
(190, 'Vila das Fontes', 8),
(191, 'Santa Isabel', 8),
(192, 'Fortaleza', 8),
(193, 'Morada do Sol', 8),
(194, 'Jardim dos Estados', 8),
(195, 'Viana', 8),
(196, 'Santana', 8),
(197, 'Santana 2', 8),
(198, 'Rua Nova', 8),
(199, 'Fátima', 8),
(200, 'Delcides Telles', 8),
(201, 'Eletrônica', 8),
(202, 'Inatel', 8),
(203, 'Monte Belo', 8),
(204, 'Monte Verde', 8),
(205, 'Jardim Santo Antônio', 8),
(206, 'Monte Líbano', 8),
(207, 'Jairo Grillo', 8),
(208, 'São Domingos', 20),
(209, 'São Luiz', 20),
(210, 'Padre Vitor', 20),
(211, 'Brasil', 20),
(212, 'Centro', 20),
(213, 'Bairro Nascimento', 21),
(214, 'Distrito Industrial', 21),
(215, 'Morada do Sol', 21),
(216, 'Cambuci', 21),
(217, 'São João', 21),
(218, 'Boa Vista', 21),
(219, 'Bom Retiro', 21),
(220, 'Avelar Reis', 21),
(221, 'São José Operário', 21),
(222, 'Centro', 21),
(223, 'Palmital', 21),
(224, 'Serra Rica', 21),
(225, 'Outros', 21),
(226, 'Outros', 20),
(227, 'Cajuru dos Brito', 20),
(228, 'Cajuru dos Egidios', 20),
(229, 'Mata', 20),
(230, 'Peão', 20),
(231, 'Morro Cavado', 20),
(232, 'Capitinga', 20),
(233, 'São Lourenço', 20),
(234, 'Santa Fé', 20),
(235, 'Toca', 20),
(236, 'Floresta', 20),
(237, 'Mantiqueira', 20),
(238, 'Retiro', 20),
(239, 'Macaúbas', 20),
(240, 'Furtados', 20),
(241, 'Serra', 20),
(242, 'Samambaia', 20),
(243, 'Tanque', 20),
(244, 'Fidelis', 20),
(245, 'Coimbra', 20),
(246, 'Gordura', 20);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plan`
--

DROP TABLE IF EXISTS `plan`;
CREATE TABLE IF NOT EXISTS `plan` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `city_id` int(11) DEFAULT NULL,
  `use_prioritization` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `city_id` (`city_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `plan`
--

INSERT INTO `plan` (`id`, `name`, `city_id`, `use_prioritization`) VALUES
(1, 'Plano Diretor de Cambuí', 1, 1),
(2, 'Plano Diretor de Pouso Alegre', 2, 1),
(3, 'Plano Saneamento Básico SRS', 8, 0),
(5, 'Plano Saneamento Básico Santana da Vargem', 20, 0),
(6, 'Plano Saneamento Básico Carmo da Cachoeira', 21, 0);

-- --------------------------------------------------------

--
-- Estrutura da tabela `plan_questionary`
--

DROP TABLE IF EXISTS `plan_questionary`;
CREATE TABLE IF NOT EXISTS `plan_questionary` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  PRIMARY KEY (`plan_id`,`questionary_id`),
  KEY `questionary_id` (`questionary_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `plan_questionary`
--

INSERT INTO `plan_questionary` (`plan_id`, `questionary_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(2, 1),
(2, 2),
(2, 3),
(2, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 13),
(5, 9),
(5, 10),
(5, 11),
(5, 12),
(5, 13),
(6, 9),
(6, 10),
(6, 11),
(6, 12),
(6, 13);

-- --------------------------------------------------------

--
-- Estrutura da tabela `prioritization`
--

DROP TABLE IF EXISTS `prioritization`;
CREATE TABLE IF NOT EXISTS `prioritization` (
  `plan_id` int(11) NOT NULL,
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  `respondent_id` int(11) NOT NULL,
  `metric_item` int(11) NOT NULL,
  `metric_value` int(11) NOT NULL,
  `created_at` text,
  PRIMARY KEY (`plan_id`,`questionary_id`,`question_id`,`respondent_id`,`metric_item`),
  KEY `questionary_id` (`questionary_id`),
  KEY `question_id` (`question_id`),
  KEY `respondent_id` (`respondent_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `question`
--

DROP TABLE IF EXISTS `question`;
CREATE TABLE IF NOT EXISTS `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  `description` text,
  `question` text,
  `position` int(11) DEFAULT NULL,
  `context_area` text,
  `context_area_icon` text,
  `is_rural_zone` tinyint(1) DEFAULT NULL,
  `metric_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=125 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `question`
--

INSERT INTO `question` (`id`, `name`, `description`, `question`, `position`, `context_area`, `context_area_icon`, `is_rural_zone`, `metric_id`) VALUES
(1, 'Problema 1 - Segurança Pública', 'Você acha que faltam empregos na sua cidade?', 'Faltam empregos na sua cidade.', 1, 'Segurança Pública', 'security-icon.png', 0, NULL),
(2, 'Problema 1 - Segurança Pública', 'Você acha que há problemas de iluminação pública no seu bairro?', 'Há problemas de iluminação pública no seu bairro.', 2, 'Segurança Pública', 'security-icon.png', 0, NULL),
(3, 'Problema 1 - Segurança Pública', 'Você se sente inseguro no seu bairro (ocorrência de crimes, assaltos, tráfico de drogas)?', 'É inseguro o bairro.', 3, 'Segurança Pública', 'security-icon.png', 0, NULL),
(4, 'Problema 1 - Segurança Pública', 'Você acha que faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade?', 'Faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade.', 4, 'Segurança Pública', 'security-icon.png', 0, NULL),
(5, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no transporte público coletivo no seu bairro (horários, pontos de ônibus, condições do veículo)?', 'Há problemas no transporte público coletivo no seu bairro.', 1, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, NULL),
(6, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de bicicletas no seu bairro (sinalização, condição das ciclovias)?', 'Há problemas no trânsito de bicicletas no seu bairro.', 2, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, NULL),
(7, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de veículos no seu bairro (sinalização, congestionamentos)?', 'Há problemas no trânsito de veículos no seu bairro.', 3, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, NULL),
(8, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de pedestres no seu bairro (sinalização, condição das vias)?', 'Há problemas no trânsito de pedestres no seu bairro.', 4, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 0, NULL),
(9, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que as condições de moradia no seu bairro são inadequadas (casas precárias, falta de infraestrutura)?', 'As condições de moradia no seu bairro são inadequadas.', 1, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, NULL),
(10, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há construções em áreas de risco no seu bairro (margem dos rios, encostas)?', 'Há construções em áreas de risco no seu bairro.', 2, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, NULL),
(11, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há terrenos improdutivos ou abandonados no seu bairro?', 'Há terrenos improdutivos ou abandonados no seu bairro.', 3, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, NULL),
(12, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que o valor do IPTU/aluguel/compra é alto no seu bairro?', 'O valor do IPTU/aluguel/compra é alto no seu bairro.', 4, 'Uso e Ocupação do Solo', 'environment-icon.png', 0, NULL),
(13, 'Problema 4 - Saúde', 'Você acha que há problemas nas unidades básicas de saúde/postos de saúde do seu bairro (disponibilidade de médicos, medicamentos)?', 'Há problemas nas unidades básicas de saúde/postos de saúde do seu bairro.', 1, 'Saúde', 'health-icon.png', 0, NULL),
(14, 'Problema 4 - Saúde', 'Você acha que há problemas no transporte para o atendimento médico do seu bairro (ambulâncias, carros de saúde, atendimento a domicílio)?', 'Há problemas no transporte para o atendimento médico do seu bairro.', 2, 'Saúde', 'health-icon.png', 0, NULL),
(15, 'Problema 4 - Saúde', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro?', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro.', 3, 'Saúde', 'health-icon.png', 0, NULL),
(16, 'Problema 4 - Saúde', 'Você acha que faltam campanhas de combate a dengue/saúde preventiva no seu bairro?', 'Faltam campanhas de combate a dengue/saúde preventiva no seu bairro.', 4, 'Saúde', 'health-icon.png', 0, NULL),
(17, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas praças, parques e áreas verdes no seu bairro?', 'Há problemas nas praças, parques e áreas verdes no seu bairro.', 1, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, NULL),
(18, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas quadras e espaços para a prática de esportes no seu bairro?', 'Há problemas nas quadras e espaços para a prática de esportes no seu bairro.', 2, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, NULL),
(19, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro?', 'Há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro.', 3, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, NULL),
(20, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que seu bairro possui potencial turístico mal aproveitado?', 'O bairro possui potencial turístico mal aproveitado.', 4, 'Lazer, Cultura e Turismo', 'culture-icon.png', 0, NULL),
(21, 'Problema 6 - Saneamento', 'Você acha que há problemas de abastecimento de água no seu bairro (ligação à rede pública, interrupção no fornecimento)?', 'Há problemas de esgoto no seu bairro.', 1, 'Saneamento', 'water_residues-icon.png', 0, NULL),
(22, 'Problema 6 - Saneamento', 'Você acha que há problemas de esgoto no seu bairro (esgoto a céu aberto, mau cheiro, despejo incorreto)?', 'Há problemas de lixo no seu bairro.', 2, 'Saneamento', 'water_residues-icon.png', 0, NULL),
(23, 'Problema 6 - Saneamento', 'Você acha que há problemas de lixo no seu bairro (falta de coleta, deposição em local inapropriado, falta de lixeiras)?', 'Há problemas de lixo no seu bairro.', 3, 'Saneamento', 'water_residues-icon.png', 0, NULL),
(24, 'Problema 6 - Saneamento', 'Você acha que há problemas de drenagem no seu bairro (ocorrência de alagamento, entupimento de bocas de lobo)?', 'Há problemas de drenagem no seu bairro.', 4, 'Saneamento', 'water_residues-icon.png', 0, NULL),
(25, 'Problema 7 - Educação', 'Você acha que há problemas com as creches (0 a 3 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com as creches (0 a 3 anos) do seu bairro.', 1, 'Educação', 'education-icon.png', 0, NULL),
(26, 'Problema 7 - Educação', 'Você acha que há problemas com a educação infantil (4 a 5 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação infantil (4 a 5 anos) do seu bairro.', 2, 'Educação', 'education-icon.png', 0, NULL),
(27, 'Problema 7 - Educação', 'Você acha que há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro.', 3, 'Educação', 'education-icon.png', 0, NULL),
(28, 'Problema 7 - Educação', 'Você acha que há problemas o transporte escolar do seu bairro (disponibilidade de veículos, horários)?', 'Há problemas o transporte escolar do seu bairro.', 4, 'Educação', 'education-icon.png', 0, NULL),
(29, 'Problema 8 - Meio Ambiente', 'Você acha que faltam árvores no seu bairro?', 'Faltam árvores no seu bairro.', 1, 'Meio Ambiente', 'water_residues-icon.png', 0, NULL),
(30, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com ruídos ou com barulho excessivo no seu bairro (comércio, veículos)?', 'Há incomodo com ruídos ou com barulho excessivo no seu bairro.', 2, 'Meio Ambiente', 'water_residues-icon.png', 0, NULL),
(31, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com odores no seu bairro (fumaça de veículos, fábricas, mau cheiro)?', 'Há incomodo com odores no seu bairro.', 3, 'Meio Ambiente', 'water_residues-icon.png', 0, NULL),
(32, 'Problema 8 - Meio Ambiente', 'Você acha que há problemas com zoonoses e animais abandonados no seu bairro (dengue, cães, cavalos, baratas, ratos, escorpiões)?', 'Há problemas com zoonoses e animais abandonados no seu bairro.', 4, 'Meio Ambiente', 'water_residues-icon.png', 0, NULL),
(33, 'Problema 1 - Segurança Pública', 'Você acha que faltam empregos na sua cidade?', 'Faltam empregos na sua cidade.', 1, 'Segurança Pública', 'security-icon.png', 1, NULL),
(34, 'Problema 1 - Segurança Pública', 'Você acha que há problemas de iluminação pública no seu bairro?', 'Há problemas de iluminação pública no seu bairro.', 2, 'Segurança Pública', 'security-icon.png', 1, NULL),
(35, 'Problema 1 - Segurança Pública', 'Você se sente inseguro no seu bairro (ocorrência de crimes, assaltos, tráfico de drogas)?', 'É inseguro o bairro.', 3, 'Segurança Pública', 'security-icon.png', 1, NULL),
(36, 'Problema 1 - Segurança Pública', 'Você acha que faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade?', 'Faltam centros de assistência para jovens/idosos/dependentes químicos na sua cidade.', 4, 'Segurança Pública', 'security-icon.png', 1, NULL),
(37, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no transporte público coletivo no seu bairro (horários, pontos de ônibus, condições do veículo)?', 'Há problemas no transporte público coletivo no seu bairro.', 1, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, NULL),
(38, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de bicicletas no seu bairro (sinalização, condição das ciclovias)?', 'Há problemas no trânsito de bicicletas no seu bairro.', 2, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, NULL),
(39, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de veículos no seu bairro (sinalização, congestionamentos)?', 'Há problemas no trânsito de veículos no seu bairro.', 3, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, NULL),
(40, 'Problema 2 - Mobilidade e Transporte', 'Você acha que há problemas no trânsito de pedestres no seu bairro (sinalização, condição das vias)?', 'Há problemas no trânsito de pedestres no seu bairro.', 4, 'Mobilidade e Transporte', 'urban_traffic-icon.png', 1, NULL),
(41, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que as condições de moradia no seu bairro são inadequadas (casas precárias, falta de infraestrutura)?', 'As condições de moradia no seu bairro são inadequadas.', 1, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, NULL),
(42, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há construções em áreas de risco no seu bairro (margem dos rios, encostas)?', 'Há construções em áreas de risco no seu bairro.', 2, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, NULL),
(43, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que há terrenos improdutivos ou abandonados no seu bairro?', 'Há terrenos improdutivos ou abandonados no seu bairro.', 3, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, NULL),
(44, 'Problema 3 - Uso e Ocupação do Solo', 'Você acha que o valor do IPTU/aluguel/compra é alto no seu bairro?', 'O valor do IPTU/aluguel/compra é alto no seu bairro.', 4, 'Uso e Ocupação do Solo', 'environment-icon.png', 1, NULL),
(45, 'Problema 4 - Saúde', 'Você acha que há problemas nas unidades básicas de saúde/postos de saúde do seu bairro (disponibilidade de médicos, medicamentos)?', 'Há problemas nas unidades básicas de saúde/postos de saúde do seu bairro.', 1, 'Saúde', 'health-icon.png', 1, NULL),
(46, 'Problema 4 - Saúde', 'Você acha que há problemas no transporte para o atendimento médico do seu bairro (ambulâncias, carros de saúde, atendimento a domicílio)?', 'Há problemas no transporte para o atendimento médico do seu bairro.', 2, 'Saúde', 'health-icon.png', 1, NULL),
(47, 'Problema 4 - Saúde', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro?', 'Você tem que esperar por muito tempo para marcar consulta ou para ser atendido nas unidades de saúde pública do seu bairro.', 3, 'Saúde', 'health-icon.png', 1, NULL),
(48, 'Problema 4 - Saúde', 'Você acha que faltam campanhas de combate a dengue/saúde preventiva no seu bairro?', 'Faltam campanhas de combate a dengue/saúde preventiva no seu bairro.', 4, 'Saúde', 'health-icon.png', 1, NULL),
(49, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas praças, parques e áreas verdes no seu bairro?', 'Há problemas nas praças, parques e áreas verdes no seu bairro.', 1, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, NULL),
(50, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas nas quadras e espaços para a prática de esportes no seu bairro?', 'Há problemas nas quadras e espaços para a prática de esportes no seu bairro.', 2, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, NULL),
(51, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro?', 'Há problemas ou dificuldades na realização de eventos culturais/artísticos/ religiosos no seu bairro.', 3, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, NULL),
(52, 'Problema 5 - Lazer, Cultura e Turismo', 'Você acha que seu bairro possui potencial turístico mal aproveitado?', 'O bairro possui potencial turístico mal aproveitado.', 4, 'Lazer, Cultura e Turismo', 'culture-icon.png', 1, NULL),
(53, 'Problema 6 - Saneamento', 'Você acha que há problemas de abastecimento de água no seu bairro (ligação à rede pública, interrupção no fornecimento)?', 'Há problemas de esgoto no seu bairro.', 1, 'Saneamento', 'water_residues-icon.png', 1, NULL),
(54, 'Problema 6 - Saneamento', 'Você acha que há problemas de esgoto no seu bairro (esgoto a céu aberto, mau cheiro, despejo incorreto)?', 'Há problemas de lixo no seu bairro.', 2, 'Saneamento', 'water_residues-icon.png', 1, NULL),
(55, 'Problema 6 - Saneamento', 'Você acha que há problemas de lixo no seu bairro (falta de coleta, deposição em local inapropriado, falta de lixeiras)?', 'Há problemas de lixo no seu bairro.', 3, 'Saneamento', 'water_residues-icon.png', 1, NULL),
(56, 'Problema 6 - Saneamento', 'Você acha que há problemas de drenagem no seu bairro (ocorrência de alagamento, entupimento de bocas de lobo)?', 'Há problemas de drenagem no seu bairro.', 4, 'Saneamento', 'water_residues-icon.png', 1, NULL),
(57, 'Problema 7 - Educação', 'Você acha que há problemas com as creches (0 a 3 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com as creches (0 a 3 anos) do seu bairro.', 1, 'Educação', 'education-icon.png', 1, NULL),
(58, 'Problema 7 - Educação', 'Você acha que há problemas com a educação infantil (4 a 5 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação infantil (4 a 5 anos) do seu bairro.', 2, 'Educação', 'education-icon.png', 1, NULL),
(59, 'Problema 7 - Educação', 'Você acha que há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro (infraestrutura, recursos humanos e materiais)?', 'Há problemas com a educação fundamental/média (6 a 18 anos) do seu bairro.', 3, 'Educação', 'education-icon.png', 1, NULL),
(60, 'Problema 7 - Educação', 'Você acha que há problemas o transporte escolar do seu bairro (disponibilidade de veículos, horários)?', 'Há problemas o transporte escolar do seu bairro.', 4, 'Educação', 'education-icon.png', 1, NULL),
(61, 'Problema 8 - Meio Ambiente', 'Você acha que faltam árvores no seu bairro?', 'Faltam árvores no seu bairro.', 1, 'Meio Ambiente', 'water_residues-icon.png', 1, NULL),
(62, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com ruídos ou com barulho excessivo no seu bairro (comércio, veículos)?', 'Há incomodo com ruídos ou com barulho excessivo no seu bairro.', 2, 'Meio Ambiente', 'water_residues-icon.png', 1, NULL),
(63, 'Problema 8 - Meio Ambiente', 'Você se sente incomodado com odores no seu bairro (fumaça de veículos, fábricas, mau cheiro)?', 'Há incomodo com odores no seu bairro.', 3, 'Meio Ambiente', 'water_residues-icon.png', 1, NULL),
(64, 'Problema 8 - Meio Ambiente', 'Você acha que há problemas com zoonoses e animais abandonados no seu bairro (dengue, cães, cavalos, baratas, ratos, escorpiões)?', 'Há problemas com zoonoses e animais abandonados no seu bairro.', 4, 'Meio Ambiente', 'water_residues-icon.png', 1, NULL),
(65, 'Problema 1 - Abastecimento de água', 'Falta água encanada da COPASA em sua casa?', 'Cobertura insuficiente da rede de distribuição de água potável', 1, 'Abastecimento de água', 'water_residues-icon.png', 0, NULL),
(66, 'Problema 1 - Abastecimento de água', 'A água na sua casa apresenta sabor ou cheiro desagradável?', 'Má qualidade da água distribuída', 2, 'Abastecimento de água', 'water_residues-icon.png', 0, NULL),
(67, 'Problema 1 - Abastecimento de água', 'Na sua casa a água apresenta alguma cor?', 'Má qualidade da água distribuída', 3, 'Abastecimento de água', 'water_residues-icon.png', 0, NULL),
(68, 'Problema 1 - Abastecimento de água', 'Você costuma ficar sem água em casa por certos períodos durante o dia?', 'Interrupção de funcionamento do sistema', 4, 'Abastecimento de água', 'water_residues-icon.png', 0, NULL),
(69, 'Problema 1 - Abastecimento de água', 'Você percebe saída de ar quando você abre as torneiras da sua casa?', 'Ar na tubulação (super faturamento da copasa)', 5, 'Abastecimento de água', 'water_residues-icon.png', 0, NULL),
(70, 'Problema 2 - Esgotamento Sanitário', 'O esgoto que sai da sua casa vai direto para o rio?', 'Cobertura insuficiente da rede de esgotamento sanitário', 1, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, NULL),
(71, 'Problema 2 - Esgotamento Sanitário', 'Tem esgoto a céu aberto no seu bairro?', 'Esgoto a céu aberto', 2, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, NULL),
(72, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro desagradável nas proximidades da Estação de Tratamento de Esgoto?', 'Odor da ETE', 3, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, NULL),
(73, 'Problema 2 - Esgotamento Sanitário', 'Volta esgoto para a sua casa ou nas ruas no seu bairro?', 'Entupimento da rede coletora de esgoto', 4, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, NULL),
(74, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro ruim saindo dos bueiros no seu bairro?', 'Ligações clandestinas na rede de água pluvial', 5, 'Esgotamento Sanitário', 'water_residues-icon.png', 0, NULL),
(75, 'Problema 3 - Drenagem Urbana', 'Faltam bueiros nas ruas do seu bairro?', 'Ausência de bocas de lobo', 1, 'Drenagem Urbana', 'water_residues-icon.png', 0, NULL),
(76, 'Problema 3 - Drenagem Urbana', 'Há acumulo de lixo ou entupimento dos bueiros no seu bairro?', 'Acumulo de lixo com entupimento das bocas de lobo', 2, 'Drenagem Urbana', 'water_residues-icon.png', 0, NULL),
(77, 'Problema 3 - Drenagem Urbana', 'Quando chove, acumula água nas ruas do seu bairro?', 'Alagamentos constantes', 3, 'Drenagem Urbana', 'water_residues-icon.png', 0, NULL),
(78, 'Problema 3 - Drenagem Urbana', 'Os rios transbordam em épocas de chuva no seu bairro?', 'Enchentes frequentes', 4, 'Drenagem Urbana', 'water_residues-icon.png', 0, NULL),
(79, 'Problema 3 - Drenagem Urbana', 'Há falta de árvores nas margens dos rios do seu bairro?', 'Ausência de vegetação nas margens dos rios', 5, 'Drenagem Urbana', 'water_residues-icon.png', 0, NULL),
(80, 'Problema 4 - Resíduos Sólidos', 'Falta coleta de lixo no seu bairro?', 'Cobertura insuficiente da coleta de resíduos sólidos', 1, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(81, 'Problema 4 - Resíduos Sólidos', 'Você acha que o caminhão de lixo deveria passar mais vezes na semana na sua rua?', 'Frequência insuficiente da coleta de resíduos sólidos', 2, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(82, 'Problema 4 - Resíduos Sólidos', 'Falta coleta seletiva (recicláveis) no seu bairro?', 'Ausência de coleta seletiva', 3, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(83, 'Problema 4 - Resíduos Sólidos', 'Tem acúmulo de móveis e eletrodomésticos velhos nas ruas do seu bairro?', 'Acúmulo de resíduos como eletrodoméstico, móveis, etc..', 4, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(84, 'Problema 4 - Resíduos Sólidos', 'Há  presença de lixo nos rios no seu bairro?', 'Poluição de corpos d´água por resíduos sólidos', 5, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(85, 'Problema 4 - Resíduos Sólidos', 'Há descarte de lixo em terrenos baldios do seu bairro?', 'Descarte de lixo em terrenos baldios', 6, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(86, 'Problema 4 - Resíduos Sólidos', 'Falta limpeza das ruas e espaços públicos (praças, quadras) no seu bairro?', 'Limpeza urbana não satisfatória', 7, 'Resíduos Sólidos', 'water_residues-icon.png', 0, NULL),
(87, 'Problema 5 - Informações Adicionais', 'Há ocorrência de doenças como diarréia, febre, doenças de pele na sua família?', 'Disseminação de doenças', 1, 'Informações Adicionais', 'water_residues-icon.png', 0, NULL),
(88, 'Problema 5 - Informações Adicionais', 'Falta conscientização sobre assuntos do meio ambiente no município? (Palestras, oficinas e eventos relacionados ao meio ambiente)', 'Falta de ações de educação ambiental', 2, 'Informações Adicionais', 'water_residues-icon.png', 0, NULL),
(89, 'Problema 5 - Informações Adicionais', 'Falta realização de campanhas de prevenção da dengue no seu município?', 'Falta de multirão da dengue', 3, 'Informações Adicionais', 'water_residues-icon.png', 0, NULL),
(90, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de água prestado pela COPASA?', 'Como você classifica o serviço de água prestado pela COPASA?', 4, 'Informações Adicionais', 'water_residues-icon.png', 0, 2),
(91, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 5, 'Informações Adicionais', 'water_residues-icon.png', 0, 2),
(92, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 6, 'Informações Adicionais', 'water_residues-icon.png', 0, 2),
(93, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 7, 'Informações Adicionais', 'water_residues-icon.png', 0, 2),
(94, 'Problema 5 - Informações Adicionais', 'Você sente falta de um canal de comunicação e reclamação com os prestadores de serviço?', 'Ausência de ouvidoria', 8, 'Informações Adicionais', 'water_residues-icon.png', 0, NULL),
(95, 'Problema 1 - Abastecimento de água', 'Falta água encanada da COPASA em sua casa?', 'Cobertura insuficiente da rede de distribuição de água potável', 1, 'Abastecimento de água', 'water_residues-icon.png', 1, NULL),
(96, 'Problema 1 - Abastecimento de água', 'A água na sua casa apresenta sabor ou cheiro desagradável?', 'Má qualidade da água distribuída', 2, 'Abastecimento de água', 'water_residues-icon.png', 1, NULL),
(97, 'Problema 1 - Abastecimento de água', 'Na sua casa a água apresenta alguma cor?', 'Má qualidade da água distribuída', 3, 'Abastecimento de água', 'water_residues-icon.png', 1, NULL),
(98, 'Problema 1 - Abastecimento de água', 'Você costuma ficar sem água em casa por certos períodos durante o dia?', 'Interrupção de funcionamento do sistema', 4, 'Abastecimento de água', 'water_residues-icon.png', 1, NULL),
(99, 'Problema 1 - Abastecimento de água', 'Você percebe saída de ar quando você abre as torneiras da sua casa?', 'Ar na tubulação (super faturamento da copasa)', 5, 'Abastecimento de água', 'water_residues-icon.png', 1, NULL),
(100, 'Problema 2 - Esgotamento Sanitário', 'O esgoto que sai da sua casa vai direto para o rio?', 'Cobertura insuficiente da rede de esgotamento sanitário', 1, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, NULL),
(101, 'Problema 2 - Esgotamento Sanitário', 'Tem esgoto a céu aberto no seu bairro?', 'Esgoto a céu aberto', 2, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, NULL),
(102, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro desagradável nas proximidades da Estação de Tratamento de Esgoto?', 'Odor da ETE', 3, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, NULL),
(103, 'Problema 2 - Esgotamento Sanitário', 'Volta esgoto para a sua casa ou nas ruas no seu bairro?', 'Entupimento da rede coletora de esgoto', 4, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, NULL),
(104, 'Problema 2 - Esgotamento Sanitário', 'Há cheiro ruim saindo dos bueiros no seu bairro?', 'Ligações clandestinas na rede de água pluvial', 5, 'Esgotamento Sanitário', 'water_residues-icon.png', 1, NULL),
(105, 'Problema 3 - Drenagem Urbana', 'Faltam bueiros nas ruas do seu bairro?', 'Ausência de bocas de lobo', 1, 'Drenagem Urbana', 'water_residues-icon.png', 1, NULL),
(106, 'Problema 3 - Drenagem Urbana', 'Há acumulo de lixo ou entupimento dos bueiros no seu bairro?', 'Acumulo de lixo com entupimento das bocas de lobo', 2, 'Drenagem Urbana', 'water_residues-icon.png', 1, NULL),
(107, 'Problema 3 - Drenagem Urbana', 'Quando chove, acumula água nas ruas do seu bairro?', 'Alagamentos constantes', 3, 'Drenagem Urbana', 'water_residues-icon.png', 1, NULL),
(108, 'Problema 3 - Drenagem Urbana', 'Os rios transbordam em épocas de chuva no seu bairro?', 'Enchentes frequentes', 4, 'Drenagem Urbana', 'water_residues-icon.png', 1, NULL),
(109, 'Problema 3 - Drenagem Urbana', 'Há falta de árvores nas margens dos rios do seu bairro?', 'Ausência de vegetação nas margens dos rios', 5, 'Drenagem Urbana', 'water_residues-icon.png', 1, NULL),
(110, 'Problema 4 - Resíduos Sólidos', 'Falta coleta de lixo no seu bairro?', 'Cobertura insuficiente da coleta de resíduos sólidos', 1, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(111, 'Problema 4 - Resíduos Sólidos', 'Você acha que o caminhão de lixo deveria passar mais vezes na semana na sua rua?', 'Frequência insuficiente da coleta de resíduos sólidos', 2, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(112, 'Problema 4 - Resíduos Sólidos', 'Falta coleta seletiva (recicláveis) no seu bairro?', 'Ausência de coleta seletiva', 3, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(113, 'Problema 4 - Resíduos Sólidos', 'Tem acúmulo de móveis e eletrodomésticos velhos nas ruas do seu bairro?', 'Acúmulo de resíduos como eletrodoméstico, móveis, etc..', 4, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(114, 'Problema 4 - Resíduos Sólidos', 'Há  presença de lixo nos rios no seu bairro?', 'Poluição de corpos d´água por resíduos sólidos', 5, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(115, 'Problema 4 - Resíduos Sólidos', 'Há descarte de lixo em terrenos baldios do seu bairro?', 'Descarte de lixo em terrenos baldios', 6, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(116, 'Problema 4 - Resíduos Sólidos', 'Falta limpeza das ruas e espaços públicos (praças, quadras) no seu bairro?', 'Limpeza urbana não satisfatória', 7, 'Resíduos Sólidos', 'water_residues-icon.png', 1, NULL),
(117, 'Problema 5 - Informações Adicionais', 'Há ocorrência de doenças como diarréia, febre, doenças de pele na sua família?', 'Disseminação de doenças', 1, 'Informações Adicionais', 'water_residues-icon.png', 1, NULL),
(118, 'Problema 5 - Informações Adicionais', 'Falta conscientização sobre assuntos do meio ambiente no município? (Palestras, oficinas e eventos relacionados ao meio ambiente)', 'Falta de ações de educação ambiental', 2, 'Informações Adicionais', 'water_residues-icon.png', 1, NULL),
(119, 'Problema 5 - Informações Adicionais', 'Falta realização de campanhas de prevenção da dengue no seu município?', 'Falta de multirão da dengue', 3, 'Informações Adicionais', 'water_residues-icon.png', 1, NULL),
(120, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de água prestado pela COPASA?', 'Como você classifica o serviço de água prestado pela COPASA?', 4, 'Informações Adicionais', 'water_residues-icon.png', 1, 2),
(121, 'Problema 5 - Informações Adicionais', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 'Como você classifica o serviço de esgoto prestado pela COPASA?', 5, 'Informações Adicionais', 'water_residues-icon.png', 1, 2),
(122, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 'Como você classifica os serviços de coleta de lixo prestados pela Prefeitura?', 6, 'Informações Adicionais', 'water_residues-icon.png', 1, 2),
(123, 'Problema 5 - Informações Adicionais', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 'Como você classifica os serviços para drenagem de água da chuva prestados pela Prefeitura?', 7, 'Informações Adicionais', 'water_residues-icon.png', 1, 2),
(124, 'Problema 5 - Informações Adicionais', 'Você sente falta de um canal de comunicação e reclamação com os prestadores de serviço?', 'Ausência de ouvidoria', 8, 'Informações Adicionais', 'water_residues-icon.png', 1, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `questionary`
--

DROP TABLE IF EXISTS `questionary`;
CREATE TABLE IF NOT EXISTS `questionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `questionary`
--

INSERT INTO `questionary` (`id`, `name`) VALUES
(1, 'Segurança Pública'),
(2, 'Mobilidade e Transporte'),
(3, 'Uso e Ocupação do Solo'),
(4, 'Saúde'),
(5, 'Lazer Cultura e Turismo'),
(6, 'Saneamento'),
(7, 'Educação'),
(8, 'Meio Ambiente'),
(9, 'Abastecimento de água'),
(10, 'Esgotamento Sanitário'),
(11, 'Drenagem Urbana'),
(12, 'Resíduos Sólidos'),
(13, 'Informações Adicionais');

-- --------------------------------------------------------

--
-- Estrutura da tabela `questionary_question`
--

DROP TABLE IF EXISTS `questionary_question`;
CREATE TABLE IF NOT EXISTS `questionary_question` (
  `questionary_id` int(11) NOT NULL,
  `question_id` int(11) NOT NULL,
  PRIMARY KEY (`questionary_id`,`question_id`),
  KEY `question_id` (`question_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `questionary_question`
--

INSERT INTO `questionary_question` (`questionary_id`, `question_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 33),
(1, 34),
(1, 35),
(1, 36),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 37),
(2, 38),
(2, 39),
(2, 40),
(3, 9),
(3, 10),
(3, 11),
(3, 12),
(3, 41),
(3, 42),
(3, 43),
(3, 44),
(4, 13),
(4, 14),
(4, 15),
(4, 16),
(4, 45),
(4, 46),
(4, 47),
(4, 48),
(5, 17),
(5, 18),
(5, 19),
(5, 20),
(5, 49),
(5, 50),
(5, 51),
(5, 52),
(6, 21),
(6, 22),
(6, 23),
(6, 24),
(6, 53),
(6, 54),
(6, 55),
(6, 56),
(7, 25),
(7, 26),
(7, 27),
(7, 28),
(7, 57),
(7, 58),
(7, 59),
(7, 60),
(8, 29),
(8, 30),
(8, 31),
(8, 32),
(8, 61),
(8, 62),
(8, 63),
(8, 64),
(9, 65),
(9, 66),
(9, 67),
(9, 68),
(9, 69),
(9, 95),
(9, 96),
(9, 97),
(9, 98),
(9, 99),
(10, 70),
(10, 71),
(10, 72),
(10, 73),
(10, 74),
(10, 100),
(10, 101),
(10, 102),
(10, 103),
(10, 104),
(11, 75),
(11, 76),
(11, 77),
(11, 78),
(11, 79),
(11, 105),
(11, 106),
(11, 107),
(11, 108),
(11, 109),
(12, 80),
(12, 81),
(12, 82),
(12, 83),
(12, 84),
(12, 85),
(12, 86),
(12, 110),
(12, 111),
(12, 112),
(12, 113),
(12, 114),
(12, 115),
(12, 116),
(13, 87),
(13, 88),
(13, 89),
(13, 90),
(13, 91),
(13, 92),
(13, 93),
(13, 94),
(13, 117),
(13, 118),
(13, 119),
(13, 120),
(13, 121),
(13, 122),
(13, 123),
(13, 124);

-- --------------------------------------------------------

--
-- Estrutura da tabela `respondent`
--

DROP TABLE IF EXISTS `respondent`;
CREATE TABLE IF NOT EXISTS `respondent` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cpf` text,
  `email` text,
  `residence_time_range` int(11) DEFAULT NULL,
  `residence_neighborhood_id` int(11) DEFAULT NULL,
  `job_city_id` int(11) DEFAULT NULL,
  `job_neighborhood_id` int(11) DEFAULT NULL,
  `salary_range` int(11) DEFAULT NULL,
  `created_at` text,
  PRIMARY KEY (`id`),
  KEY `residence_neighborhood_id` (`residence_neighborhood_id`),
  KEY `job_city_id` (`job_city_id`),
  KEY `job_neighborhood_id` (`job_neighborhood_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `userdata`
--

DROP TABLE IF EXISTS `userdata`;
CREATE TABLE IF NOT EXISTS `userdata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `password` text NOT NULL,
  `role` int(11) NOT NULL,
  `token` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
