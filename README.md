# CRUD de Clientes — Vue 3 + Vuex + Vue Router + Vuetify

# CRUD de Clientes — Vue 3 + Vuex + Vue Router + Vuetify

## Requisitos
- Node.js 18+
- npm o pnpm

## Instalación
```bash
npm install
npm run dev
```

Visita: http://localhost:5173

## Estructura
- `src/store`: Vuex con simulación de persistencia (localStorage).
- `src/router`: Rutas para Listado, Crear y Editar.
- `src/views`: Vistas `ClientesList.vue` y `ClienteForm.vue`.
- `Vuetify`: UI responsiva y validaciones en formulario.

## Notas
- No hay backend; la persistencia se simula con Vuex + localStorage.
- Reglas de validación para correo y teléfono incluidas.
```
