
import { StyleSheet, FlatList, SafeAreaView, Text} from 'react-native';
import {DATA} from './Data';
import Row from './components/Row';
import { useEffect, useState } from 'react';
import Search from './components/Search';

export default function App() {

const renderItem = ({item}) => (
  <Text>{item.lastname}</Text>
);

const [items, setItems] = useState([]);
useEffect(() => {
  setItems(DATA);
}, []);

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'lightblue',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});
const executeSearch = (search) => {
  const searchArray = DATA.filter((item) => item.lastname.startsWith(search));
  setItems(searchArray);
}

  return (
    <SafeAreaView style={styles.container}>
      <Search executeSearch={executeSearch} />
      <FlatList
      data={items}
      renderItem={({item}) =>(
        <Row person={item} />
      )}

    ></FlatList>
    </SafeAreaView>
  );
}


