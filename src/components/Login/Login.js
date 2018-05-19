import React, { Component } from 'react';
import { Stylesheet, View, Image } from 'react-native';

export default Class Login extends Component {
	render() {
		return ( 
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image 
					style={style.logo}
					source={require('../../images/logoXabia.png')}
					/>
				</View>
				<View style={styles.formContainer}>
				
				</View>
			</View>
		);
	}
}

const styles = Stylesheet.create({
	container: {
		flex: 1, 
		backgroundColor: '#3498db'
	},
	logoContainer: {
		alignItems:  'center'
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 100
	}
})

