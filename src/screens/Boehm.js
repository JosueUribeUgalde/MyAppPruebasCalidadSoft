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

export default function Boehm() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.eyebrow}>Modelo de calidad</Text>
        <Text style={styles.title}>Boehm</Text>

        <Text style={styles.description}>
          Un enfoque clasico para evaluar la calidad del software a partir de caracteristicas
          como utilidad, mantenibilidad y portabilidad.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
          }}
          style={styles.image}
        />

        <View style={styles.actions}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Inf personal</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>Biografia</Text>
          </Pressable>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
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
  },
  primaryButton: {
    backgroundColor: '#1f1a17',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d7c8bd',
  },
  primaryButtonText: {
    color: '#fffaf5',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButtonText: {
    color: '#4f433c',
    fontSize: 16,
    fontWeight: '700',
  },
});
