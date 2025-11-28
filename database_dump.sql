--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pjct_next_ecommerce_niemand; Type: SCHEMA; Schema: -; Owner: pjct_next_ecommerce_niemand
--

CREATE SCHEMA pjct_next_ecommerce_niemand;


ALTER SCHEMA pjct_next_ecommerce_niemand OWNER TO pjct_next_ecommerce_niemand;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: migrations; Type: TABLE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

CREATE TABLE pjct_next_ecommerce_niemand.migrations (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp without time zone NOT NULL
);


ALTER TABLE pjct_next_ecommerce_niemand.migrations OWNER TO pjct_next_ecommerce_niemand;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

CREATE SEQUENCE pjct_next_ecommerce_niemand.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pjct_next_ecommerce_niemand.migrations_id_seq OWNER TO pjct_next_ecommerce_niemand;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER SEQUENCE pjct_next_ecommerce_niemand.migrations_id_seq OWNED BY pjct_next_ecommerce_niemand.migrations.id;


--
-- Name: products; Type: TABLE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

CREATE TABLE pjct_next_ecommerce_niemand.products (
    id integer NOT NULL,
    product_name character varying(100) NOT NULL,
    type character varying(50) NOT NULL,
    price numeric(10,2) NOT NULL,
    api_id character varying(100) NOT NULL
);


ALTER TABLE pjct_next_ecommerce_niemand.products OWNER TO pjct_next_ecommerce_niemand;

--
-- Name: products_id_seq; Type: SEQUENCE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE pjct_next_ecommerce_niemand.products ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME pjct_next_ecommerce_niemand.products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: sessions; Type: TABLE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

CREATE TABLE pjct_next_ecommerce_niemand.sessions (
    id integer NOT NULL,
    token character varying NOT NULL,
    expiry_timestamp timestamp without time zone DEFAULT (now() + '24:00:00'::interval) NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE pjct_next_ecommerce_niemand.sessions OWNER TO pjct_next_ecommerce_niemand;

--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE pjct_next_ecommerce_niemand.sessions ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME pjct_next_ecommerce_niemand.sessions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: users; Type: TABLE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

CREATE TABLE pjct_next_ecommerce_niemand.users (
    id integer NOT NULL,
    username character varying(80) NOT NULL,
    password_hash character varying(80) NOT NULL
);


ALTER TABLE pjct_next_ecommerce_niemand.users OWNER TO pjct_next_ecommerce_niemand;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE pjct_next_ecommerce_niemand.users ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME pjct_next_ecommerce_niemand.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: migrations id; Type: DEFAULT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.migrations ALTER COLUMN id SET DEFAULT nextval('pjct_next_ecommerce_niemand.migrations_id_seq'::regclass);


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

COPY pjct_next_ecommerce_niemand.migrations (id, name, created_at) FROM stdin;
5	1707932515-createTableProducts.ts	2025-01-08 17:40:26.824119
6	1707995243-insertProducts.ts	2025-01-08 17:40:26.824119
7	1715157338-createUsers.ts	2025-01-08 17:40:26.824119
8	1716448965-createSessions.ts	2025-01-08 17:40:26.824119
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

COPY pjct_next_ecommerce_niemand.products (id, product_name, type, price, api_id) FROM stdin;
1	cups and plates set	novelty	44.99	prod_Q1Ok1xFzAbpmjy
2	green coffee cups	cup	23.99	prod_Q1OnpSihOeXVRT
3	blue cylindric pot	novelty	9.99	prod_Q1Oqu3KurdDGtz
4	blue breakfast plate	novelty	9.99	prod_Q1Ory04DNPLgO3
5	white and blue cast coffee cups	cup	28.49	prod_Q1OsQ7e43MlvFe
6	cappuccino cups	cup	32.99	prod_QMmdYEzB2VD9IF
7	blue bowl	bowl	19.99	prod_QMmefQdhENtN4W
8	colorful vase	novelty	44.99	prod_QMmfwuhtscWUZk
9	curvy vase	novelty	29.99	prod_QMmgiXDRdpc3mF
10	dark cups set	cup	54.99	prod_QMmhLzuUm0NoRc
11	gravy boat	novelty	14.99	prod_QMmiv6U27rlIhe
12	green bowl	bowl	29.99	prod_QMmjLL9cE0qlzE
13	grooved green cup	cup	19.99	prod_QMmj5dx7wW5w8q
14	halloween cups	cup	34.99	prod_QMmktfUJhnVh9l
15	italian set	novelty	54.99	prod_QMmlOKo5X8zFyN
16	natural cups set	cup	49.99	prod_QMmmA08ssNfazB
17	yellow bowl	bowl	29.99	prod_QMmmvPf9mDyx9B
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

COPY pjct_next_ecommerce_niemand.sessions (id, token, expiry_timestamp, user_id) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

COPY pjct_next_ecommerce_niemand.users (id, username, password_hash) FROM stdin;
\.


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

SELECT pg_catalog.setval('pjct_next_ecommerce_niemand.migrations_id_seq', 8, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

SELECT pg_catalog.setval('pjct_next_ecommerce_niemand.products_id_seq', 17, true);


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

SELECT pg_catalog.setval('pjct_next_ecommerce_niemand.sessions_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

SELECT pg_catalog.setval('pjct_next_ecommerce_niemand.users_id_seq', 1, false);


--
-- Name: migrations migrations_pkey; Type: CONSTRAINT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.migrations
    ADD CONSTRAINT migrations_pkey PRIMARY KEY (id);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_token_key; Type: CONSTRAINT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.sessions
    ADD CONSTRAINT sessions_token_key UNIQUE (token);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_user_id_fkey; Type: FK CONSTRAINT; Schema: pjct_next_ecommerce_niemand; Owner: pjct_next_ecommerce_niemand
--

ALTER TABLE ONLY pjct_next_ecommerce_niemand.sessions
    ADD CONSTRAINT sessions_user_id_fkey FOREIGN KEY (user_id) REFERENCES pjct_next_ecommerce_niemand.users(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

