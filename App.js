import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,Image} from 'react-native';


const Header = (props) => {
  return <Text>{props.title}</Text>
}

const Division = () => {
  return <Text>Division</Text>
}
const FriendSection = () => {
  return <Text>FriendSection</Text>
}
const FriendList = () => {
  return <View>
      <Profile name="강아지" uri= "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg" profileSize = {70}></Profile>
      <Profile name="강아지" uri= "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg" profileSize = {70}></Profile>
      <Profile name="강아지" uri= "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg" profileSize = {70}></Profile>
      <Profile name="강아지" uri= "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg" profileSize = {70}></Profile>
      <Profile name="강아지" uri= "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg" profileSize = {70}></Profile>
  </View>
}

const Profile = (props) => {
  return (
    <View style={{flexDirection:"row"}}>
      <Image source={{uri:props.uri}}
       style={{
        width:props.profileSize,
        height:props.profileSize
       }}></Image>
       <Text>{props.name}</Text>
       <Text>dsf</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="친구"></Header>
      <Profile 
      name="내 이름" 
      uri= "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg"
      profileSize = {100}
      ></Profile>
      <Division></Division>
      <FriendSection></FriendSection>
      <FriendList></FriendList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
