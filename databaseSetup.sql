CREATE TABLE songs (
    id serial PRIMARY KEY,
    rank integer,
    artist varchar(80),
    track varchar(120),
    published date
);

