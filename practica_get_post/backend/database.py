# database.py
# Conexion con PostgreSQL. Los datos se pueden cambiar con variables de entorno.

import os
import psycopg


def get_connection():
    """Devuelve una conexion a la base clase_web usando el usuario clase_user."""
    return psycopg.connect(
        host=os.getenv("DB_HOST", "localhost"),
        port=os.getenv("DB_PORT", "5432"),
        dbname=os.getenv("DB_NAME", "clase_web"),
        user=os.getenv("DB_USER", "clase_user"),
        password=os.getenv("DB_PASSWORD", "clase123"),
    )
