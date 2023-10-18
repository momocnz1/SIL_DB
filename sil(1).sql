DROP SCHEMA

IF EXISTS sil;
	CREATE SCHEMA sil COLLATE = utf8_general_ci;

USE sil;

/* *************************************************************** 
***************************CREATING TABLES************************
**************************************************************** */
CREATE TABLE Users (
    users_id  varchar(6),
    fname    varchar(20) not null,
    lname    varchar(20) not null,
    sex         char,
    email      varchar(12),
    upassword  char(6),
    primary key (users_id)
    
);
CREATE TABLE Note(
    note_id  integer(6),
    N_type       varchar(30),
    N_writing    nvarchar(120),
    N_name      varchar(12),
    users_id  varchar(6),
    primary key(note_id),
    foreign  key(users_id) references Users(users_id)
);
CREATE TABLE to_do_list(
    todo_id   integer  (6),
    todo_name    varchar  (12),
    users_id varchar(6),
    primary key(todo_id), 
    foreign key(users_id) REFERENCES Users(users_id)
);
CREATE TABLE bullet_journal(
	b_id  integer(6),
	b_date   date not null,
	b_writing  nvarchar(120),
    b_name  varchar(12),
    users_id  varchar(6),
    primary key(b_id), 
    foreign key(users_id) REFERENCES Users(users_id)
);
CREATE TABLE event_user(
    event_id  integer(6),
    emoji       varchar(6),
    e_date     date not null,
    users_id  varchar(6),
    primary key(event_id), 
    foreign key(users_id) REFERENCES Users(users_id)
);
CREATE VIEW user_details_view AS
select 
		n.note_id,
        n.users_id,
        t.todo_id,
        b.b_id,
        e.event_id,
        n.N_name,
        n.N_type,
        n.N_writing,
        u.fname,
        u.lname,
        u.sex,
        u.email,
        u.upassword,
        t.todo_name,
        b.b_date,
        b.b_writing,
        b.b_name,
        e.emoji,
        e.e_date
from Note n,
	Users u,
    to_do_list t,
    bullet_journal b,
    event_user e
where n.users_id = u.users_id
	and t.users_id = u.users_id
    and b.users_id = u.users_id
    and e.users_id = u.users_id
;
/* *************************************************************** 
***************************INSERTING DATA*************************
**************************************************************** */
        
        
        
        
        
        
        