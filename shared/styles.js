import {StyleSheet} from 'react-native'

export const pageFrameStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#82AB01",
  },
  headerText: {
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
  header: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    marginRight: 100,
    color: "#ff0000",
  },
});

export const itemCardStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  background: {
    backgroundColor: "#e5e5e5",
    padding: 20,
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 250,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
  recipeLink: {
    backgroundColor: "#F8981C",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    margin: 3,
    padding: 10,
  },
  recipeText: {
    color: "#FFFFFF",
    textAlign: "center",
  },
});

export const boxItemStyles = StyleSheet.create({
  item: {
    backgroundColor: "#e5e5e5",
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
