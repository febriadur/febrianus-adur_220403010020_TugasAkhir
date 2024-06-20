import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function HomeScreen(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center',
            backgroundColor:'light grey'
            }}>
        
        <Text style={{
            fontSize:15,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/700/VqbcmM/2020/9/20/17bcff52-b518-4847-84c6-49f29db2b12d.jpg")
        }}style={{width:200,height:200,margin:5}} /> 
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/MTA-36004947/no_brands_baju_trendy_atasan_pria_lengan_pendek_casual_premium_full06_cfnofor8.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image 
        source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-36004947/brd-69012_baju-trendy-atasan-pria-lengan-pendek-casual-premium_full10.jpg" )
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-36004947/brd-69012_baju-trendy-atasan-pria-lengan-pendek-casual-premium_full02.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-36004947/brd-69012_baju-trendy-atasan-pria-lengan-pendek-casual-premium_full08.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-36004947/brd-69012_baju-trendy-atasan-pria-lengan-pendek-casual-premium_full07.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-35357073/brd-69012_baju-trendy-atasan-pria-lengan-pendek-casual-premium_full09.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://images.tokopedia.net/img/cache/700/hDjmkQ/2023/2/27/26708d3d-b85d-4959-88c2-1fd9d12f6de1.jpg")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://s2.bukalapak.com/img/28761017203/s-400-400/data.jpeg.webp")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        <Image source={{
            uri:("https://down-id.img.susercontent.com/file/id-11134207-7r990-lp4lr44endvb95")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
          textAlign:'center'
        }}>Rp:100.00</Text>
        <Button title="Beli" color='orange' onPress={() => Alert.alert ('Berhasil Dibeli')} />
        </ScrollView>
        
        </View>
    )
}