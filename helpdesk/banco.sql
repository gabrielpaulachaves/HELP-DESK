create database if not exists helpdesk;
use helpdesk;

create table setor(
    idsetor int primary key auto_increment, 
    setor varchar(255) not null,
    createdAt datetime not null,
    updatedAt datetime not null
);

create table funcionarios(
    idfuncionario int primary key auto_increment,
    nome varchar(255) not null,
    usuario varchar(255) not null unique,
    senha varchar(255) not null,
    funcao varchar(255) not null,
    setor_id int not null, /*se o setor do funcionario fro TI, entao ele será admin do help-desk (pois é ele quem vai resolver os problemas), caso contrário, só terá permissão para registrar os problemas*/
    createdAt datetime not null,
    updatedAt datetime not null
);

create table ticket(
    idticket int primary key auto_increment,
    relator_id int not null,
    titulo varchar(255) not null,
    descricao text not null,
    status enum('aberto', 'em andamento', 'solucionado') not null default 'aberto',
    createdAt datetime not null,
    updatedAt datetime not null
);

create table comentarios(
    idcomentario int primary key auto_increment,
    ticket_id int not null,
    escritor_id int not null,
    comentario text not null,
    createdAt datetime not null,
    updatedAt datetime not null
);

alter table funcionarios
add constraint fk_setor /*nome da constraint*/
foreign key (setor_id) /*coluna que será a foreigh key*/
references setor(idsetor); /*de qual coluna da tabela X ele se referirá*/

alter table ticket
add constraint fk_relator
foreign key (relator_id)
references funcionarios(idfuncionario);

alter table comentarios
add constraint fk_ticket
foreign key (ticket_id)
references ticket(idticket);

alter table comentarios
add constraint fk_escritor
foreign key (escritor_id)
references funcionarios(idfuncionario);

/*se eu quiser apagar uma foreign key, basta eu usar
alter table "tabela"
drop constraint "nome da constraint"
*/