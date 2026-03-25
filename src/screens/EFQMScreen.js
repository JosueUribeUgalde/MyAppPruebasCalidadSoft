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

export default function EFQMScreen() {
  const [tab, setTab] = useState('informacion');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>Modelo de calidad</Text>
        <Text style={styles.title}>EFQM</Text>

        <Text style={styles.description}>
          Un modelo orientado a la excelencia organizacional que evalúa liderazgo,
          estrategia, personas, recursos y resultados para impulsar la mejora continua.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
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
                <Text style={styles.infoText}>
                  EFQM (European Foundation for Quality Management)
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Fecha de creación</Text>
                <Text style={styles.infoText}>1988</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Aplicaciones del modelo</Text>
                <Text style={styles.listItem}>• Evaluación de excelencia organizacional</Text>
                <Text style={styles.listItem}>• Mejora continua en empresas e instituciones</Text>
                <Text style={styles.listItem}>• Diagnóstico estratégico y gestión del desempeño</Text>
                <Text style={styles.listItem}>• Impulso de innovación y sostenibilidad</Text>
              </View>
            </>
          ) : (
            <>
              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>¿En qué consiste el modelo?</Text>
                <Text style={styles.infoText}>
                  Es un modelo de gestión de calidad que analiza cómo una organización
                  genera valor de manera sostenible. Evalúa no solo resultados, sino
                  también liderazgo, estrategia, personas y recursos.
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Objetivo principal</Text>
                <Text style={styles.infoText}>
                  Guiar a las organizaciones hacia la excelencia mediante autoevaluación,
                  detección de áreas de mejora y toma de decisiones estratégicas.
                </Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Características clave</Text>
                <Text style={styles.listItem}>• Enfoque integral</Text>
                <Text style={styles.listItem}>• Mejora continua</Text>
                <Text style={styles.listItem}>• Orientación a resultados</Text>
                <Text style={styles.listItem}>• Adaptable a distintos tipos de organización</Text>
              </View>

              <View style={styles.infoCard}>
                <Text style={styles.infoTitle}>Importancia</Text>
                <Text style={styles.infoText}>
                  Es uno de los modelos más reconocidos para medir competitividad,
                  excelencia y capacidad de adaptación organizacional.
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