import {StatusBar} from 'expo-status-bar';
import {Alert, Image, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import logoUnivalle from './assets/univalle1.png';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
    const [image, setImage] = useState(null);

    let abrirArchivosAsync = async () => {
        console.log("abrirArchivosAsync")
        let ResultadoPermiso = await ImagePicker.requestMediaLibraryPermissionsAsync();
        console.log("Granted: "+ResultadoPermiso.granted)
        if(ResultadoPermiso.granted == false){
            console.log("is False: ")
            alert('Si no me das permiso,  no puedo funcionar');
            return;
        }
        //alert('tengo permiso');
        const resultadoSeleecion = await ImagePicker.launchImageLibraryAsync();
        console.log(resultadoSeleecion)
        console.log(resultadoSeleecion.assets[0].uri)
        if (!resultadoSeleecion.canceled) {
            setImage(resultadoSeleecion.assets[0].uri);
            console.log(image)
        }
    }

    let abrirCamaraAsync = async () => {
        console.log("abrirArchivosAsync")
        let ResultadoPermiso = await ImagePicker.requestCameraPermissionsAsync();
        console.log("Granted: "+ResultadoPermiso.granted)
        if(ResultadoPermiso.granted == false){
            console.log("is False: ")
            alert('Si no me das permiso, no puedo abrir camara');
            return;
        }
        //alert('tengo permiso');
        const resultadoCamara = await ImagePicker.launchCameraAsync();
        console.log(resultadoCamara)
        console.log(resultadoCamara.assets[0].uri)
        if (!resultadoCamara.canceled) {
            setImage(resultadoCamara.assets[0].uri);
            console.log(image)
        }
    }


    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {/*<Image*/}
            {/*    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Univalle_bol_cbb_logo.png'}}*/}
            {/*       style={styles.logo}*/}
            {/*/>*/}
            <Image source={logoUnivalle} style={styles.logo2}/>

            <Text style={styles.titulo}>Hola Univalle</Text>
            <Text style={styles.subtitulo}>Bienvenidos al MODULO-4</Text>
            <Pressable style={styles.boton2}
                       onPress={abrirCamaraAsync}>
                <Text style={styles.textoBoton}>Abrir Camara</Text>
            </Pressable>

            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'pink',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 50,
        color: '#522b46'
    },
    subtitulo: {
        alignSelf: 'center',
        color: '#522b46'
    },
    logo: {
        height: 100,
        width: 100,
    },
    logo2: {
        height: 200,
        width: 200,
        borderRadius: 100
    },
    boton2: {
        marginVertical: 20,
        backgroundColor: '#522b46',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        padding: 15
    },
    textoBoton: {
        fontSize: 16,
        color: '#FFFFFF',
    },
});
