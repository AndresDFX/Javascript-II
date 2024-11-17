# **Sesión 12: Despliegue Interactivo con GitHub Pages y Node.js**

Este proyecto incluye un **front-end** interactivo desplegado con **GitHub Pages** y un **back-end** en **Node.js** que simula un API para gestionar datos. Está diseñado para enseñar cómo realizar despliegues efectivos y organizar proyectos de manera profesional.

---

## **Contenido del Proyecto**

### **1. Front-end**
El front-end es una página web interactiva creada con **HTML**, **CSS**, y **Bootstrap** que incluye:
- Un formulario para ingresar datos de usuario (nombre y correo).
- Una lista dinámica que muestra los datos enviados al servidor.

### **2. Back-end**
El back-end es una API simple construida con **Node.js** y **Express** que:
- Permite enviar datos al servidor mediante `POST`.
- Devuelve los datos almacenados mediante `GET`.

### **3. Despliegue**
- El front-end se despliega en **GitHub Pages**.
- El back-end se ejecuta localmente o mediante **GitHub Actions** para entornos demostrativos.

---

## **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado:
- [Node.js](https://nodejs.org/) (versión 16 o superior).
- [npm](https://www.npmjs.com/) (incluido con Node.js).
- [http-server](https://www.npmjs.com/package/http-server) (para servir el front-end localmente):

  ```bash
  npm install -g http-server
  ```

---

## **Pasos para Ejecutar Localmente**

### **1. Configurar y Ejecutar el Back-end**

#### **a. Navega al Directorio del Back-end**
```bash
cd sesion_12_deploy/backend
```

#### **b. Instala las Dependencias**
```bash
npm install
```

#### **c. Inicia el Servidor**
```bash
npm start
```

El servidor estará disponible en `http://localhost:3000`.

---

### **2. Configurar y Ejecutar el Front-end**

#### **a. Navega al Directorio del Front-end**
```bash
cd ../frontend
```

#### **b. Inicia un Servidor Local**
Usa `http-server` para servir los archivos estáticos:
```bash
http-server -p 8080
```

El front-end estará disponible en `http://localhost:8080`.

---

### **3. Pruebas**

1. Accede a `http://localhost:8080`.
2. Ingresa datos en el formulario (nombre y correo).
3. Los datos aparecerán en la lista dinámica debajo del formulario.
4. Revisa la terminal del back-end para confirmar que las solicitudes han sido procesadas.

---

## **Despliegue en GitHub Pages**

### **1. Configura GitHub Pages**
1. Ve al repositorio en GitHub.
2. Haz clic en **Settings** > **Pages**.
3. En la sección **Source**, selecciona la rama `main` y la carpeta `frontend/`.

### **2. Accede al Front-end Desplegado**
GitHub generará un enlace como `https://tu-usuario.github.io/tu-repositorio`.

---

## **Automatización del Back-end con GitHub Actions**

GitHub Actions automatiza el despliegue del back-end para entornos demostrativos.

### **Archivo: .github/workflows/deploy.yml**
El archivo está configurado para:
- Instalar dependencias del back-end.
- Iniciar el servidor en un entorno demostrativo.

---

## **Ejecución del Back-end**

1. Haz un push al repositorio en la rama `main`.
2. Ve a la pestaña **Actions** en GitHub.
3. Verifica que el flujo de trabajo (`Deploy Node.js App`) se ejecute correctamente.

---

## **Notas Finales**

### **Solución de Problemas**

1. **Error de CORS**:
   - Asegúrate de que el back-end tenga habilitado `cors`:
     ```javascript
     app.use(cors());
     ```

2. **Conexión Fallida**:
   - Verifica que el servidor del back-end esté ejecutándose antes de usar el front-end.

3. **Problemas en el Despliegue**:
   - Revisa los logs de GitHub Actions en la pestaña **Actions** del repositorio.

---

### **Pruebas Adicionales**

- Modifica el front-end o el back-end para explorar nuevas funcionalidades.
- Usa herramientas como Postman para probar el API del back-end.


