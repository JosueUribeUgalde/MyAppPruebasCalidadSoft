import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ModeloBladrige from './Bladrige';
import ModeloBoehm from './Boehm';
import ModeloDeming from './Deming';
import DromeyScreen from './DromeyScreen';
import EFQMScreen from './EFQMScreen';

const modelScreens = {
  deming: ModeloDeming,
  boehm: ModeloBoehm,
  bladrige: ModeloBladrige,
  dromey: DromeyScreen,
  efqm: EFQMScreen,
};

const modelOptions = [
  {
    key: 'deming',
    title: 'Deming',
    subtitle: 'Mejora continua y ciclo PHVA.',
  },
  {
    key: 'boehm',
    title: 'Boehm',
    subtitle: 'Factores de calidad del producto de software.',
  },
  {
    key: 'bladrige',
    title: 'Baldrige',
    subtitle: 'Excelencia organizacional y resultados.',
  },
  {
    key: 'dromey',
    title: 'Dromey',
    subtitle: 'Relación entre propiedades y atributos de calidad.',
  },
  {
    key: 'efqm',
    title: 'EFQM',
    subtitle: 'Gestión, estrategia y mejora continua.',
  },
];

export default function Home() {
  const [activeModel, setActiveModel] = useState(null);

  if (activeModel) {
    const ActiveComponent = modelScreens[activeModel];

    return (
      <View style={styles.screenWrapper}>
        <ActiveComponent />
        <SafeAreaView pointerEvents="box-none" style={styles.overlay}>
          <Pressable style={styles.backButton} onPress={() => setActiveModel(null)}>
            <Text style={styles.backButtonText}>Volver al inicio</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>Modelos de calidad</Text>
        <Text style={styles.title}>Inicio</Text>

        <Text style={styles.description}>
          Selecciona uno de los modelos que estás manejando para abrir su pantalla
          y revisar la información correspondiente.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
        />

        <View style={styles.actions}>
          {modelOptions.map((model) => (
            <Pressable
              key={model.key}
              style={styles.modelCard}
              onPress={() => setActiveModel(model.key)}
            >
              <Text style={styles.modelTitle}>{model.title}</Text>
              <Text style={styles.modelSubtitle}>{model.subtitle}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  backButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#1f1a17',
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  backButtonText: {
    color: '#fffaf5',
    fontSize: 14,
    fontWeight: '700',
  },
  container: {
    flex: 1,
    backgroundColor: '#f3efe7',
  },
  content: {
    padding: 24,
    paddingTop: 48,
    paddingBottom: 40,
  },
  eyebrow: {
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#8a5a44',
    marginBottom: 12,
  },
  title: {
    fontSize: 42,
    fontWeight: '800',
    color: '#1f1a17',
    marginBottom: 16,
  },
  description: {
    fontSize: 17,
    lineHeight: 28,
    color: '#4f433c',
    marginBottom: 24,
  },
  image: {
    width: '100%',
    height: 240,
    borderRadius: 24,
    marginBottom: 28,
  },
  actions: {
    gap: 14,
  },
  modelCard: {
    backgroundColor: '#fffaf5',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e3d7cc',
  },
  modelTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1f1a17',
    marginBottom: 8,
  },
  modelSubtitle: {
    fontSize: 15,
    lineHeight: 24,
    color: '#4f433c',
  },
});