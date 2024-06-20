import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function Home(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'orange',
        alignItems:'center'
      }}>
      <Text style={{
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        margin:30,
      }}>Selamat Datang Di Tokoh Penjualan Baju Online</Text> 
      <Image source={{
        uri:'https://images.tokopedia.net/blog-tokopedia-com/uploads/2020/06/2.-employee.jpg'}} style={{width:400,height:200,margin:70}}/>
        <Text style={{
        textAlign:'center',
        fontSize:30,
        fontWeight:'bold',
        margin:40}}>Selamat Berbelanja dan Nikmati Harimu</Text>
      </View>
    )
}