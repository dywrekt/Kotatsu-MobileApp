import React, {Component} from 'react';
import {View, Text, Button} from 'react-native'

class feed extends Component {
    render() {
        return (
            <View style={Styles.center}>
                <Text style={styles.title}>Navigation Drawer</Text>
                <Button
                title='Go to Feed Item'
                onPress={() => this.props.navigation.navigate('Detail')}
                />
            
            </View>
        )
    }
}

export default Feed;