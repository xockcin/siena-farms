import {StyleSheet} from 'react-native'

export const pageFrameStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#82AB01",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 36,
    marginBottom: 20,
  },
  logo: {
    height: 100,
    width: 70,
    marginLeft: 20,
    marginRight: 30,
  },
  titleBox: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 100,
    color: "#ff0000",
  },
});

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
  },
  item: {
    backgroundColor: "#e1e1e1",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontSize: 32,
    fontFamily: "serif",
  },
  img: {
    height: 90,
    width: 90,
    marginRight: 10,
  },
});
