create table Pessoa(
	id varchar(36) primary key,
	nome varchar(200) unique not null,
	dtNascimento Date not null,
	ativo boolean default true
)

select * from pessoa