import { View, TextInput, Switch, TouchableOpacity, Text } from 'react-native';
import { styles } from './src/style/style';

import { useFormLite } from 'react-native-use-form-lite';
import { Picker } from '@react-native-picker/picker';


export default function App() {

  // useFormLite es un hook que permite manejar formularios de manera sencilla
  const { formData, register, resetForm, getEmptyFields } = useFormLite({
    name: '',
    email: '',
    phone: '',
    password: '',
    isActive: false,
    selectedOption: '',
  });

  const handleSubmit = () => {

    // Datos del formulario
    console.log(formData);

    // Obtener campos vacios
    const emptyFields = getEmptyFields();
    console.log(emptyFields);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Name" {...register('name')} />

      <TextInput style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Correo electrónico" {...register('email')} />

      <TextInput style={styles.input}
        placeholderTextColor="#fff"
        placeholder="Mobile number" {...register('phone')} />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#fff"
        secureTextEntry
        {...register('password')}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Estado activo</Text>
        <Switch {...register('isActive', { type: 'switch' })} />
      </View>
      
      <View style={styles.pickerContainer}>
        <Picker
          {...register('selectedOption', { type: 'select' })}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona un país" value="" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="México" value="MX" />
          <Picker.Item label="Venezuela" value="VE" />
        </Picker>
      </View>


      <TouchableOpacity style={[styles.button, styles.buttonSuccess]} onPress={handleSubmit}>
        <Text style={styles.loginText}>Enviar formulario</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.buttonClear]} onPress={resetForm}>
        <Text style={styles.loginText}>Limpiar formulario</Text>
      </TouchableOpacity>

    </View>
  );
}