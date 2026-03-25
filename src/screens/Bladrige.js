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

export default function Bladrige() {
  const [tab, setTab] = useState('informacion');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>Modelo de calidad</Text>
        <Text style={styles.title}>Baldrige</Text>

        <Text style={styles.description}>
          Un modelo orientado a la excelencia organizacional que evalúa liderazgo,
          estrategia, enfoque al cliente, medición y resultados para impulsar la calidad.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
        />

        <View style={styles.actions}>
          <Pressable
            style={[
              styles.button,
              tab === 'informacion' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setTab('informacion')}
          >
            <Text
              style={[
                styles.buttonText,
                tab === 'informacion'
                  ? styles.activeButtonText
                  : styles.inactiveButtonText,
              ]}
            >
              Información personal
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.button,
              tab === 'biografia' ? styles.activeButton : styles.inactiveButton,
            ]}
            onPress={() => setTab('biografia')}
          >
            <Text
              style={[
                styles.buttonText,
                tab === 'biografia'
                  ? styles.activeButtonText
                  : styles.inactiveButtonText,
              ]}
            >
              Biografía
            </Text>
          </Pressable>
        </View>

        <View style={styles.infoContainer}>
          {tab === 'informacion' ? (
            <>
              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Nombre del modelo</Text>
                <Text style={styles.infoText}>Modelo de Calidad Baldrige</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Fecha de creación</Text>
                <Text style={styles.infoText}>1987</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Aplicaciones del modelo</Text>
                <Text style={styles.listItem}>• Evaluación del desempeño organizacional</Text>
                <Text style={styles.listItem}>• Mejora continua de la calidad</Text>
                <Text style={styles.listItem}>• Gestión estratégica y liderazgo</Text>
                <Text style={styles.listItem}>• Medición de resultados y satisfacción del cliente</Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>¿En qué consiste el modelo?</Text>
                <Text style={styles.infoText}>
                  El modelo Baldrige evalúa la excelencia de una organización a
                  partir de criterios como liderazgo, planeación estratégica,
                  clientes, información, personal, procesos y resultados.
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Objetivo principal</Text>
                <Text style={styles.infoText}>
                  Ayudar a las organizaciones a mejorar su desempeño integral por
                  medio de una gestión enfocada en calidad, competitividad y resultados.
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Características clave</Text>
                <Text style={styles.listItem}>• Evalúa la organización de forma integral</Text>
                <Text style={styles.listItem}>• Se enfoca en liderazgo y estrategia</Text>
                <Text style={styles.listItem}>• Prioriza resultados medibles</Text>
                <Text style={styles.listItem}>• Impulsa la mejora continua y la competitividad</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Importancia</Text>
                <Text style={styles.infoText}>
                  Es importante porque sirve como referencia para elevar la calidad
                  en las organizaciones, fortalecer procesos y orientar decisiones
                  hacia resultados sostenibles.
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>

      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 24,
  },
  button: {
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#1f1a17',
  },
  inactiveButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d7c8bd',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
  },
  activeButtonText: {
    color: '#fffaf5',
  },
  inactiveButtonText: {
    color: '#4f433c',
  },
  infoContainer: {
    gap: 14,
  },
  infoCard: {
    backgroundColor: '#fffaf5',
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: '#e3d7cc',
  },
  infoTitle: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#8a5a44',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#3f342e',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#3f342e',
    marginBottom: 4,
  },
});