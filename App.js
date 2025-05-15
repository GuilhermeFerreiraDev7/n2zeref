import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  function calcularIMC() {
    const p = parseFloat(peso.replace(',', '.'));
    const a = parseFloat(altura.replace(',', '.'));

    if (!p || !a) {
      setResultado(null);
      return;
    }

    const imc = p / (a * a);
    setResultado(imc.toFixed(1));
  }

  function limpar() {
    setPeso('');
    setAltura('');
    setResultado(null);
  }

  function getClassificacao(imc) {
    if (imc < 18.5) return { texto: 'Abaixo do peso', cor: '#e67e22' };
    if (imc < 25) return { texto: 'Peso normal', cor: '#2ecc71' };
    if (imc < 30) return { texto: 'Sobrepeso', cor: '#f39c12' };
    if (imc < 35) return { texto: 'Obesidade I', cor: '#e74c3c' };
    if (imc < 40) return { texto: 'Obesidade II', cor: '#c0392b' };
    return { texto: 'Obesidade III', cor: '#8e44ad' };
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Calculadora de IMC</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Peso "
            keyboardType="decimal-pad"
            value={peso}
            onChangeText={setPeso}
          />
          <TextInput
            style={styles.input}
            placeholder="Altura (m)"
            keyboardType="decimal-pad"
            value={altura}
            onChangeText={setAltura}
          />

          <View style={styles.buttons}>
            <Pressable style={styles.button} onPress={calcularIMC}>
              <Text style={styles.buttonText}>Calcular</Text>
            </Pressable>
            <Pressable style={[styles.button, styles.clearButton]} onPress={limpar}>
              <Text style={styles.buttonText}>Limpar</Text>
            </Pressable>
          </View>
        </View>

        {resultado && (
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Seu IMC:</Text>
            <Text style={styles.resultValue}>{resultado}</Text>
            <Text
              style={[
                styles.classification,
                { color: getClassificacao(resultado).cor },
              ]}
            >
              {getClassificacao(resultado).texto}
            </Text>
          </View>
        )}

        <View style={styles.tableCard}>
          <Text style={styles.tableTitle}> Classificação</Text>
          {[
            {
              faixa: 'Menor que 18.5',
              texto: 'Abaixo do peso',
              cor: '#e67e22',
              icone: 'arrow-down-thin-circle-outline',
            },
            {
              faixa: '18.5 a 24.9',
              texto: 'Peso normal',
              cor: '#2ecc71',
              icone: 'check-circle-outline',
            },
            {
              faixa: '25 a 29.9',
              texto: 'Sobrepeso',
              cor: '#f1c40f',
              icone: 'alert-circle-outline',
            },
            {
              faixa: '30 a 34.9',
              texto: 'Obesidade I',
              cor: '#e74c3c',
              icone: 'alert-outline',
            },
            {
              faixa: '35 a 39.9',
              texto: 'Obesidade II',
              cor: '#c0392b',
              icone: 'alert-box-outline',
            },
            {
              faixa: '40 ou mais',
              texto: 'Obesidade III',
              cor: '#8e44ad',
              icone: 'skull-outline',
            },
          ].map((item, i) => (
            <View key={i} style={styles.row}>
              <Icon name={item.icone} size={24} color={item.cor} style={{ width: 30 }} />
              <Text style={styles.range}>{item.faixa}</Text>
              <Text style={[styles.label, { color: item.cor }]}>{item.texto}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
    color: '#2c3e50',
    marginTop: 40,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 4,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#3498db',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  clearButton: {
    backgroundColor: '#95a5a6',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 4,
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 18,
    color: '#34495e',
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3498db',
    marginVertical: 8,
  },
  classification: {
    fontSize: 18,
    fontWeight: '600',
  },
  tableCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    elevation: 4,
  },
  tableTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#2c3e50',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  range: {
    flex: 1,
    fontSize: 15,
    color: '#34495e',
    paddingLeft: 8,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
});
