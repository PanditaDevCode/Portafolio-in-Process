# Ejercicio 0.5 - Pagina SPA

```mermaid

sequenceDiagram
    participant Usuario
    participant Navegador
    participant Servidor

    Usuario->>Navegador: Accede a la URL /spa
    Navegador->>Servidor: GET /spa
    Servidor-->>Navegador: HTML de la SPA
    Navegador->>Servidor: Solicita archivos JS/CSS
    Servidor-->>Navegador: Envía archivos JS/CSS
    Navegador->>Servidor: GET /data.json (solicita las notas)
    Servidor-->>Navegador: Envía notas en formato JSON
    Navegador->>Usuario: Renderiza la página y muestra las notas


# Ejercicio 0.4 - Crear nueva nota

```mermaid
sequenceDiagram
    participant Usuario
    participant Navegador
    participant Servidor

    Usuario->>Navegador: Escribe texto y presiona en "Gusasardar"
    Navegador->>Servidor: Enviar solicitud POST con el nuevo texto
    Servidor-->>Navegador: Responde con redireccionar (302)
    Navegador->>Servidor: Solicita la lista de las notas
    Servidor-->>Navegador: Envía el HTML actualizado
    Navegador->>Usuario: Muestra la lista de notas actualizadas
