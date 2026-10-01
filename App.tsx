import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Student info
const STUDENT_NAME = 'Rafay';
const ROLL_NUMBER = 'L1S22BSCS0001';

interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
}

const PRODUCTS: Product[] = [
  { id: '1', name: 'Wireless Headphones', price: '$49.99', category: 'Electronics' },
  { id: '2', name: 'Running Shoes', price: '$89.99', category: 'Sports' },
  { id: '3', name: 'Coffee Maker', price: '$34.99', category: 'Kitchen' },
  { id: '4', name: 'Yoga Mat', price: '$24.99', category: 'Sports' },
  { id: '5', name: 'Laptop Stand', price: '$29.99', category: 'Electronics' },
];

// ✅ FIX: removed unused variable that was breaking the CI pipeline

function ProductCard({ item }: { item: Product }) {
  return (
    <View style={styles.card}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productCategory}>{item.category}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header with student info */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>🛍️ Product Explorer</Text>
        <View style={styles.studentInfo}>
          <Text style={styles.studentText}>Name: {STUDENT_NAME}</Text>
          <Text style={styles.studentText}>Roll No: {ROLL_NUMBER}</Text>
        </View>
      </View>

      {/* Product List */}
      <FlatList
        data={PRODUCTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    backgroundColor: '#2563eb',
    paddingTop: 55,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  appTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
  },
  studentInfo: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 8,
    padding: 10,
  },
  studentText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  listContainer: {
    padding: 16,
    gap: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  productName: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 4,
  },
  productCategory: {
    fontSize: 13,
    color: '#64748b',
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2563eb',
  },
});
