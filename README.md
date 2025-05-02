# Implementación de react-native-use-form-lite en React Native

Este es un ejemplo práctico de cómo manejar formularios en React Native de manera sencilla y eficiente utilizando el paquete `react-native-use-form-lite`.

## 🚀 ¿Por qué usar react-native-use-form-lite?

`react-native-use-form-lite` es una solución moderna y ligera que resuelve uno de los problemas más comunes en React Native: el manejo de formularios. Este paquete:

- Elimina la necesidad de escribir múltiples funciones `onChangeText` o `onValueChange` para cada campo
- Proporciona una API intuitiva y fácil de usar
- Es compatible con diferentes tipos de inputs (TextInput, Picker, Switch, etc.)
- No requiere configuraciones complejas

## 📋 Características Destacadas

- Manejo automático de estados de formulario
- Soporte para diferentes tipos de inputs
- Detección automática de campos vacíos
- Funcionalidad de reseteo de formulario
- Integración simple con componentes nativos de React Native

## 🛠️ Instalación

```bash
npm install react-native-use-form-lite
npm install @react-native-picker/picker
```

## 📱 Uso en el Proyecto

En este proyecto, puedes ver un ejemplo práctico de cómo usar `react-native-use-form-lite`:

1. Importar el hook:
```javascript
import { useFormLite } from 'react-native-use-form-lite';
```

2. Inicializar el formulario:
```javascript
const { formData, register, resetForm, getEmptyFields } = useFormLite({
  name: '',
  email: '',
  phone: '',
  password: '',
  isActive: false,
  selectedOption: '',
});
```

3. Usar los campos:
```javascript
<TextInput {...register('name')} />
<Switch {...register('isActive', { type: 'switch' })} />
<Picker {...register('selectedOption', { type: 'select' })} />
```

## 📝 Beneficios

- **Simplicidad**: No necesitas escribir código repetitivo para cada campo del formulario
- **Flexibilidad**: Funciona con diferentes tipos de inputs nativos
- **Mantenimiento**: El código es más limpio y fácil de mantener
- **Performance**: Es una solución ligera que no afecta el rendimiento de la aplicación

## 📚 Documentación Oficial

Para más información sobre `react-native-use-form-lite`, visita el [repositorio oficial](https://github.com/urianviera/react-native-use-form-lite).

