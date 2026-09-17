create database helpdesk;


create table setor(
    idsetor int primary key auto_increment, 
    setor varchar(50) not null
);

create table funcionarios(
    idfuncionario int primary key auto_increment,
    nome varchar(50) not null,
    funcao varchar(20) not null,
    setor_id int not null, /*se o setor do funcionario fro TI, entao ele será admin do help-desk (pois é ele quem vai resolver os problemas), caso contrário, só terá permissão para registrar os problemas*/
);

create table ticket(
    idticket int primary key auto_increment,
    relator_id int not null,
    titulo varchar(50) not null,
    descricao text not null,
);

alter table funcionarios
add constraint fk_setor /*nome da constraint*/
foreign key (setor_id) /*coluna que será a foreigh key*/
references setor(idsetor) /*de qual coluna da tabela X ele se referirá*/

alter table ticket
add constraint fk_relator
foreign key (relator_id)
references funcionarios(idfuncionario)

/*se eu quiser apagar uma foreign key, basta eu usar
alter table "tabela"
drop constraint "nome da constraint"
*/