import React,{memo} from 'react';
import { StyleSheet, Dimensions, View, ActivityIndicator } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfView = ({ route }) => {
    // console.log('lll', route)
    return (
        <View style={styles.container}>
            <Pdf
                trustAllCerts={false}
                source={{ uri: route.params.data, }}
                renderActivityIndicator={() => (
                    <ActivityIndicator size="large" color="#000" />
                )}
                style={styles.pdf}
                enablePaging={true}
            />
        </View>
    )
}

export default memo(PdfView)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});
