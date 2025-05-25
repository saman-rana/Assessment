import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/Headers';
import Greeting from '../../components/general/Greetings';
import CarouselSlider from '../../components/carouselSlider/CarouselSlider';
import Categories from '../../components/category/Categories';
import ProductGrid from '../../components/products/ProductsGrid';

export default function App() {
  const userName = 'Saman Rana';

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Dashboard'} />
      <Greeting userName={userName} />
      <ScrollView>
        <CarouselSlider />
        <Categories />
        <ProductGrid />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
