import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from 'react-native';
import UserInfo from './component/UserInfo';
import CustomButton from './component/CustomButton';

class App extends React.Component {
  constructor(props) {
    super(props);

    //creating state
    this.state = {
      name: 'Alpha',
      age: 30,
    };
  }

  /**flat list  example **/
  flatListExample = () => {
    const data = [{item: 'Nike Shoes'}, {item: 'Adidas Shoes'}];

    return (
      <ScrollView>
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({item, index}) =>
              index < 1 ? <Text>Hello World</Text> : null
            }
          />
        </View>
      </ScrollView>
    );
  };
  pressed = () => {
    this.setState({name: 'Beta'});
  };

  render() {
    return (
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <UserInfo name={this.state.name} age={this.state.age} />
          <CustomButton onPress={this.pressed} label={'Done'} />
        </View>
      </SafeAreaView>
    );
  }
}

export default App;
