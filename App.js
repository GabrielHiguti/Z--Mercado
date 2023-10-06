import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import Input from './components/input';
import Button from './components/button';


export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/merca2.jpg')} />
      <Text style={styles.titulo}>Zé</Text>
      <Text style={styles.title}>Mercado</Text>

      <Input placeholder='Username'/>
      <Input placeholder='Password' secureTextEntry/>

      <Button>Entrar</Button>

      <TouchableOpacity>
        <Text>Criar Conta</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{
    color: '#FFBA26',
    fontSize: 34,
    fontWeight: 'bold',
  },

  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },

  image: {
    height: 200,
    width: '100%',
    position: 'absolute',
    top: 0,
  }

});
