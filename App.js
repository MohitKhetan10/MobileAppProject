import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fact, setFact] = useState('');
  const [showTools, setShowTools] = useState(false);
  const [userName, setUserName] = useState('');
  const [interest, setInterest] = useState('');
  const [result, setResult] = useState('');

  const techFacts = [
    '💻 The first computer virus was created in 1986.',
    '🌐 Tim Berners-Lee invented the World Wide Web in 1989.',
    '📱 More people access the internet on mobile than desktop.',
    '🔐 Cybersecurity jobs are growing 3 times faster than other tech roles.',
  ];

  const popularTools = ['React Native', 'Flutter', 'Node.js', 'AWS', 'Python'];

  const showRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * techFacts.length);
    setFact(techFacts[randomIndex]);
  };

  const handleSubmit = () => {
    if (userName.trim() === '' || interest.trim() === '') {
      setResult('❌ Please fill in all fields.');
    } else {
      setResult(`✅ Hello, ${userName}! Explore more about ${interest}.`);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>🖥️ IT Toolkit</Text>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <View style={styles.hamburger}>
            <View style={styles.line} />
            <View style={styles.line} />
            <View style={styles.line} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Hamburger Menu */}
      {menuOpen && (
        <View style={styles.menu}>
          <Text style={styles.menuItem}>Tech Facts</Text>
          <Text style={styles.menuItem}>Trending Tools</Text>
          <Text style={styles.menuItem}>IT Certification</Text>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.content}>
        {/* Assignment Details */}
        <View style={styles.detailsBox}>
          <Text style={styles.text}>Name: Mohit Khetan</Text>
          <Text style={styles.text}>Course: Mobile Application Development</Text>
          <Text style={styles.text}>Assignment: Week 3 – IT Toolkit App</Text>
        </View>

        {/* Tech Fact Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>💡 Discover an IT Fact</Text>
          <TouchableOpacity style={styles.button} onPress={showRandomFact}>
            <Text style={styles.buttonText}>Show Me a Fact</Text>
          </TouchableOpacity>
          {fact !== '' && <Text style={styles.output}>{fact}</Text>}
        </View>

        {/* Tools Toggle Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Popular IT Tools</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setShowTools(!showTools)}
          >
            <Text style={styles.buttonText}>
              {showTools ? 'Hide Tools' : 'Show Tools'}
            </Text>
          </TouchableOpacity>
          {showTools &&
            popularTools.map((tool, index) => (
              <Text key={index} style={styles.output}>
                🔸 {tool}
              </Text>
            ))}
        </View>

        {/* Certification Form Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📄 Get IT Certification Info</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Interest (e.g. AI, Web, Cyber)"
            value={interest}
            onChangeText={(text) => setInterest(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          {result !== '' && <Text style={styles.output}>{result}</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8f4f8',
  },
  header: {
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  logo: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hamburger: {
    width: 30,
    justifyContent: 'space-between',
  },
  line: {
    height: 3,
    backgroundColor: '#fff',
    marginVertical: 2,
  },
  menu: {
    backgroundColor: '#444',
    padding: 10,
  },
  menuItem: {
    color: '#fff',
    fontSize: 16,
    paddingVertical: 5,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  detailsBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
  section: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    width: '100%',
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  output: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderColor: '#888',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
  },
});

export default App;
