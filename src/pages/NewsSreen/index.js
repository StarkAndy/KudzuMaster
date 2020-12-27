import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {fetchNews} from './action/actions';

class NewsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      newsData: '',
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.fetchNewsData()}>
          <Text>News repsonse</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: '',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNewsData: () => dispatch(fetchNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsScreen);
