import { StyleSheet } from "react-native"
import { block } from "react-native-reanimated"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d2"
  },

  // Header
  header: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    height: 70
  },

  totalJobs: {
    fontSize: 16,
    color: "#999",
    fontWeight: "500"
  },

  txtBold: {
    color: "#000",
    fontWeight: "bold"
  },


  // Welcome
  txtWelcome: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#999",
    paddingVertical: 10
  },

  // Jobs
  jobContainer: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    marginTop: 30,
    height: 320
  },

  jobTitle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"
  },
  
  orgName: {
    fontSize: 15,
    color: "#999",
    textAlign: "center"
  },

  orgCityUf: {
    fontSize: 15,
    color: "#999",
    textAlign: "center"
  },

  jobDescription: {
    fontSize: 16,
    lineHeight: 23,
    textAlign: "justify",
    marginTop: 13,
    fontWeight: "500",
    color: "#444",
    paddingHorizontal: 5,
    height: 160
  },

  btnSeeMore: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#1379B9",
    justifyContent: "center",
    height: 40,
    marginTop: 10,
    borderRadius: 2,
    flexDirection: "row"
  },

  btnSeeMoreTxt: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 5
  },
})
