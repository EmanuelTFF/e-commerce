import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import Dot from '../../components/Dot';
import SizeButton from '../../components/SizeButton';
import Button from '../../components/Button';
import Footer from '../../components/footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  });

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require('../../assets/detail.png')}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.productInfo}>
        <Text style={[styles.title, { fontSize: 24 }]}>R$ 280,90</Text>
        <Text style={[styles.title, { fontSize: 30, opacity: 0.4 }]}>Nike Downshifter 10</Text>

        <View style={styles.dotContainer}>
          <Dot color="#2379f4" />
          <Dot color="#fb6e53" />
          <Dot color="#ddd" />
          <Dot color="#000" />
        </View>

        <ScrollView horizontal style={styles.sizeButtonContainer} showsHorizontalScrollIndicator={false}>
          <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
          <SizeButton>37</SizeButton>
          <SizeButton>39</SizeButton>
          <SizeButton>42</SizeButton>
        </ScrollView>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>Nike Downshifter 10</Text>
          <Text style={styles.textDescription}>
            A Nike Downshifter 10 oferece conforto e suporte durante o seu treino diário, com um design moderno e materiais de alta qualidade.
          </Text>
        </View>

        <Text style={styles.textList}>- Categoria: Amortecimento</Text>
        <Text style={styles.textList}>- Material: Mesh</Text>
      </View>

      <Button title="Adicionar ao Carrinho" onPress={() => {}} />

      <View style={styles.line} />

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: 300, // Defina uma altura fixa para a imagem
  },
  productInfo: {
    paddingHorizontal: '5%',
    paddingVertical: '2%',
  },
  title: {
    fontFamily: 'Anton_400Regular',
    color: '#000',
  },
  dotContainer: {
    flexDirection: 'row',
    marginVertical: '7%',
  },
  sizeButtonContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  textContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
    fontWeight: 'bold',
  },
  textDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginVertical: '2%',
  },
  textList: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '1%',
  },
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  },
});
